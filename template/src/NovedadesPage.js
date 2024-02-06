import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider'; // Import your AuthContext
import { useNavigate } from 'react-router-dom';
import './NovedadesPage.css';

function NovedadesPage() {
  const { user, deleteUser } = useContext(AuthContext); // Access the current user's data and the deleteUser function
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleDeleteUser = async () => {
    const deleteSuccessful = await deleteUser(user.user.username); // Delete the current user
    if (deleteSuccessful) {
      navigate('/login'); // Navigate to the login page
    } else {
      setErrorMessage('Deletion failed'); // Display an error message
    }
  };
  console.log(user.user.username);
  return (
    <div>
      {user ? (
        <>
          <p>Estas logueado como {user.user.username}, ({user.user.email})</p>
          <button className="logout-button" onClick={logout}>Logout</button>
          <button className="delete-button" onClick={handleDeleteUser}>Delete User</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NovedadesPage;