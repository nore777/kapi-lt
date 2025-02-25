'use server'
import { cookies } from "next/headers";

export default async function removeUser() {
  const parsedCookies = await cookies()
  parsedCookies.delete('token')
}
