'use client'
import {
  Container,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Tabs,
} from '@radix-ui/themes';
import { LocateIcon as LocationIcon, CalendarIcon, LinkIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import formatDate from '@/utils/formatDate';
import { IUser } from '@/models/userModel';

export default function ProfilePage({ params }: { params: Promise<{ user: string }> }) {
  const [userProfile, setUserProfile] = useState<IUser | null>(null)
  const [notFound, setNotFound] = useState<boolean>(false)


  const profile = {
    following: 0,
    followers: 0,
  };

  useEffect(() => {
    async function fetchUser() {
      const param = await params
      console.log(param.user)

      try {
        const response = await axios.get('/api/user/profile/' + param.user);
        if (response.status === 200) {
          setUserProfile(response.data.user)
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.status === 404) {
            setNotFound(true)
          }
        }
        console.log(error)
      }
    }
    fetchUser()

  }, [])


  if (notFound) {
    return (
      <Layout>
        <Heading>Profilis neegzistuoja.</Heading>
      </Layout>
    )
  }

  if (!userProfile) {
    return (
      <Layout>
        <Heading>Profilis kraunasi...</Heading>
      </Layout>
    )
  }

  return (
    <Layout>
      <Box mt={'9'}>
        <Container size="4">
          {/* Profile Section */}
          <Flex direction="column" gap="4">
            <Flex justify="between" align="start" style={{ marginTop: '-40px' }}>
              <Avatar
                size="7"
                src={`/images/${userProfile.avatar}`}
                fallback="SW"
                style={{
                  border: '4px solid var(--color-surface)',
                  borderRadius: 'var(--radius-3)'
                }}
              />
            </Flex>

            <Box>
              {userProfile.firstName && userProfile.lastName ?
                <Heading size="6" mb="1">{userProfile.firstName} {userProfile.lastName}</Heading>
                :
                <Heading size="6" mb="1">{userProfile.username}</Heading>
              }
              <Text size="2" color="gray">@{userProfile.username}</Text>
              <Text as="p" size="3" mt="3">
                {userProfile.bio}
              </Text>

              <Flex gap="4" mt="4" mb="4">
                <Flex display={userProfile.location ? 'flex' : 'none'} align="center" gap="1">
                  <LocationIcon size={15} />
                  <Text size="2" color="gray">{userProfile.location}</Text>
                </Flex>
                <Flex display={userProfile.website ? 'flex' : 'none'} align="center" gap="1">
                  <LinkIcon size={15} />
                  <Text size="2" color="blue" asChild>
                    <a href={`https://${userProfile.website}`}>{userProfile.website}</a>
                  </Text>
                </Flex>
                <Flex display={userProfile.createdAt ? 'flex' : 'none'} align="center" gap="1">
                  <CalendarIcon size={15} />
                  <Text size="2" color="gray">Nuo {formatDate(new Date(userProfile.createdAt!))}</Text>
                </Flex>
              </Flex>

              <Flex gap="4">
                <Text size="3">
                  <strong>{profile.following}</strong> Sekama
                </Text>
                <Text size="3">
                  <strong>{profile.followers}</strong> Sekėjai
                </Text>
              </Flex>
            </Box>

            {/* Tabs Section */}
            <Tabs.Root defaultValue="news">
              <Tabs.List>
                <Tabs.Trigger value="news">Naujienos</Tabs.Trigger>
              </Tabs.List>

              <Box pt="4">
                <Tabs.Content value="news">
                  <Text align="center" color="gray" mt="8">
                    WIP...
                  </Text>
                </Tabs.Content>

              </Box>
            </Tabs.Root>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}
