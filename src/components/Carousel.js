import { Carousel, Typography, Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';

export function CarouselWithContent({ data }) {
  const router = useRouter();
  return (
    <Carousel>
      <div className='relative h-full w-full'>
        <img
          src={data?.[1].thumbnail_url}
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
              {data?.[1].title}
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 text-xs font-semibold text-gray-500'
            >
              {data?.[1].category.toUpperCase()}
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
      <div className='relative h-full w-full'>
        <img
          src={data?.[1].thumbnail_url}
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
              {data?.[1].title}
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 text-xs font-semibold text-gray-500'
            >
              {data?.[1].category.toUpperCase()}
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
      <div className='relative h-full w-full'>
        <img
          src={data?.[4].thumbnail_url}
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
              {data?.[1].title}
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 text-xs font-semibold text-gray-500'
            >
              {data?.[1].category.toUpperCase()}
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
      <div className='relative h-full w-full'>
        <img
          src={data?.[2].thumbnail_url}
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
              {data?.[1].title}
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 text-xs font-semibold text-gray-500'
            >
              {data?.[1].category.toUpperCase()}
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
  );
}
