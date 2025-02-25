import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  console.log("HELLO", req.headers.get('x-user'))
  return Response.json(req.headers.get('x-user'))
}

