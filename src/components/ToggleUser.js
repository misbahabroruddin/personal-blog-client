import React from 'react';
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Avatar,
} from '@material-tailwind/react';

export default function ToggleUser({ onClick, user, img }) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <div
        className='flex gap-x-2 items-center px-2 py-1 lg:px-3 lg:py-2 2xl:px-5 2xl:py-3 text-gray-300 hover:text-gray-100 text-lg cursor-pointer'
        onClick={toggleOpen}
      >
        <Avatar size='sm' src={img} />
        <p>{user}</p>
      </div>
      <Collapse
        open={open}
        className='w-[200px] absolute right-[60px] bottom-[-80px]'
      >
        <Card className='my-4 bg-gray-900'>
          <CardBody className='flex justify-center'>
            <Button className='w-full' variant='filled' onClick={onClick}>
              Logout
            </Button>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}
