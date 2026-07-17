import mongoose from "mongoose";

const ClientModel = new mongoose.Schema({
  title: String,
  mainimg: String,
  pageimg: String,
  postedby: String,
  slug: String,
  weblink: String,
  blog_detail: [
    {
      subheading: String,
      description: String,
      bullets: [
        {
          heading: String,
          subheading: String,
          desc: String,
        },
      ],
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

export const CLIENTMODEL =
  mongoose.models.clients || mongoose.model("clients", ClientModel);
