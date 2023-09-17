import { fetchUserLogin } from '@/fetch';

const { createContext, useState, useEffect } = require('react');

const Login = createContext();

const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  let access;

  const getUser = async () => {
    try {
      const res = await fetchUserLogin();
      setUser(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      access = localStorage.getItem('token');
    }

    if (access) {
      setIsLogin(true);
      getUser();
    } else {
      setIsLogin(false);
      setUser(null);
    }
  }, [isLogin]);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin, user }}>
      {children}
    </LoginContext.Provider>
  );
};

export const LoginContext = Login;

export default LoginContextProvider;
