import { Box, Flex, Avatar, Text, Grid, TextField, Button, Tabs } from "@radix-ui/themes"
import { Upload } from "lucide-react"
import { IUser } from "@/models/userModel"

interface ProfileSettingsProps {
  avatar: File | null
  setAvatar: React.Dispatch<React.SetStateAction<File | null>>
  setUserProfile: React.Dispatch<React.SetStateAction<IUser>>
  userProfile: IUser
}

const Profile = ({ userProfile, setUserProfile, avatar, setAvatar }: ProfileSettingsProps) => {

  const handleAvatarUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAvatar(file)
    }
  }

  return (
    <Tabs.Content value="profile">
      <Flex direction="column" gap="4">
        <Text size="5" weight="bold">Profilio nustatymai</Text>

        {/* Avatar Upload */}
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">Profile nuotrauka</Text>
          <Flex align="end" gap="4">
            <Avatar
              size="6"
              src={avatar ? URL.createObjectURL(avatar) : '/images/' + userProfile.avatar}
              fallback={userProfile.username?.[0] as string}
            />
            <Box>
              <Button
                variant="soft"
                onClick={() => document.getElementById('avatar-upload')?.click()}
              >
                <Upload size={16} />
                Keisti
              </Button>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarUpdate}
                style={{ display: 'none' }}
              />
            </Box>
          </Flex>
        </Flex>

        <Grid columns="2" gap="4">
          <TextField.Root
            disabled
            type="email"
            placeholder="Vartotojo vardas"
            value={userProfile.username}
            onChange={(e) => setUserProfile(prev => ({
              ...prev,
              email: e.target.value
            }))}
          />

          <TextField.Root
            disabled
            type="email"
            placeholder="El. paštas"
            value={userProfile.email}
            onChange={(e) => setUserProfile(prev => ({
              ...prev,
              email: e.target.value
            }))}
          />

          <TextField.Root
            placeholder="Vardas"
            value={userProfile.firstName as string}
            onChange={(e) => setUserProfile(prev => ({
              ...prev,
              firstName: e.target.value
            }))}
          />

          <TextField.Root
            placeholder="Pavardė"
            value={userProfile.lastName as string}
            onChange={(e) => setUserProfile(prev => ({
              ...prev,
              lastName: e.target.value
            }))}
          />

          <TextField.Root
            placeholder="Vietovė"
            value={userProfile.location as string}
            onChange={(e) => setUserProfile(prev => ({
              ...prev,
              location: e.target.value
            }))}
          />

          <TextField.Root
            placeholder="Svetainė"
            value={userProfile.website as string}
            onChange={(e) => setUserProfile(prev => ({
              ...prev,
              website: e.target.value
            }))}
          />
        </Grid>

        <TextField.Root
          placeholder="Bio"
          value={userProfile.bio as string}
          onChange={(e) => setUserProfile(prev => ({
            ...prev,
            bio: e.target.value
          }))}
        />

      </Flex>
    </Tabs.Content>

  )
}

export default Profile
