'use server'
import { cookies } from "next/headers"
import * as jose from 'jose'

export default async function getUser() {
  const parsedCookies = await cookies()
  const token = parsedCookies.get('token')?.value

  try {
    if (token) {
      const secret = new TextEncoder().encode(process.env.JWT_KEY as string)
      const { payload } = await jose.jwtVerify(token, secret)
      if (payload) {
        return { isLoggedIn: true, userData: { id: payload.id, username: payload.username, roles: payload.roles } }
      }
    }
    return { isLoggedIn: false, userData: { id: '', username: '', roles: [''] } }

  } catch (error) {
    return { isLoggedIn: false, userData: { id: '', username: '', roles: [''] } }
  }
}

