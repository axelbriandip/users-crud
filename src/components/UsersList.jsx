import React from 'react';

const UsersList = ({ users, deleteUser, selectUser }) => {
    return (
        <div className='container-list'>
            {
                users.map(user => (
                    <div className='card-user' key={user.id}>
                        <div className="info">
                            <span className='name'><strong>{user.first_name} {user.last_name}</strong></span>
                            <span className='email'>{user.email}</span>
                            <div className='div-calendar'>
                                <i className="fa-solid fa-calendar-days calendar-list"></i><span className='birthday'>{user.birthday}</span>
                            </div>
                        </div>
                        <div className="buttons">
                            <i onClick={() => deleteUser(user.id)} className="fa-solid fa-trash-can icon-delete"></i>
                            <i onClick={() => selectUser(user)} className="fa-solid fa-pen icon-pen"></i>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;