'use client'
import AuthContainer from '@/components/AuthContainer'
import RegisterForm from './RegisterForm';
import { Link, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
const Register = () => {
  const router = useRouter()

  return (
    <AuthContainer header={<Text size={"5"}>Jau turite paskyrą? <Link onClick={() => router.push('/login')}>Prisijungimas</Link>.</Text>}>
      <RegisterForm />
    </AuthContainer>
  );
};

export default Register;
