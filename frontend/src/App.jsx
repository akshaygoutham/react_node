import React, { useEffect, useState } from 'react';
import api from './api';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get('/users').then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
