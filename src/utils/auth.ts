import { NextRequest } from "next/server"

// Parse the x-user header and return the userData object, if no header
// is present return the Response object
// (which you'll need to return if !userData in the route as well)

// TODO: clean up

export default async function auth(req: Request | NextRequest, roles: string[]) {
  const userData = JSON.parse(req.headers.get('x-user') as string) || null
  if (!userData) {
    return Response.json({ message: "unauthorized" }, { status: 401 })
  }

  let hasRole = false
  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (userData.roles.includes(roles[i])) {
        hasRole = true
      }
    }

  } else {
    hasRole = true
  }

  if (hasRole) {
    return userData
  } else {
    return Response.json({ message: "forbidden" }, { status: 403 })
  }
}
