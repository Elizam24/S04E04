// App.js
import React, { useState } from 'react';
import './App.css';
import UserForm from './components/userForm';
import UserList from './components/userlist';

function App() {
  const [users, setUsers] = useState([]); // Lista de usuarios
  const [formData, setFormData] = useState({ id: null, name: '', email: '',lastName:'', birthday:'' }); // Datos del formulario
  const [editing, setEditing] = useState(false); // Indica si estamos editando

  // Agregar un nuevo usuario
  const addUser  = () => {
    if (formData.name && formData.lastName) {
      const newUser  = { id: Date.now(), name: formData.name, lastName: formData.lastName, email:formData.email,birthday:formData.birthday };
      setUsers([...users, newUser ]);
      setFormData({ id: null, name: '' }); // Limpiar el formulario
    }
  };

  // Editar un usuario existente
  const editUser  = (user) => {
    setEditing(true);
    setFormData(user);
  };

  // Actualizar un usuario existente
  const updateUser  = () => {
    setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
    setEditing(false);
    setFormData({ id: null, name: '', lastName: '',email:'', birthday:'' }); // Limpiar el formulario
  };

  // Eliminar un usuario
  const deleteUser  = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <h1>CRUD</h1>
      <UserForm
        formData={formData}
        setFormData={setFormData}
        addUser ={addUser }
        updateUser ={updateUser }
        editing={editing}
      />
      <UserList users={users} editUser ={editUser } deleteUser ={deleteUser } />
    </div>
  );
}

export default App;