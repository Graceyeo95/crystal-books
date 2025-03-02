import RegisterForm from '@/components/authentication/RegisterForm';
import library from '@/assets/library.avif';
import { HeroBanner } from '@/components';

const Register = () => {
  return (
    <div className='bg-white'>
      <HeroBanner
        image={{
          src: library,
          alt: 'Library Background',
        }}
        heading='회원가입'
      />
      <RegisterForm />
    </div>
  );
};

export default Register;
