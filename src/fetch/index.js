const { instance } = require('@/axios');

export const addPost = async (payload) => {
  try {
    const { data } = await instance.post('/posts', payload);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllPost = async () => {
  try {
    const { data } = await instance.get('/posts');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostById = async (id) => {
  try {
    const { data } = await instance.get(`/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addComment = async (payload) => {
  try {
    const { data } = await instance.post('/comments', payload);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const postLogin = async (payload) => {
  try {
    const { data } = await instance.post('/auth/login', payload);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (payload) => {
  try {
    const { data } = await instance.post('/auth/register', payload);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
