// components/UserList.js
import React from 'react';
import './userList.css';
import UserCard from './userCard'; // Asegúrate de importar el nuevo componente

function UserList({ users, editUser , deleteUser  }) {
  return (
    <div className="user-list">
      <h2 className="user-list-title">Lista de Usuarios</h2>
      {users.length > 0 ? (
        <div className="user-list-items">
          {users.map((user) => (
            <UserCard 
              key={user.id} 
              user={user} 
              onDelete={deleteUser } 
              onUpdate={editUser } 
            />
          ))}
        </div>
      ) : (
        <p className="no-users-message">No hay usuarios disponibles.</p>
      )}
    </div>
  );
}

export default UserList;