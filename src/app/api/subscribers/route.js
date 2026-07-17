import mongoose from "mongoose"
import { DBcon } from "../../../utils/dbUrl"
import { NextResponse } from "next/server";
import { SUBSCRIBERMODEL } from "../../../models/subscriberModel";

export const GET = async()=>{
 
    try {
        await mongoose.connect(DBcon);
        const data = await SUBSCRIBERMODEL.find();
    
        return NextResponse.json(data);
    
    } catch (error) {
      
        return NextResponse.json({message:error});
    }
 
}

export const POST = async(req)=>{

 
    try {
        await mongoose.connect(DBcon);
        const payload  = await req.json();
        const existing = await SUBSCRIBERMODEL.findOne(payload);
        if(existing){

            console.log('Email Already Exists')
            return NextResponse.json(data);

        }
        else{
            const data = new SUBSCRIBERMODEL(payload).save();
            return NextResponse.json(data);
        }


        
    } catch (error) {
      
        return NextResponse.json({message:error});
    }
 
}


