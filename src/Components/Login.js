import React from 'react';
import '../CSS/Login.css';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function onSMove() {
        navigate('/Slogin');    
    }

    function onMMove() {
        navigate('/MLogin');    
    }

    return(
        <div className='Login'>
            <h1>Login Page</h1>
            <div id='selectBox' onClick={onSMove}>학생 로그인</div>
            <div id='selectBox' onClick={onMMove}>관리자 로그인</div>
        </div>
    );
}

export default Login;