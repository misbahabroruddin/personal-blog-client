import { addComment } from '@/fetch';
import React, { useState } from 'react';

export default function Comment({ getData, post_id }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { name, comment, post_id: post_id };
      await addComment(data);
      await getData();
      setName('');
      setEmail('');
      setComment('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3 className='my-4 text-gray-200 text-2xl font-semibold'>
        LEAVE A REPLY
      </h3>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
        <div className='flex gap-x-5 w-full'>
          <input
            type='text'
            id='name'
            className='  w-full px-4 py-2 outline-none '
            placeholder='Inset name'
            autoComplete='off'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type='text'
            id='email'
            className='  w-full px-4 py-2 outline-none '
            placeholder='Inset email'
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <textarea
          type='text'
          id='name'
          className='w-full h-24 px-4 py-2 outline-none '
          placeholder='Inset comment'
          autoComplete='off'
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button
          type='submit'
          className='w-[20%] bg-gray-900 text-gray-300 py-3 tracking-wider hover:bg-transparent hover:outline hover:outline-gray-200 '
        >
          SUBMIT COMMENT
        </button>
      </form>
    </div>
  );
}
