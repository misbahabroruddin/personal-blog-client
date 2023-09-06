import FormCreatePost from '@/components/FormCreatePost';
import { LoginContext } from '@/context/useContex';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

export default function index() {
  const { isLogin } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push('/login');
    }
  }, []);
  return (
    <div className='mt-16'>
      <FormCreatePost />
    </div>
  );
}
