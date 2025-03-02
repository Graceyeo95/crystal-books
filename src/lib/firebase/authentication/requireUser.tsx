import { useAuth } from '@/lib/context/AuthProvider';
import { Navigate } from 'react-router-dom';

export type RequireUserProps = {
  children: React.ReactNode;
};

const RequireUser = ({ children }: RequireUserProps) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user || user === null) return <Navigate to='/login' />;

  return children;
};

export default RequireUser;
