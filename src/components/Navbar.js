import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { DrawerDefault } from './Drawer';
import { LoginContext } from '@/context/UserContext';
import ToggleUser from './ToggleUser';

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { isLogin, setIsLogin, user } = useContext(LoginContext);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='nav-logo'>
          <div className='square'>
            <span className='text-center mx-auto font-bold text-2xl'>M</span>
          </div>
          <div className='flex gap-x-1'>
            <p className='text-white font-semibold text-lg md:text-xl lg:text-2xl'>
              Mindful
            </p>
            <p className='text-white text-lg md:text-xl lg:text-2xl'>Blog</p>
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
          {isLogin ? (
            <>
              <div
                className='flex items-center gap-x-2 px-2 py-1 lg:px-3 lg:py-1 2xl:px-3 2xl:py-1 border-2 bg-white text-black rounded-full cursor-pointer hover:bg-transparent hover:border-2 hover:border-white hover:text-white'
                onClick={() => router.push('/blogs/add')}
              >
                <p className='font-semibold text-2xl'>+</p>
                <p>POST</p>
              </div>
              <ToggleUser
                onClick={handleLogout}
                user={user?.username}
                img={user?.image_url}
              />
            </>
          ) : (
            <>
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
