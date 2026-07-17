import mongoose from "mongoose"
import { DBcon } from "../../../utils/dbUrl"
import { ReviewsModel } from "../../../models/reviewModel";
import { NextResponse } from "next/server";

export const GET = async()=>{
 
    try {
        await mongoose.connect(DBcon);
        const data = await ReviewsModel.find();
    
        return NextResponse.json(data);
    
    } catch (error) {
      
        return NextResponse.json({message:error});
    }
 
    
}

export const POST = async(req)=>{
 
    try {
        await mongoose.connect(DBcon);
        const payload  = await req.json();

        const data = new ReviewsModel(payload).save();
    
        return NextResponse.json(data);
    
    } catch (error) {
      
        return NextResponse.json({message:error});
    }
 
}

export const DELETE = async(req)=>{
 
    try {
        await mongoose.connect(DBcon);
        const payload  = await req.json();
        const data = await ReviewsModel.findByIdAndDelete(payload)
        return NextResponse.json(data);
    
    } catch (error) {
      
        return NextResponse.json({message:error});
    }
 
}

export const PUT = async(req)=>{
 
    try {
        await mongoose.connect(DBcon);
        const payload  = await req.json();
        const filter = {_id:payload.id}
        const data = await ReviewsModel.findOneAndUpdate(filter,{status:payload.status})
        return NextResponse.json(data);
    
    } catch (error) {
      
        return NextResponse.json({message:error});
    }
 
}