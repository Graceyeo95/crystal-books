import { useAuth } from '@/lib/context/AuthProvider';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

type SignInProps = {
  isAtTop?: boolean;
};

const SignIn = ({ isAtTop }: SignInProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ml-4'>
      {user ? (
        <Link
          to='/account'
          className='size-12 rounded-full overflow-hidden flex flex-shrink-0'
        >
          <img
            src={user?.photoURL || ''}
            alt='profile image'
            className='w-full h-full object-cover'
          />
        </Link>
      ) : (
        <Link to='/login'>
          <CgProfile
            className={`${isAtTop ? 'text-white' : 'text-orange'} size-10`}
          />
        </Link>
      )}
    </div>
  );
};

export default SignIn;
