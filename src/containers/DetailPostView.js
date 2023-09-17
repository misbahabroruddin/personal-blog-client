import Comment from '@/components/Comment';
import { LoginContext } from '@/context/UserContext';
import { deletePost, getPostById } from '@/fetch';
import { convertDate } from '@/utils';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

export default function DetailPost() {
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

  const handleDelete = async () => {
    try {
      await deletePost(id);
      alert('deleted');
      router.push('/blogs');
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getPostData();
  }, [id]);
  return (
    <div className='mt-32'>
      <div className='flex flex-col mt-8 p-8 max-w-[1400px] justify-center bg-gray-900 mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl tracking-wider font-bold text-gray-200'>
            {data?.title?.toUpperCase()}
          </h1>
          <p className='my-4 text-xs font-semibold text-gray-500'>
            {data?.category?.toUpperCase()}
          </p>
          {user?.username === data?.author?.username && (
            <div className='flex gap-x-5 justify-center'>
              <div
                className='flex items-center gap-x-2 px-2 py-1 lg:px-3 lg:py-1 2xl:px-3 2xl:py-1  bg-red-500 text-white rounded-full cursor-pointer '
                onClick={() => confirm('Are you sure?') && handleDelete()}
              >
                <TrashIcon
                  color='white'
                  strokeWidth={2}
                  className='h-4 w-4 hover:text-white'
                />
                <p>Delete</p>
              </div>
              <div
                className='flex items-center gap-x-2 px-2 py-1 lg:px-3 lg:py-1 2xl:px-3 2xl:py-1  bg-white text-black rounded-full cursor-pointer '
                onClick={() => router.push(`/blogs/${data?.id}/edit`)}
              >
                <PencilSquareIcon
                  color='black'
                  strokeWidth={2}
                  className='h-4 w-4 hover:bg-white'
                />
                <p>Edit</p>
              </div>
            </div>
          )}
        </div>
        <div className='my-8'>
          <img src={data?.thumbnail_url} className='w-full rounded-xl' />
        </div>
        <div className='flex justify-center gap-x-4 py-8'>
          <p className='text-gray-400 text-sm'>
            {convertDate(data?.createdAt)}
          </p>
          <span className='mx-2 text-gray-500'>|</span>
          <p className='text-gray-200 text-sm'>
            {user?.username === data?.author?.username
              ? 'You'
              : data?.author?.first_name.toUpperCase() +
                ' ' +
                data?.author?.last_name.toUpperCase()}
          </p>
        </div>
        <div
          className='text-white mb-10 p-8'
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
        <div className='flex flex-col mt-4 py-4 px-8 bg-gray-800 rounded-xl'>
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
