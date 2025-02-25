import React, { useState, ChangeEvent } from 'react'
import { Dialog, Button, Flex } from "@radix-ui/themes"
import { Image as ImageLogo } from 'lucide-react'
import Image from 'next/image'

interface AddImageProps {
  handleImage: (image: string) => void
}

const AddImage: React.FC<AddImageProps> = ({ handleImage }) => {
  const [image, setImage] = useState('')

  const getImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return
    }
    const url = URL.createObjectURL(e.target.files[0])
    setImage(url)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant='soft'>
          <ImageLogo size={18} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Įkelti nuotrauką</Dialog.Title>
        {image && <Image alt="Uploaded image" style={{ width: '100%', height: 'auto' }} src={image} />}
        <input type="file" onChange={(e) => getImage(e)} />
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Atšaukti
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={() => { handleImage(image); setImage('') }}>Išsaugoti</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default AddImage
