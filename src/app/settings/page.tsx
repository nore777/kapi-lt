'use client'

import { useState, useEffect } from 'react'
import {
  Flex,
  Card,
  Tabs,
  Text,
  Button,
  Box,
} from '@radix-ui/themes'
import { Mail } from 'lucide-react'
import Layout from '@/components/Layout'
import Profile from '@/components/settings/Profile'
import { IUser } from '@/models/userModel'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthProvider'


export default function UserSettings() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState<File | null>(null)
  const [userProfile, setUserProfile] = useState<IUser>({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    bio: '',
    location: '',
    website: '',
    isVerified: false,
  })
  const { userData } = useAuth()

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const response = await axios.get('/api/user/profile/' + userData.username)
        if (response.status === 200) {
          setUserProfile(response.data.user)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchInitialData()
  }, [])


  const handleProfileUpdate = async () => {
    setLoading(true)
    try {
      const formData = new FormData()

      if (avatar) {
        formData.append('avatar', avatar as File)
      }

      formData.append('username', userProfile.username as string)
      formData.append('email', userProfile.email as string)
      formData.append('firstName', userProfile.firstName as string)
      formData.append('lastName', userProfile.lastName as string)
      formData.append('location', userProfile.location as string)
      formData.append('website', userProfile.website as string)
      formData.append('bio', userProfile.bio as string)

      const response = await axios.patch('/api/user/profile/' + userData.username, formData)
      if (response.status === 200) {
        // TODO: create notification provider
        router.push('/profile/' + userData.username)
      }
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }


  return (
    <Layout>
      <Card size="4" mx={{ initial: '-6', xs: '0' }}>
        <Tabs.Root defaultValue="profile">
          <Tabs.List>
            <Tabs.Trigger value="profile">Profilis</Tabs.Trigger>
            <Tabs.Trigger value="account">Paskyra</Tabs.Trigger>
            <Tabs.Trigger value="notifications">Pranešimai</Tabs.Trigger>
          </Tabs.List>

          <Box my="5">
            <Tabs.Content value="profile">
              <Profile
                avatar={avatar}
                setAvatar={setAvatar}
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            </Tabs.Content>

            <Tabs.Content value="account">
              <Flex direction="column" gap="4">
                <Text size="5" weight="bold">Account Settings</Text>

                <Card>
                  <Flex direction="column" gap="3">
                    <Flex align="center" gap="2">
                      <Mail size={16} />
                      <Text weight="bold">El. pašto patvirtinimas</Text>
                    </Flex>
                    <Text size="2" color="gray">
                      {userProfile.isVerified === false ? 'El. pašto adresas nėra patvirtintas' : 'El. pašto adresas yra patvirtintas!'}
                    </Text>
                  </Flex>
                </Card>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="notifications">
            </Tabs.Content>
          </Box>

          <Flex justify="end" gap="3" mt="4">
            <Button variant="soft" color="gray">
              Atšaukti
            </Button>
            <Button onClick={handleProfileUpdate} disabled={loading}>
              {loading ? 'Saugoma...' : 'Išsaugoti'}
            </Button>
          </Flex>
        </Tabs.Root>
      </Card>
    </Layout>
  )
}
