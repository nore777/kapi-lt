import { FormEvent, useState } from 'react'
import { Flex, Text, Button, TextField, Link, Checkbox } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import Callout from '../../components/Callout'
import { MessageCircleWarning } from "lucide-react"
import axios, { AxiosError } from 'axios'

export default function RegisterForm() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [newsletter, setNewsletter] = useState<boolean>(false)
  const [TOSPP, setTOSPP] = useState<boolean>(false)
  const [error, setError] = useState<string>('');
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/user/register/', { username, email, password, repeatPassword, TOSPP, newsletter })
      console.log(response)
      if (response.status === 201) {
        router.push('/login')
      }
      console.log(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
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
            id="email"
            type="email"
            placeholder='El. paštas'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <TextField.Root
            id="repeat-password"
            type="password"
            placeholder='Pakartoti slaptažodį'
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />

          <Flex gap={"3"} align={"center"}>
            <Checkbox checked={TOSPP} onClick={() => setTOSPP(!TOSPP)} />
            <Text>Sutinku su <Link>privatumo politika</Link> ir <Link>naudotojo taisyklėmis</Link></Text>
          </Flex>

          <Flex gap={"3"} align={"center"}>
            <Checkbox checked={newsletter} onClick={() => setNewsletter(!newsletter)} />
            <Text>Sutinku gauti naujienlaiškį</Text>
          </Flex>

          <Button type="submit" variant="outline">Registruotis</Button>
        </Flex>
      </form>
    </>
  )
}
