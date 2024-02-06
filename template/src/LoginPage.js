// LoginPage.js
import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './LoginPage.css'; 

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginSuccessful = await login(username, password); // Wait for the login function to complete
        if (loginSuccessful) {
          navigate('/novedades'); // Only navigate to '/novedades' if the login was successful
        }
      };

  return (
    <div className="login-page">
            <h1>Por favor inicie sesion primero</h1>
            {error && <p>{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="login-button" type="submit">Log in</button>
                <div className="register-section">
                    <Link className="register-link" to="/register">No tienes una cuenta? clickea aqui.</Link>
                </div>
            </form>
        </div>
  );
}

export default LoginPage;