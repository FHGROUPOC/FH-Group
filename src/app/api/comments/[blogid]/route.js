import mongoose from "mongoose";
import { DBcon } from "../../../../utils/dbUrl";
import { BLOGMODEL } from "../../../../models/blogModel";
import { NextResponse } from "next/server";

export const GET = async(req, res) => {
    try {
        await mongoose.connect(DBcon);
        const { blogid } = res.params; // console.log(blogid)
        const data = await BLOGMODEL.findOne({ slug: blogid });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error });
    }
};

export const PUT = async(req, res) => {
    try {
        await mongoose.connect(DBcon);
        const {commentid,status} = await req.json();
        const { blogid } = res.params; // console.log(blogid)
        const filter = { _id: blogid , 'comments._id':commentid};
        const data = await BLOGMODEL.findOneAndUpdate(
            filter, {
                $set: { 'comments.$.status': status },
            }, { new: true }
        );
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error });
    }
};

export const PATCH = async(req, res) => {
    try {
        await mongoose.connect(DBcon);
        const {commentid,replyid,status} = await req.json();
        const { blogid } = res.params; // console.log(blogid)
        const filter = { _id: blogid , 'comments._id':commentid, 'comments.replies._id':replyid};
        const data = await BLOGMODEL.findOneAndUpdate(
            filter, {
                $set: { 'comments.$.replies.$[reply].status':status }
            }, { new: true ,arrayFilters: [{ 'reply._id': replyid }]}
        );
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error });
    }
};