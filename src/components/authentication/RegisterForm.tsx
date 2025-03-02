import Input from '@/components/Input';
import { useState } from 'react';
import { registerUser } from '@/lib/firebase/authentication/emailAuth';
import Button from '@/components/Button';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser(name, email, password, imageURL, setIsLoading, navigate);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='flex flex-col gap-4 py-32 w-[300px] md:w-[500px] mx-auto'
    >
      <Input label='First Name' name='text' value={name} onChange={setName} />
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
      <Input
        label='Profile Image URL'
        name='text'
        value={imageURL}
        onChange={setImageURL}
      />

      <Link
        to={'/login'}
        className='flex justify-end text-sm leading-6 font-semibold text-orange hover:text-orange/80'
      >
        Already have an account? Login
      </Link>

      <Button type='submit' variant='solid' size='large' className='mt-8'>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
