import React from 'react';
import {useState} from 'react';

function Singup() {
    const [idValue , setIdValue] = useState('');
    const [pwValue , setPwValue] = useState('');
    const [nameValue , setNameValue] = useState('');

    function idEvent(e) {
        setIdValue(e.target.value);
    }

    function pwEvent(e) {
        setPwValue(e.target.value);
    }

    function nameEvent(e) {
        setNameValue(e.target.value);
    }

    function onPost() {
        fetch('http://localhost:8000/api/login', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify({
                email : idValue,
                password : pwValue,
                name : nameValue
            })
        })
    }

    //console.log(idValue);

    return(
        <div className='Singup'>
            <h1>가입</h1>
            <input placeholder='이메일' onChange={idEvent}></input>
            <input placeholder='비밀번호' type='password' onChange={pwEvent}></input>
            <input placeholder='이름' onChange={nameEvent}></input>
            <div onClick={onPost}>가입하기</div>
        </div>
    );
}

export default Singup;