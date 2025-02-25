// Display children if user has certain roles
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthProvider';

interface ChildrenProps {
  children: React.ReactNode
  roles: string[]
}

const AuthChildren = ({ children, roles }: ChildrenProps) => {
  const { isLoggedIn, userData } = useAuth()
  const [hasRole, setHasRole] = useState<boolean>(false)

  useEffect(() => {
    if (!userData || !isLoggedIn) {
      setHasRole(false);
    } else {
      const userHasRole = roles.some(role => userData.roles?.includes(role));
      setHasRole(userHasRole);
    }

    return () => {
      setHasRole(false);
    };
  }, [isLoggedIn, userData, roles]);


  if (!hasRole) return <></>
  return children
};

export default AuthChildren;

