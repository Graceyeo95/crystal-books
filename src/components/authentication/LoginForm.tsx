import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { loginUserWithEmailAndPassword } from '@/lib/firebase/authentication/emailAuth';
import { useState } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUserWithEmailAndPassword(email, password, navigate);
  };
  return (
    <form
      className='flex flex-col gap-4 py-32 w-[300px] md:w-[500px] mx-auto'
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        label='Email address'
        name='email'
        value={email}
        onChange={setEmail}
      />
      <Input
        label='Password'
        name='password'
        value={password}
        onChange={setPassword}
      />
      <Button type='submit' variant='solid' size='large' className='mt-8'>
        Login
      </Button>

      <Link
        to={'/register'}
        className='flex justify-center text-base leading-6 font-semibold text-orange hover:text-orange/80 mt-4'
      >
        No account? Register
      </Link>
    </form>
  );
};

export default LoginForm;
