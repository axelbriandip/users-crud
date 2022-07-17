import React, { useEffect, useState } from 'react';

const UsersForm = ({ addUser, userSelected, deselectUser, modifyUser }) => {
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
    useEffect(() => {
        if(userSelected !== null) {
            setFirstName(userSelected?.first_name);
            setLastName(userSelected?.last_name);
            setEmail(userSelected?.email);
            setPassword(userSelected?.password);
            setBirthday(userSelected?.birthday);
        } else{
            reset();
        }
    }, [ userSelected ])
    const submit = e => {
        e.preventDefault();
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday
        }
        if(userSelected !== null) {
            newUser.id = userSelected.id;
            modifyUser(newUser);
            clean();
        } else {
            addUser(newUser);
            reset();
        }
    }
    const clean = () => {
        deselectUser();
        reset();
    }
    return (
        <div className='container-form'>
            <form onSubmit={submit}>
                <h2>New user</h2>
                <div className="container-input">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" className='input-fname' placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <input type="text" className='input-lname' placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="container-input">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" className='input-email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="container-input">
                    <i class="fa-solid fa-key"></i>
                    <input type="password" className='input-password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="container-input">
                    <i class="fa-solid fa-calendar-days"></i>
                    <input type="date" className='input-birthday' value={birthday} onChange={e => setBirthday(e.target.value)}/>
                </div>
                <button>{userSelected !== null ? "Modify" : "Create"}</button>
                {userSelected !== null && <button onClick={clean}>Clean</button>}
            </form>
        </div>
    );
};

export default UsersForm;