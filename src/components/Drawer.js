import React from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react';

export function DrawerDefault({ openDrawer, closeDrawer, open }) {
  return (
    <React.Fragment>
      <Button onClick={openDrawer} className='block lg:hidden text-white'>
        <svg viewBox='0 0 100 80' width='20' height='20'>
          <rect width='100' height='20'></rect>
          <rect y='30' width='100' height='20'></rect>
          <rect y='60' width='100' height='20'></rect>
        </svg>
      </Button>
      <Drawer
        open={open}
        onClose={closeDrawer}
        placement='right'
        className='p-4 bg-black'
      >
        <div className='mb-6 flex items-center justify-end '>
          <IconButton
            variant='text'
            color='blue-gray'
            onClick={closeDrawer}
            className='text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </IconButton>
        </div>
        <Typography color='gray' className='mb-8 pr-4 font-normal'>
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className='items-center gap-x-1 md:gap-x-2 lg:gap-x-6 lg:flex'>
          <p
            onClick={() => router.push('/')}
            className='px-3 py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-3 text-gray-300 hover:text-gray-100 text-lg cursor-pointer'
          >
            HOME
          </p>
          <p
            onClick={() => router.push('/blogs')}
            className='px-3 py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-3 text-gray-300 hover:text-gray-100 text-lg cursor-pointer'
          >
            BLOG
          </p>
          <p className='px-3 py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-3 text-gray-300 hover:text-gray-100 text-lg cursor-pointer'>
            ABOUT
          </p>
          <p className='px-3 py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-3 text-gray-300 hover:text-gray-100 text-lg cursor-pointer'>
            CONTACT
          </p>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
