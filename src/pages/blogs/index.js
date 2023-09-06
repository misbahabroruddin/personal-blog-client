import { convertDate } from '@/utils';
import { Button, Carousel, Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';

export default function index({ data }) {
  return (
    <>
      <Carousel className='rounded-xl'>
        <div className='relative h-full w-full'>
          <img
            src={data[1].thumbnail_url}
            alt='image 1'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/75'>
            <div className='w-3/4 text-center md:w-2/4'>
              <Typography
                variant='h1'
                color='white'
                className='mb-4 text-3xl md:text-4xl lg:text-5xl'
              >
                {data[1].title}
              </Typography>
              <Typography
                variant='lead'
                color='white'
                className='mb-12 text-xs font-semibold text-gray-500'
              >
                {data[1].category.toUpperCase()}
              </Typography>
              <div className='flex justify-center gap-2'>
                <Button
                  size='lg'
                  color='white'
                  onClick={() => router.push(`/blogs/${data[1].id}`)}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <section className='p-8'>
        <div className='flex flex-col justify-center max-w-[1400px] p-6 mx-auto grow'>
          <div className='flex justify-center gap-4 w-full flex-wrap '>
            {data.map((item) => (
              <div
                key={item.id}
                className='flex flex-col justify-center w-[30%] p-5 bg-gray-500 rounded-lg'
              >
                <div className='w-full h-[20rem] p-4'>
                  <img
                    src={item.thumbnail_url}
                    alt={item.title}
                    className='h-full w-full aspect-[4/6] object-cover mx-auto rounded-xl'
                  />
                </div>
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
                    className='mb-4 text-2xl sm:text-lg md:text-xl lg:text-2xl'
                  >
                    {item.title}
                  </Typography>
                </div>
                <div className='flex justify-center items-center gap-x-2 mb-5'>
                  <p className='text-xs'>{convertDate(item.createdAt)}</p>
                  <span>|</span>
                  <p className='text-xs'>@{item.author.username}</p>
                </div>
                <Button
                  size='lg'
                  color='white'
                  className='w-1/2 mx-auto'
                  onClick={() => router.push(`/blogs/${item.id}`)}
                >
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch('http://localhost:5000/api/v1/posts');

  const { data } = await res.json();

  return {
    props: { data },
  };
}
