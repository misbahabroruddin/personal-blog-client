import { Avatar, Button, Drawer } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { DrawerDefault } from './Drawer';
import { LoginContext } from '@/context/useContex';

export default function Navbar() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const { isLogin, setIsLogin } = useContext(LoginContext);

  // const isLogin = localStorage.getItem('isLogin');

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
  };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     access = localStorage.getItem('token');
  //     setIsLogin(true);
  //   }
  // }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-logo'>
          <div className='square'>
            <span className='text-center mx-auto font-bold text-2xl'>M</span>
          </div>
          <div className='flex gap-x-1'>
            <p className='text-white font-semibold text-lg md:text-xl lg:text-2xl'>
              Misbah
            </p>
            <p className='text-white text-lg md:text-xl lg:text-2xl'>
              Abroruddin
            </p>
          </div>
        </div>
        <DrawerDefault
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
          open={open}
        />
        <div className='nav-menu'>
          <p onClick={() => router.push('/')} className='nav-link'>
            HOME
          </p>
          <p className='nav-link'>ABOUT</p>
          <p onClick={() => router.push('/blogs')} className='nav-link'>
            BLOGS
          </p>
          {isLogin ? (
            <>
              <p className='nav-link' onClick={() => router.push('/blogs/add')}>
                CREATE POST
              </p>
              <Button
                onClick={() => router.push('/login')}
                variant='outlined'
                color='white'
              >
                USERNAME
              </Button>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              {/* <p className='nav-link'>CREATE POST</p> */}
              <Button
                onClick={() => router.push('/login')}
                variant='outlined'
                color='white'
              >
                Login
              </Button>
            </>
          )}
          {/* <p className='nav-link'>CATEGORY</p>
          <p className='nav-link'>CONTACT</p> */}
        </div>
      </nav>
    </>
  );
}
