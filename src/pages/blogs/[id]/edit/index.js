import FormCreatePost from '@/components/FormCreatePost';
import { LoginContext } from '@/context/UserContext';
import { getPostById } from '@/fetch';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

export default function index() {
  const [data, setData] = useState({});
  const { user } = useContext(LoginContext);
  const router = useRouter();
  const id = router.query.id;

  const getPostData = async () => {
    if (id) {
      const res = await getPostById(id);
      setData(res.data);
    }
  };

  useEffect(() => {
    getPostData();
  }, [id]);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);
  return (
    <div className='pt-36 max-w-[1400px] mx-auto overflow-y-hidden'>
      <FormCreatePost data={data} isEdit={true} id={id} />
    </div>
  );
}
