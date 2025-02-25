import { Card, Flex } from "@radix-ui/themes";
import Image from "next/image";

const ProfileCard = () => {

  return (
    <>
      <Card>
        <Flex style={{ width: '200px', height: '200px' }}>
          <Image
            alt="Profile image"
            src="https://picsum.photos/1000/1000"
            width={200}
            height={200}
            style={{ background: 'var(--slate-4)', borderWidth: 0, borderStyle: 'none', borderRadius: '50%' }}
          />
        </Flex>
      </Card >
    </>
  )
}

export default ProfileCard
