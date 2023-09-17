const { instance } = require('@/axios');

export const addPost = async (payload) => {
  try {
    const { data } = await instance.post('/posts', payload);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const editPost = async (id, payload) => {
  try {
    const { data } = await instance.put(`/posts/${id}`, payload);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deletePost = async (id) => {
  try {
    const { data } = await instance.delete(`/posts/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllPost = async () => {
  try {
    const { data } = await instance.get('/posts');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPostById = async (id) => {
  try {
    const { data } = await instance.get(`/posts/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addComment = async (payload) => {
  try {
    const { data } = await instance.post('/comments', payload);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postLogin = async (payload) => {
  try {
    const { data } = await instance.post('/auth/login', payload);
    return data;
  } catch (error) {
    throw new Error(error.message);
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

export const fetchUserLogin = async () => {
  try {
    const { data } = await instance.get('/me');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
