'use client'
import Layout from '@/components/Layout';
import AuthChildren from '@/components/AuthChildren';
import { Flex } from '@radix-ui/themes';
import { useAuth } from '@/context/AuthProvider';

export default function Home() {
  const { userData } = useAuth()
  return (
    <Layout>
      Hello!
      <AuthChildren roles={['user']}>
        <Flex>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </Flex>
      </AuthChildren>
    </Layout>
  );
}

