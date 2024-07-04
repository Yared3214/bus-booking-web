import ProtectedRoute from '../components/ProtectedRoute';

const ProtectedPage = () => {
  return (
    <ProtectedRoute>
      <h1>Protected Page</h1>
      <p>This is a protected page that only logged-in users can access.</p>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
