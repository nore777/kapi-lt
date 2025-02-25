import connect from "@/lib/dbConnect"
import User from '@/models/userModel'
import auth from "@/utils/auth"
import uploadFile from "@/utils/uploadFile"

// GET
//
//
//
export async function GET(req: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const username = (await params).username
    const userData = await auth(req, ['user'])

    const isUser = username === userData.username

    await connect()

    let user;
    if (isUser) {
      user = await User.findOne({ _id: userData.id })
        .select(`avatar username firstName lastName bio website location email isVerified createdAt -_id`)

    } else {
      user = await User.findOne({ username: username })
        .select(`avatar username firstName lastName bio website location isVerified createdAt -_id`)

    }

    console.log(user)
    if (!user) {
      return Response.json({ message: "userNotFound" }, { status: 404 })
    }

    return Response.json({ user: user }, { status: 200 })

  } catch (error) {
    console.log(error)
    return Response.json({ message: "serverError" }, { status: 500 })
  }
}

// PATCH
//
//
//
export async function PATCH(req: Request) {

  try {
    const userData = await auth(req, ['user'])
    if (userData instanceof Response) {
      return userData
    }

    await connect()

    const user = await User.findOne({ _id: userData.id })

    if (!user) {
      return Response.json({ message: "userNotFound" }, { status: 404 })
    }

    const formData = await req.formData()
    user.firstName = (formData.get('firstName') as string).trim()
    user.lastName = (formData.get('lastName') as string).trim()

    const avatarFormData = formData.get('avatar') as File || null
    if (avatarFormData) {
      const avatar = await uploadFile(avatarFormData, '/public/images', 'image')
      user.avatar = avatar
    }

    user.website = (formData.get('website') as string)
    user.bio = (formData.get('bio' as string))
    user.location = (formData.get('location') as string)

    await user.save()

    return Response.json({ message: "success" }, { status: 200 })

  } catch (error) {
    console.log(error)
    return Response.json({ message: "serverError" }, { status: 500 })
  }
}
