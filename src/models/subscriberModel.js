import mongoose from "mongoose";

const SubscriberModel = new mongoose.Schema({
    email:String,
    createdAt:{
        type:Date,
        default:Date.now
    }

})

export const SUBSCRIBERMODEL = mongoose.models.subscribers || mongoose.model('subscribers',SubscriberModel)