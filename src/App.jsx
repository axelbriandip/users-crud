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
      .catch(err => console.log(err.response))
  }, [])
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err.response))
  }
  const addUser = newUser => {
    axios.post(`https://users-crud1.herokuapp.com/users/`, newUser)
      .then(() => getUsers())
      .catch(err => console.log(err.response))
  }
  const deleteUser = id => {
    swal({
      title: "¿Are you sure?",
      text: "Once deleted, you will not be able to recover this user.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
          .then(() => {
            getUsers();
            deselectUser();
          })
          .catch(err => console.log(err.response))
        swal("The user was successfully deleted.", {
          icon: "success",
        });
      } else {
        swal("The user was not deleted.");
      }
    });
  }
  const selectUser = user => {
    setUserSelected(user);
  }
  const deselectUser = () => {
    setUserSelected(null);
  }
  const modifyUser = user => {
    axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
      .then(() => getUsers())
      .catch(err => console.log(err.response))
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