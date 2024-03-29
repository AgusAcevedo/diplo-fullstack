import React, { useState, useContext } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  
  const login = async (username, password) => {
    try {
      setError(null);
      const response = await axios.post('http://localhost:8000/login', { username, password });
      if (response.data.success) {
        const userResponse = await axios.get('http://localhost:8000/user', { params: { username } });
        setUser(userResponse.data);
        setIsLoggedIn(true);
        return true; 
      } else {
        setError('Login failed');
        return false; 
      }
    } catch (error) {
        console.error('Error details:', error); 
        setError('An error occurred while logging in');
        return false;
      }
  };

const register = async (username, password, email) => {
    try {
      const response = await axios.post('http://localhost:8000/register', { username, password, email });
      setError(null);
    } catch (error) {
      //console.error('Error details:', error);
    }
  };

  const deleteUser = async () => {
    try {
      console.log('User object:', user);
      console.log('Deleting user:', user.username);
      const response = await axios.delete('http://localhost:8000/deleteUser', { data: { username: user.user.username } });
      console.log('Server response:', response.data);
      setError(null);
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      setError(error);
    }
  };

  const logout = () => {
    setError(null);
    setUser(null);
    setIsLoggedIn(false);
  };

const value = { register, user, isLoggedIn, error, login, logout, deleteUser };

return (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
);
}