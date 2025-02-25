import registerFormValidation from '@/utils/validation/form/registerValidation'
import User from '@/models/userModel'
import { hashPassword } from '@/utils/hash'
import connect from '@/lib/dbConnect'

export async function POST(req: Request) {
  const { username, email, password, repeatPassword, TOSPP } = await req.json()

  try {
    const validation = await registerFormValidation(username, email, password, repeatPassword, TOSPP)
    if (validation !== true) {
      return Response.json({ message: validation }, { status: 400 })
    }
    const hashedPassword = await hashPassword(password)

    const user = new User({
      username,
      email,
      password: hashedPassword,
    })
    await connect()
    await user.save()
    return Response.json({}, { status: 201 })

  } catch (error) {
    console.log(error)
    return Response.json({ message: "serverError" }, { status: 500 })
  }
}
