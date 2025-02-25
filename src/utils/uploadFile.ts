// File upload helper, gives uuid for every file name by default
import path from "path"
import { v4 as uuidv4 } from 'uuid'
import { writeFile } from "fs/promises"

type FileType = 'any' | 'image'

export default async function uploadFile(file: File, to: string, type: FileType) {
  const fileType = file.type.split('/')[0]
  const fileName = uuidv4() + '.' + file.type.split('/')[1]

  try {
    if (type !== 'any') {
      // TODO: placeholder. Change to support more types in the future?
      if (type !== fileType) {
        throw Error('Invalid file type')
      }
    }

    const filePath = path.join(process.cwd(), to, fileName)
    const fileBytes = await file.arrayBuffer()
    const fileBuffer = Buffer.from(fileBytes)
    await writeFile(filePath, fileBuffer)
    return fileName

  } catch (error) {
    console.log(error)
  }

}
