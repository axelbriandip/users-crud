import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import './styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }
  const addUser = newUser => {
    axios.post(`https://users-crud1.herokuapp.com/users/`, newUser)
      .then(() => getUsers())
  }
  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }
  return (
    <div className="App">
      <UsersList users={users} deleteUser={deleteUser}/>
      <UsersForm addUser={addUser}/>
    </div>
  )
}

export default App;