import * as jose from 'jose'
import connect from '@/lib/dbConnect'
import User from '@/models/userModel'
import { verifyPassword } from '@/utils/hash'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest): Promise<Response> {
  const { username, password } = await req.json()

  try {
    await connect();
    const user = await User.findOne({ username: username }).select('username password roles')
    const cookie = await cookies()
    const secret = new TextEncoder().encode(process.env.JWT_KEY)

    if (!user) {
      return Response.json({ message: "loginFailed" }, { status: 400 })
    }

    const checkPassword = await verifyPassword(user.password, password)
    if (checkPassword !== true) {
      return Response.json({ message: "loginFailed" }, { status: 400 })
    }

    const token = await new jose.SignJWT({
      id: user._id,
      username: user.username,
      roles: user.roles
    })
      .setProtectedHeader({ alg: 'HS256' })
      .sign(secret)

    const userData = JSON.parse(req.headers.get('x-user') as string)

    cookie.set('token', token, { httpOnly: true, sameSite: 'strict' })

    return Response.json({ userData }, { status: 200 })
  } catch (error) {
    console.log(error)
    return Response.json({ message: "serverError" }, { status: 500 })
  }
}
