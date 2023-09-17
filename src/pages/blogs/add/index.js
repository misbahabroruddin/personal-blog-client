import FormCreatePost from '@/components/FormCreatePost';
import { LoginContext } from '@/context/UserContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

export default function index() {
  const { user } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        router.push('/');
      }
    }, 2000);
  }, [user]);
  return (
    <div className='pt-36 max-w-[1400px] mx-auto overflow-y-hidden'>
      <FormCreatePost />
    </div>
  );
}
