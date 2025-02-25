'use client'
import { Button, DropdownMenu, Flex } from "@radix-ui/themes"
import { User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "../../context/AuthProvider"
import useTheme from "../../hooks/useTheme"
import { Sun, Moon } from "lucide-react"


const ProfileDropdown = () => {
  const router = useRouter()
  const { userData, logout } = useAuth()
  const { switchTheme, theme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="ghost">
          <User color="var(--gray-12)" height={18} />
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <Flex minWidth={'250px'} direction={'column'}>

          <DropdownMenu.Item onClick={() => router.push('/profile/' + userData.username)}>Profilis</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => router.push('/settings')}>Nustatymai</DropdownMenu.Item>

          <DropdownMenu.Separator />

          <Button variant="ghost" color="gray" onClick={() => switchTheme()}>
            {theme === 'dark' ? <Moon /> : <Sun />}
          </Button>

          <DropdownMenu.Separator />

          <DropdownMenu.Item color="red" onClick={() => { logout(); router.push('/') }}>
            Atsijungti
          </DropdownMenu.Item>
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

  )
}

export default ProfileDropdown
