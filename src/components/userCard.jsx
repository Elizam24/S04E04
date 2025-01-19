// components/UserCard.js
import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const UserCard = ({ user, onDelete, onUpdate }) => {
  return (
    <div className="user-card">
      <h3>{user.name} {user.lastName}</h3>
      <p>Cumpleaños: {user.birthday}</p>
      <p>Correo Electrónico: {user.email}</p>
      <div className="user-actions">
        <button className="user-button edit-button" onClick={() => onUpdate(user)}>
          <FaEdit /> Actualizar
        </button>
        <button className="user-button delete-button" onClick={() => onDelete(user.id)}>
          <FaTrash /> Eliminar
        </button>
      </div>
    </div>
  );
};

export default UserCard;