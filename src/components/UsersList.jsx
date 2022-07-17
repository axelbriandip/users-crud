import React from 'react';

const UsersList = ({ users, deleteUser, selectUser }) => {
    return (
        <div className='container-list'>
            <h1>test list</h1>
            {
                users.map(user => (
                    <div className='card-user' key={user.id}>
                        <div className="info">
                            <span>{user.first_name} {user.last_name}</span>
                            <span>{user.email}</span>
                            <span>{user.birthday}</span>
                        </div>
                        <div className="buttons">
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                            <button onClick={() => selectUser(user)}>Modify</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;