// components/UserForm.js
import React from 'react';
import './userForm.css';

function UserForm({ formData, setFormData, addUser , updateUser , editing }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (editing) {
      updateUser (); // Si estamos editando, actualiza el usuario
    } else {
      addUser (); // Si no, agrega un nuevo usuario
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{editing ? 'Editar Usuario' : 'Agregar Usuario'}</h2>
      
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="date"
          name="birthday"
          placeholder="Cumpleaños"
          value={formData.birthday}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <button className="form-button" onClick={handleSubmit}>
        {editing ? 'Actualizar Usuario' : 'Agregar Usuario'}
      </button>
    </div>
  );
}

export default UserForm;