import { NextRequest } from "next/server"
import formatPath from "@/utils/formatPath"
import connect from "@/lib/dbConnect"
import News from '@/models/newsModel'
import calculateReadingTime from '@/utils/calculateReadingTime'
import regexToStringArray from "@/utils/regexToStringArray"
import uploadFile from "@/utils/uploadFile"
import auth from "@/utils/auth"

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {

  const formData = await req.formData()
  const title = formData.get('title') as string || null
  const excerpt = formData.get('excerpt') as string || null
  const category = formData.get('category') as string || null
  const tags = formData.get('tags') as string || null
  const content = formData.get('content') as string || null
  const thumbnail = formData.get('thumbnail') as File || null


  // Check for missing fields
  if (!title || !category || !content || !thumbnail || !tags || !excerpt) {
    return Response.json({ message: "missingContent" }, { status: 400 })
  }

  // Create tags
  const tagRegex = /[ A-Za-z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+(?! ,)/gm
  const tagArray = regexToStringArray(tagRegex, tags)


  try {
    const userData = await auth(req, ['user'])
    if (userData instanceof Response) {
      return userData
    }

    // Upload thumbnail
    const thumbnailName = await uploadFile(thumbnail, '/public/images', 'image')

    // connect to db
    await connect()

    const newsCount = await News.countDocuments()
    const newsPath = formatPath(title) + '-' + newsCount

    const news = new News({
      title: title,
      excerpt: excerpt,
      category: category,
      content: content,
      thumbnail: thumbnailName,
      author: userData.id,
      tags: tagArray,
      minutesToRead: calculateReadingTime(content),
      path: newsPath,
    })

    await news.save()
    // All good
    return Response.json({ message: 'success' }, { status: 200 })

  } catch (error) {
    console.log(error)
    return Response.json({ message: "serverError" }, { status: 500 })
  }
}
