import React, { ChangeEvent } from "react"
import Image from "next/image"
import { Flex, Badge, Text } from "@radix-ui/themes"
import { Upload } from "lucide-react"


interface AddThumbnailProps {
  thumbnail: File | null,
  setThumbnail: (file: File | null) => void
}

const AddThumbnail: React.FC<AddThumbnailProps> = ({ thumbnail, setThumbnail }) => {
  function handleThumbnail(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files === null || e.target.files.length === 0) return
    setThumbnail(e.target.files[0])
  }

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{
          border: !thumbnail ? '2px dashed var(--gray-6)' : 'none',
          borderRadius: 'var(--radius-3)',
          padding: 'var(--space-4)',
          cursor: 'pointer',
          minHeight: '150px'
        }}
        onClick={() => document.getElementById('news-thumbnail-upload')?.click()}
      >
        {thumbnail ? (
          <Flex direction="column" align="center" gap="2">
            <Image
              alt="Uploaded image"
              width={100}
              height={100}
              style={{
                width: "200px",
                height: 'auto',
                borderRadius: '1em'
              }}
              src={URL.createObjectURL(thumbnail)}
            />
            <Badge color="green">{(thumbnail as File).name}</Badge>
          </Flex>
        ) : (
          <Flex direction="column" align="center" gap="2">
            <Upload size={24} />
            <Text size="2">Įkelti titulinę nuotrauką</Text>
          </Flex>
        )}



        <input
          id="news-thumbnail-upload"
          type="file"
          accept="image/*"
          name="thumbnail"
          onChange={(e) => handleThumbnail(e)}
          style={{ display: 'none' }} />
      </Flex>
    </>
  )
}

export default AddThumbnail
