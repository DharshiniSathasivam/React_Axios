import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const[name,setName]=useState({})
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Company</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, username, email, company ,address,phone}, key) => (
              <tr key={key}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{company.name}</td> 
                <td>{address.city}</td>
                <td>{phone}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
