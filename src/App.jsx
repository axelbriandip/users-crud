import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import './styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])
  console.log(users);
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }
  const addUser = newUser => {
    // console.log(newUser)
    axios.post(`https://users-crud1.herokuapp.com/users/`, newUser)
      .then(() => getUsers())
      .catch(err => console.log(err.response))
  }
  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }
  const selectUser = user => {
    setUserSelected(user);
  }
  const deselectUser = () => {
    setUserSelected(null);
  }
  const modifyUser = user => {
    axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
      .then(() => getUsers());
  }
  return (
    <div className="App">
      <UsersList
      users={users}
      deleteUser={deleteUser}
      selectUser={selectUser}
      />
      <UsersForm
      addUser={addUser}
      userSelected={userSelected}
      deselectUser={deselectUser}
      modifyUser={modifyUser}
      />
    </div>
  )
}

export default App;