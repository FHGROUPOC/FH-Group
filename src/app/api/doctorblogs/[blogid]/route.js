import mongoose from "mongoose";
import { DBcon } from "../../../../utils/dbUrl";
import { DOCTORBLOGMODEL } from "../../../../models/doctorblogModel";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await mongoose.connect(DBcon);
    const { blogid } = res.params; // console.log(blogid)
    const data = await DOCTORBLOGMODEL.findOne({ slug: blogid });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};

export const PUT = async (req, res) => {
  try {
    await mongoose.connect(DBcon);
    const payload = await req.json();
    const { blogid } = res.params; // console.log(blogid)
    const filter = { _id: blogid };
    const data = await DOCTORBLOGMODEL.findOneAndUpdate(filter, payload);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};

export const PATCH = async (req, res) => {
  try {
    await mongoose.connect(DBcon);
    const payload = await req.json();
    const { blogid } = res.params; // console.log(blogid)
    const filter = { _id: blogid };
    const data = await DOCTORBLOGMODEL.findOneAndUpdate(
      filter,
      {
        $push: { comments: payload },
      },
      { new: true }
    );
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};

export const POST = async (req, res) => {
  try {
    await mongoose.connect(DBcon);
    const { name, email, img, message, commentid } = await req.json();
    const payload = { name, email, img, message };
    const { blogid } = res.params; // console.log(blogid)
    const filter = {
      _id: blogid,
      "comments._id": commentid,
    };
    const data = await DOCTORBLOGMODEL.findOneAndUpdate(
      filter,
      {
        $push: { "comments.$.replies": payload },
      },
      { new: true }
    );
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};

export const DELETE = async (req, res) => {
  try {
    await mongoose.connect(DBcon);
    const { commentid, commentidforreply, replyid } = await req.json();
    // const payload = { name, email, img, message };
    const { blogid } = res.params; // console.log(blogid);

    if (commentid) {
      const filter = {
        _id: blogid,
      };
      const data = await DOCTORBLOGMODEL.findByIdAndUpdate(
        filter,
        {
          $pull: {
            comments: {
              _id: commentid,
            },
          },
        },
        { new: true }
      );
      return NextResponse.json(data);
    } else if ((commentidforreply, replyid)) {
      const filter = {
        _id: blogid,
        "comments._id": commentidforreply,
      };
      const data = await DOCTORBLOGMODEL.findOneAndUpdate(
        filter,
        {
          $pull: { "comments.$.replies": { _id: replyid } },
        },
        { new: true }
      );
      return NextResponse.json(data);
    }
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};
