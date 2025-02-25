import mongoose, { Schema, model } from "mongoose";
import INewsPost from "@/interface/INewsPost";


const newsSchema = new Schema<INewsPost>({
  pinned: {
    type: Boolean,
    required: false,
    default: false,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  views: {
    type: Number,
    required: false,
    default: 0
  },
  likes: {
    type: Number,
    required: false,
    default: 0,
  },
  tags: {
    type: [String],
    required: true,
  },
  minutesToRead: {
    type: Number,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
}, { timestamps: { createdAt: true, updatedAt: true } })


export default mongoose.models.News || model<INewsPost>('News', newsSchema)
