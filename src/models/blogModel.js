import mongoose from "mongoose";

const BlogModel = new mongoose.Schema({
  title: String,
  img: String,
  postedby: String,
  slug: String,
  category: String,
  imgalt:String,
  blog_detail: [
    {
      subheading: String,
      description: String,
      bullets: [
        {
          heading: String,
          desc: String,
        },
      ],
    },
  ],
  comments: [
    {
      img: String,
      name: String,
      email: String,
      message: String,
      status: {
        type: String,
        default: "Inactive",
      },
      replies: [
        {
          img: String,
          name: String,
          email: String,
          message: String,
          status: {
            type: String,
            default: "Inactive",
          },
          postedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      postedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  status: {
    type: String,
    default: "Inactive",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const BLOGMODEL =
  mongoose.models.blogs || mongoose.model("blogs", BlogModel);
