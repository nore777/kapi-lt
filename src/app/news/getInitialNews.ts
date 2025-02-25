'use server'
import connect from "@/lib/dbConnect";
import News from "@/models/newsModel";
import '@/models/userModel'

export default async function getInitialNews() {
  await connect()
  const news = await News.find()
    .sort({ createdAt: -1 })
    .populate('author', 'username firstName lastName -_id')
    .select('-content -_id')
  return news
}

