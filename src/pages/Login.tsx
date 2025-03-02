import LoginForm from '@/components/authentication/LoginForm';
import library from '@/assets/library.avif';
import { HeroBanner } from '@/components';
import withTransition from '@/HOC/withTransition';

const Login = () => {
  return (
    <div className='bg-white'>
      <HeroBanner
        image={{
          src: library,
          alt: 'Library Background',
        }}
        heading='로그인'
      />
      <LoginForm />
    </div>
  );
};

export default withTransition(Login);
