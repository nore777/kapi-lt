import React, { useState } from 'react'
import axios, { AxiosError } from 'axios';
import { Flex, Text, Button, TextField, Checkbox } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import Callout from '../../components/Callout';
import { MessageCircleWarning } from 'lucide-react'
import { useAuth } from '../../context/AuthProvider';

export default function LoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [stayLoggedIn, setStayLoggedIn] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true)

    try {
      setLoading(true)
      const response = await axios.post('/api/user/login', { username, password })
      if (response) {
        login()
        router.push('/')
      }
      setLoading(false)
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message)
        setLoading(false)
      }
    }
  };

  return (
    <>
      {error && (<Callout mb={'4'} icon={<MessageCircleWarning />} color={"gold"} text={error} />)}

      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="4">
          <TextField.Root
            id="username"
            placeholder='Vartotojo vardas'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField.Root
            id="password"
            type="password"
            placeholder='Slaptažodis'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox defaultChecked checked={stayLoggedIn} onClick={() => setStayLoggedIn(!stayLoggedIn)} />
              Likti prisijungus
            </Flex>
          </Text>
          <Button loading={loading} type="submit" variant="outline">Prisijungti</Button>
        </Flex>
      </form>
    </>
  )
}
