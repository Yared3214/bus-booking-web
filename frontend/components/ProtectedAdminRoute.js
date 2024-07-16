import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const ProtectedAdminRoute = ({ children }) => {
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

  if (user.role !== 'admin') {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <h1 className='text-center text-xl font-medium'>404 - Page Not Found</h1>
        </div>
    )
  }

  return children;
};

export default ProtectedAdminRoute;
