import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Slogin() {
    const [idValue, setIdValue] = useState('');
    //const [loginDatas , setLoginDatas] = useState('');
    const navigate = useNavigate();

    function singUp() {
        navigate('/Slogin/singup');
    }

    function idEvent(e) {
        setIdValue(e.target.value);
    }

        fetch('http://localhost:8000/api/login')
        .then((res) => res.json())
        .then(loginData => {
            let data = loginData[0];
            for(var i = 0 ; i < 2 ; i++) {
                console.log(data[i].email);
                if(idValue === data[i].email) {
                    console.log('ok')
                }
            }
        });

      //console.log(idValue);

    return(
        <div className='Slogin'>
            <h1>학생</h1>
            <input placeholder='이메일' onChange={idEvent}></input>
            <input placeholder='비밀번호'></input>
            <div id='Login'>로그인</div>
            <div id='singup' onClick={singUp}>회원가입</div>
        </div>
    );
}

export default Slogin;