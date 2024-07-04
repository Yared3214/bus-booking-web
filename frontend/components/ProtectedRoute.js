import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/SignInpage');
    }
  }, [loading, user]);

  if (loading || !user) {
    return <p>Loading...</p>;
  }

  return children;
};

export default ProtectedRoute;
