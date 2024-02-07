import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthProvider'; // Import your AuthContext
import { useNavigate } from 'react-router-dom';
import './NovedadesPage.css';

function NovedadesPage() {
  const { user, deleteUser } = useContext(AuthContext); // Access the current user's data and the deleteUser function
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [novedades, setNovedades] = useState([]);
  const [newNovedad, setNewNovedad] = useState({
    titulo: '',
    subtitulo: '',
    cuerpo: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [cuerpo, setCuerpo] = useState('');

  console.log('User:', user);

  const fetchNovedades = async () => {
    try {
      const response = await fetch('http://localhost:8000/novedades');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Novedades:', data);
      setNovedades(data);
    } catch (error) {
      console.error('Fetching novedades failed:', error);
      setErrorMessage(error.message);
    }
  };

  const addNovedad = async () => {
    setTitulo('');
    setSubtitulo('');
    setCuerpo('');
    setShowForm(true);
  };
  
  const confirmNovedad = () => {
    fetch('http://localhost:8000/novedades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titulo, subtitulo, cuerpo }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Novedad added:', data.message);
          setNovedades(prevNovedades => [...prevNovedades, { titulo, subtitulo, cuerpo }]);
        } else {
          console.error('Failed to add novedad:', data.message);
        }
        setShowForm(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const deleteNovedad = async (id) => {
    const response = await fetch(`http://localhost:8000/novedades/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchNovedades();
    }
  };
  
  const editNovedad = async (id, updatedNovedad) => {
    const response = await fetch(`http://localhost:8000/novedades/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNovedad),
    });
    if (response.ok) {
      fetchNovedades();
    }
  };

  useEffect(() => {
    fetchNovedades();
  }, []);

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
    <div className="novedades-container">
    {user ? (
      <>
        <p className="novedades-paragraph">Estas logueado como {user.user.username}, ({user.user.email})</p>
        <button className="logout-button" onClick={logout}>Logout</button>
        <button className="delete-button" onClick={handleDeleteUser}>Delete User</button>
        {user && user.user && user.user.isAdmin === 1 && <button className="add-novedad-button" onClick={addNovedad}>Add Novedad</button>}
        {showForm && (
          <div className="novedad-form">
            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Titulo" />
            <input type="text" value={subtitulo} onChange={e => setSubtitulo(e.target.value)} placeholder="Subtitulo" />
            <textarea value={cuerpo} onChange={e => setCuerpo(e.target.value)} placeholder="Cuerpo" />
            <button onClick={confirmNovedad}>Confirm</button>
          </div>
        )}
        {novedades.map(novedad => (
          <div key={novedad.id} className="novedad">
            <h2>{novedad.titulo}</h2>
            <h3>{novedad.subtitulo}</h3>
            <p>{novedad.cuerpo}</p>
            {user && user.user && user.user.isAdmin === 1 && (
              <div>
                <button className="add-novedad-button" onClick={() => editNovedad(novedad.id)}>Edit Novedad</button>
                <button className="add-novedad-button" onClick={() => deleteNovedad(novedad.id)}>Delete Novedad</button>
              </div>
            )}
          </div>
        ))}
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}

export default NovedadesPage;