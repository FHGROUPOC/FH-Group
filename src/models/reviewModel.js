import mongoose from "mongoose";

const ReviewModel = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    rating:String,
    image:String,
    status:String,
    service:String,
    createdAt:{
        type:Date,
        default:Date.now
    }

})

export const ReviewsModel = mongoose.models.Reviews || mongoose.model('Reviews',ReviewModel)