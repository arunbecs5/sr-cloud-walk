// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data.users);
        };
        fetchUsers();
    }, []);

    const addUser = async () => {
        const response = await axios.post('http://localhost:5000/users', { name });
        setUsers([...users, response.data]);
        setName('');
    };

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Add a new user" 
            />
            <button onClick={addUser}>Add User</button>
        </div>
    );
};

export default App;
