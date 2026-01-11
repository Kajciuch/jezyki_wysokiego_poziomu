import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers([...data]));
  }, []);

  return (
    <div>
      <p><strong>Lista zarejestrowanych osób pobrana z serwera:</strong></p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
             👤 Imię: {user.name} | Adres e-mail: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;