const { createContext, useState, useEffect } = require('react');

const Login = createContext();

const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  let access;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      access = localStorage.getItem('token');
    }

    if (access) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const LoginContext = Login;

export default LoginContextProvider;
