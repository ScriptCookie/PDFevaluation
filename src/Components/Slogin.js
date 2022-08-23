import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Slogin() {
    const [idValue, setIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');
    const navigate = useNavigate();

    function singUp() {
        navigate('/Slogin/singup');
    }

    function idEvent(e) {
        setIdValue(e.target.value);
    }

    function pwEvent(e) {
        setPwValue(e.target.value);
    }

    function loginClick() {
        fetch('http://localhost:8000/api/login')
        .then((res) => res.json())
        .then(loginData => {
            let data = loginData[0];
            for(var i = 0 ; i < data.length ; i++) {
                //console.log(data[i].email);
                if(idValue === data[i].email && pwValue === data[i].password) {
                    navigate('/Smain')
                }
            }
        });
    }

      //console.log(idValue);

    return(
        <div className='Slogin'>
            <h1>학생</h1>
            <input placeholder='이메일' onChange={idEvent}></input>
            <input placeholder='비밀번호' onChange={pwEvent}></input>
            <div id='Login' onClick={loginClick}>로그인</div>
            <div id='singup' onClick={singUp}>회원가입</div>
        </div>
    );
}

export default Slogin;