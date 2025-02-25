'use client'
import AuthContainer from '@/components/AuthContainer';
import { Link, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import LoginForm from './LoginForm';

const Login = () => {
  const router = useRouter()
  return (
    <>
      <AuthContainer header={<Text size={"5"}>Neturite paskyros? <Link onClick={() => router.push('/register')}>Registracija</Link>.</Text>}>
        <LoginForm />
      </AuthContainer>
    </>
  );
};

export default Login;
