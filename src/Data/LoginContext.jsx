
import { createContext, useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   //const navigate = useNavigate();
    // const navigate = useNavigate();
  const login = (username, password) => {
    if (username === 'admin@123' && password === '1234') {
      setIsAuthenticated(true);
      return true
    } else {

     return false
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    // navigate('/login');
  };

  return (
    <LoginContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
