import BlogCard from '@/components/BlogCard';
import { LoginContext } from '@/context/UserContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

export default function PostView({ data }) {
  const { user } = useContext(LoginContext);
  const router = useRouter();
  return (
    <div className='flex flex-col justify-center max-w-[1400px] p-6 mx-auto'>
      <h1 className='text-4xl tracking-wider font-bold text-center pb-12 text-white'>
        All Blogs
      </h1>
      <div className='flex justify-center gap-4 w-full flex-wrap'>
        <BlogCard data={data} user={user} />
      </div>
    </div>
  );
}
