// components/UserForm.js
import React from 'react';
import './userForm.css';

function UserForm({ formData, setFormData, addUser, updateUser, editing }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {editing ? (
        <button onClick={updateUser}>Actualizar Usuario</button>
      ) : (
        <button onClick={addUser}>Agregar Usuario</button>
      )}
    </div>
  );
}

export default UserForm;