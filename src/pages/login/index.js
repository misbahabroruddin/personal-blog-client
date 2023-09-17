import { LoginContext } from '@/context/UserContext';
import { postLogin } from '@/fetch';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const router = useRouter();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const data = await postLogin({ username, password });
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
      }
      router.push('/');
      setUsername('');
      setPassword('');
      setIsLogin(true);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (isLogin) {
      router.push('/');
    }
  }, [isLogin]);

  return (
    <Card
      color='gray'
      shadow={false}
      className='flex justify-center items-center pt-6 h-screen'
    >
      <Typography variant='h4' color='white'>
        Sign In
      </Typography>
      <Typography className='mt-1 font-normal text-gray-500'>
        Enter your details to login.
      </Typography>
      <form
        className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
        onSubmit={handleLogin}
      >
        <div className='mb-4 flex flex-col gap-6'>
          <Input
            color='white'
            size='lg'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
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
          label={
            <Typography
              variant='small'
              color='gray'
              className='flex items-center font-normal'
            >
              Remember Me
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        />
        <Button type='submit' color='white' className='mt-6' fullWidth>
          Login
        </Button>
        <Typography color='gray' className='mt-4 text-center font-normal'>
          Don't have an account?{' '}
          <a href='/register' className='font-medium text-gray-400'>
            Sign Up
          </a>
        </Typography>
      </form>
    </Card>
  );
}
