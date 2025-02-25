import { Flex } from "@radix-ui/themes"
import React from "react"
import { CircleAlert } from "lucide-react"
import { Editor } from "@tiptap/react"
import { Callout } from "@radix-ui/themes"

interface ValidationProps {
  thumbnail: File | null,
  category: string | null,
  tags: string | null,
  title: string,
  editor: Editor | null
}

const Validation: React.FC<ValidationProps> = ({ thumbnail, category, tags, title, editor }) => {

  return (
    <Flex display={
      (thumbnail && category && title && editor?.getText().length) ? 'none' : 'flex'
    } direction={'column'} gap="3">
      <Callout.Root highContrast size={'1'} color="red">
        <Callout.Icon><CircleAlert /></Callout.Icon>
        {!thumbnail &&
          <Callout.Text>
            Nėra titulinės nuotraukos
          </Callout.Text>
        }
        {!title &&
          <Callout.Text>
            Nėra antraštės
          </Callout.Text>
        }

        {!category &&
          <Callout.Text>
            Nėra kategorijos
          </Callout.Text>
        }

        {!tags &&
          <Callout.Text>
            Nėra subkategorijų
          </Callout.Text>
        }

        {!editor?.getText().length &&
          <Callout.Text>
            Nėra turinio
          </Callout.Text>
        }

      </Callout.Root>
    </Flex>
  )
}

export default Validation
