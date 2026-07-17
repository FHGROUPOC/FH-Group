import mongoose from "mongoose";
import { DBcon } from "../../../../utils/dbUrl";
import { CLIENTMODEL } from "../../../../models/clientModel";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await mongoose.connect(DBcon);
    const { clientid } = res.params; // console.log(clientid)
    const data = await CLIENTMODEL.findOne({ slug: clientid });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};

export const PUT = async (req, res) => {
  try {
    await mongoose.connect(DBcon);
    const payload = await req.json();
    const { clientid } = res.params; // console.log(clientid)
    const filter = { _id: clientid };
    const data = await CLIENTMODEL.findOneAndUpdate(filter, payload);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};
