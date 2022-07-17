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
            swal("¡Good job!", "User modified successfully.", "success");
        } else {
            addUser(newUser);
            reset();
            swal("¡Good job!", "User added successfully.", "success");
        }
    }
    const clean = () => {
        deselectUser();
        reset();
    }
    const today = new Date(); // fecha hoy
    // tratar mes
    let month = "";
    if((today.getMonth + 1) >= 10) {
        month = today.getMonth() + 1;
    } else {
        month = "0" + (today.getMonth() + 1);
    }
    // tratar día
    let day = "";
    if(today.getDate() >= 10) {
        day = today.getDate();
    } else {
        day = "0" + today.getDate();
    }
    // resto de tratamiento para fecha
    const year = today.getFullYear();
    const strToday = `${year}-${month}-${day}`;
    // console.log("today: " + strToday);
    return (
        <div className='container-form'>
            <form onSubmit={submit}>
                <h2>New user</h2>
                <div className="container-input">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className='input-fname' placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <input type="text" className='input-lname' placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="container-input">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" className='input-email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="container-input">
                    <i className="fa-solid fa-key"></i>
                    <input type="password" className='input-password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="container-input">
                    <i className="fa-solid fa-calendar-days"></i>
                    <input type="date" className='input-birthday' max={strToday} value={birthday} onChange={e => setBirthday(e.target.value)}/>
                </div>
                <button>{userSelected !== null ? "Modify" : "Create"}</button>
                {userSelected !== null && <button onClick={clean}>Clean</button>}
            </form>
        </div>
    );
};

export default UsersForm;