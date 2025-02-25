'use server'
import connect from "@/lib/dbConnect"
import News from '@/models/newsModel'
import INewsPost from "@/interface/INewsPost"
import '@/models/userModel'


export default async function getNewsPost(path: string): Promise<{ post: INewsPost; relatedPosts: INewsPost[] }> {
  await connect()

  const post = await News.findOne({ path: path }).populate('author', 'username firstName lastName avatar -_id')
  const relatedPosts = await News.find({
    $or: [
      { category: post.category },
      { tags: { $in: post.tags } },
    ],
    _id: { $ne: post._id }
  }).sort({ createdAt: -1 }).limit(4)

  if (post) {
    post.views += 1
  }
  await post.save();

  return { post, relatedPosts }
}
