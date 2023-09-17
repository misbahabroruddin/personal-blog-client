import React, { useEffect, useState } from 'react';
import Editor from './Editor';
import { useRouter } from 'next/router';
import { addPost, editPost } from '@/fetch';
import { Button } from '@material-tailwind/react';

export default function FormCreatePost({ data, isEdit, id }) {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const post = new FormData();
      post.append('title', title);
      post.append('thumbnail_url', file);
      post.append('category', category);
      post.append('content', content);

      if (isEdit) {
        await editPost(id, post);
      } else {
        await addPost(post);
      }

      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setFile(data?.thumbnail_url);
      setCategory(data?.category);
      setContent(data?.content);
    }
  }, [data]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        encType='multipart/form-post'
        className='flex flex-col gap-y-4 mt-8'
      >
        <div className='w-full'>
          <label
            htmlFor='title'
            className='text-gray-200 text-lg font-semibold ml-2'
          >
            Title
          </label>
          <input
            type='text'
            id='title'
            className=' w-full px-4 py-2 outline-none rounded'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={data?.title}
          />
        </div>
        <div className='w-full'>
          <label
            htmlFor='thumbnail_url'
            className='text-gray-200 text-lg font-semibold ml-2'
          >
            Thumbnail
          </label>
          {isEdit && (
            <img
              src={data.thumbnail_url}
              alt='Thumbnail'
              className='w-52 mb-6'
            />
          )}
          <div className='rounded bg-white '>
            <input
              type='file'
              id='thumbnail_url'
              className='  w-full px-4 py-2 outline-none rounded'
              placeholder='Insert the thumbnail'
              onChange={(e) => setFile(e.target.files[0])}
              defaultValue={data?.thumbnail_url}
            />
          </div>
        </div>
        <div className='w-full'>
          <label
            htmlFor='thumbnail_url'
            className='text-gray-200 text-lg font-semibold ml-2'
          >
            Category
          </label>
          <select
            name='category'
            id='category'
            onChange={(e) => setCategory(e.target.value)}
            className='w-full mt-2 px-4 py-3 outline-none rounded'
            defaultValue={data?.category}
          >
            <option value='' disabled>
              Select Category
            </option>
            <option value='fashion'>Fashion</option>
            <option value='technology'>Technology</option>
            <option value='lifestyle'>Lifestyle</option>
            <option value='fotography'>Fotography</option>
            <option value='travel'>Travel</option>
            <option value='food'>Food</option>
            <option value='tips-and-trick'>Tips and Trick</option>
          </select>
        </div>
        <div>
          <label>Content</label>
          <Editor handleChange={handleChange} data={data?.content} />
        </div>
        <Button className='mt-4' color='white' type='submit'>
          submit
        </Button>
      </form>
    </>
  );
}
