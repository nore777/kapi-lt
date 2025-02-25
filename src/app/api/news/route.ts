import connect from "@/lib/dbConnect";
import News from "@/models/newsModel";
import '@/models/userModel'

export async function GET() {

  try {
    await connect()
    const news = await News.find().populate('author', 'username -_id').select('-content')

    return Response.json({ news: news }, { status: 200 })

  } catch (error) {
    console.log(error)
    return Response.json({ message: 'serverError' }, { status: 500 })
  }
}

export async function POST() {
}
