import React, { useEffect, useState } from 'react';

const UsersForm = ({ addUser }) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ birthday, setBirthday ] = useState('');
    const reset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setBirthday('');
    }
    const submit = e => {
        e.preventDefault();
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday
        }
        addUser(newUser);
        reset();
    }
    return (
        <div className='container-form'>
            <form onSubmit={submit}>
                <h2>New user</h2>
                <div className="container-input">
                    <span>icono</span>
                    <input type="text" placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <input type="text" placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="container-input">
                    <span>icono</span>
                    <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="container-input">
                    <span>icono</span>
                    <input type="text" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="container-input">
                    <span>icono</span>
                    <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)}/>
                </div>
                <button>Create</button>
            </form>
        </div>
    );
};

export default UsersForm;