import { register } from '@/fetch';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Register() {
  const [first_name, setFirtName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const data = await register({
        first_name,
        last_name,
        username,
        email,
        password,
      });
      console.log(data);
      setFirtName('');
      setLastName('');
      setUsername('');
      setEmail('');
      setPassword('');
      alert('Register Success');
      router.push('/login');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Card
      color='gray'
      shadow={false}
      className='flex justify-center items-center pt-6 h-screen'
    >
      <Typography variant='h4' color='white'>
        Sign Up
      </Typography>
      <Typography className='mt-1 font-normal text-gray-500'>
        Enter your details to register.
      </Typography>
      <form
        onSubmit={handleRegister}
        className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
      >
        <div className='mb-4 flex flex-col gap-6'>
          <Input
            color='white'
            size='lg'
            label='First Name'
            onChange={(e) => setFirtName(e.target.value)}
          />
          <Input
            color='white'
            size='lg'
            label='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            color='white'
            size='lg'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            color='white'
            size='lg'
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            color='white'
            type='password'
            size='lg'
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          color='white'
          label={
            <Typography
              variant='small'
              color='gray'
              className='flex items-center font-normal'
            >
              I agree the
              <a
                href='#'
                className='font-medium transition-colors hover:text-gray-900'
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        />
        <Button type='submit' color='white' className='mt-6' fullWidth>
          Register
        </Button>
        <Typography color='gray' className='mt-4 text-center font-normal'>
          Already have an account?{' '}
          <a href='/login' className='font-medium text-gray-400'>
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
