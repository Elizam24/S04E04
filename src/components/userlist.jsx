
import React from 'react';
import './userList.css';

function UserList({ users, editUser, deleteUser }) {
  return (
    <div className="user-list">
      <h2>Lista de Usuarios</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>{user.name} ({user.email})</span>
              <button onClick={() => editUser(user)}>Editar</button>
              <button onClick={() => deleteUser(user.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
}

export default UserList;