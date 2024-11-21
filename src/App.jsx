// src/App.js
import React, { useState } from 'react';
import useApi from './hook/useApi';
import UseCard from './components/UseCard';
import UseForm  from'./components/UseForm';
const App = () => {
  const { data, createUser , updateUser , deleteUser  } = useApi();
  const [editingUser ,setEditingUser ] = useState(null);

  const users = data.data

  const handleCreateOrUpdate = (user) => {
    if (editingUser ) {
      updateUser (editingUser .id, user);
      setEditingUser (null);
    } else {
      createUser (user);
    }
  };

  return (
    <div className="App">
      <h2>Usuario</h2>
      <UseForm onSubmit={handleCreateOrUpdate} user={editingUser } />
      <div className="user-list">
        {users && (<>
          {users.map(user => (
            <UseCard 
              key={user.id} 
              user={user} 
              onDelete={deleteUser } 
              onEdit={setEditingUser } 
            />
          ))}
        </>)}
      </div>
    </div>
  );
};

export default App;
