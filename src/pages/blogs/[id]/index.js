import Comment from '@/components/Comment';
import { getPostById } from '@/fetch';
import { convertDate } from '@/utils';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function index() {
  const [data, setData] = useState({});
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
  // console.log(data);
  // console.log(route.query);
  return (
    <div className='mt-24'>
      <button onClick={() => router.push('/blogs/add')}>ADD POST</button>
      <div className='flex flex-col mt-8 p-8 max-w-[1400px] justify-center bg-gray-900 mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl tracking-wider font-bold text-gray-200'>
            {data?.title?.toUpperCase()}
          </h1>
          <p className='my-4 text-xs font-semibold text-gray-500'>
            {data?.category?.toUpperCase()}
          </p>
        </div>
        <div className='my-8'>
          <img src={data?.thumbnail_url} className='w-full rounded-xl' />
        </div>
        <div className='flex justify-center gap-x-4 my-6'>
          <p className='text-gray-400 text-sm'>
            {convertDate(data?.createdAt)}
          </p>
          <span className='mx-2 text-gray-500'>|</span>
          <p className='text-gray-200 text-sm'>
            {data?.author?.first_name?.toUpperCase()}{' '}
            {data?.author?.last_name?.toUpperCase()}
          </p>
        </div>
        <div
          className='text-white mb-10'
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
        <div className='flex flex-col mt-4 py-4 px-8 bg-gray-800'>
          <p className='my-4 text-gray-200 text-2xl font-semibold'>
            {data?.comments?.length} COMMENTS
          </p>
          <div className='flex flex-col gap-y-8 my-5'>
            {data?.comments?.map((comment, index) => (
              <div
                className='flex flex-col gap-y-2 border-b-2 py-4'
                key={index}
              >
                <div className='flex items-center justify-between gap-x-2'>
                  <div className='flex items-center gap-x-2'>
                    <img
                      src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
                      alt='profile'
                      className='rounded-full w-8 h-8'
                    />
                    <p className='text-gray-300 tracking-wider'>
                      {comment.name}
                    </p>
                  </div>
                  <p className='text-gray-200 text-xs tracking-wide'>
                    {convertDate(comment.time)}
                  </p>
                </div>
                <p className='ml-10 mt-2 text-gray-200 text-xl tracking-wider'>
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
          <Comment getData={getPostData} post_id={id} />
        </div>
      </div>
    </div>
  );
}
