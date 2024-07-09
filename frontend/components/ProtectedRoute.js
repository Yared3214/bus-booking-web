import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/SignInPage');
    }
  }, [loading, user]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader size={50} color="#A18249" />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
