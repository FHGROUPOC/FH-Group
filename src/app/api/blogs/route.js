import mongoose from "mongoose";
import { DBcon } from "../../../utils/dbUrl";
import { BLOGMODEL } from "../../../models/blogModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await mongoose.connect(DBcon);
    const data = await BLOGMODEL.find();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};

export const POST = async (req) => {
  try {
    await mongoose.connect(DBcon);

    const payload = await req.json();

    const newBlog = new BLOGMODEL(payload);
    const savedBlog = await newBlog.save();

    return NextResponse.json(savedBlog);
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Internal error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req) => {
  try {
    await mongoose.connect(DBcon);
    const payload = await req.json();
    const data = await BLOGMODEL.findByIdAndDelete(payload);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};

export const PUT = async (req) => {
  try {
    await mongoose.connect(DBcon);
    const payload = await req.json();
    const filter = { _id: payload.id };
    const data = await BLOGMODEL.findOneAndUpdate(filter, {
      status: payload.status,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};
