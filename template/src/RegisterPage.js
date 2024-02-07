import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();
  const { login, error } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(username, password, email);
      const loginSuccessful = await login(username, password);
      if (loginSuccessful) {
        navigate('/novedades'); 
      }
    } catch (error) {
      setErrorMessage(error.message); 
    }
  };

  return (
    <div className="register-page">
        <h1>Welcome to Our Website</h1>
        {errorMessage && <p>{errorMessage}</p>}
        <form className="register-form" onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <button className="register-button" type="submit">Register</button>
        </form>
    </div>
  );
}

export default RegisterPage;