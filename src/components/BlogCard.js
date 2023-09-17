import { convertDate } from '@/utils';
import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import React from 'react';

function BlogCard({ data, user }) {
  const router = useRouter();
  return (
    <>
      {data.data.map((item) => (
        <div
          key={item.id}
          className='flex flex-col justify-center basis-[25rem] bg-gray-600 rounded-lg overflow-hidden'
        >
          <div className='w-full h-[20rem]'>
            <img
              src={item.thumbnail_url}
              alt={item.title}
              className='h-full w-full aspect-[4/6] object-cover mx-auto'
            />
          </div>
          <div className='flex flex-col justify-center w-full pb-6 px-5'>
            <div className='flex flex-col justify-center text-center'>
              <Typography
                variant='lead'
                color='white'
                className='my-3 text-xs font-semibold text-gray-500'
              >
                {item.category.toUpperCase()}
              </Typography>
              <Typography
                variant='h1'
                color='white'
                className='mb-4 text-xl sm:text-lg md:text-xl lg:text-2xl truncate'
              >
                {item.title}
              </Typography>
            </div>
            <div className='flex flex-col justify-center items-center gap-x-2 mb-5 lg:flex-row lg:items-center'>
              <p className='text-[11px] lg:text-xs'>
                {convertDate(item.createdAt)}
              </p>
              <span>-</span>
              <p className='text-[11px] lg:text-xs'>
                {user?.username === item.author.username
                  ? 'You'
                  : '@' + item.author.username}
              </p>
            </div>
            <Button
              size='lg'
              color='white'
              className='w-1/2: mx-auto font-bold text-md'
              onClick={() => router.push(`/blogs/${item.id}`)}
            >
              Read More
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogCard;
