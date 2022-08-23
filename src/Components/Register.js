import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    
    function idEvent(e) {
        setId(e.target.value);
    }

    function nameEvent(e) {
        setName(e.target.value);
    }

    function compareData() {

        // const config = {
        //     method : "get"
        // };
        // fetch('http://localhost:8000/api/login', config)
        // .then(res => res.json())
        // .then(loginData => {
        //     for(var i = 0 ; i < loginData[0].length ; i++) {
        //         if(id === loginData[0][i].email) {
        //             //console.log(loginData[0][i].email)
        //             navigate('/Subject/Studentsubject');
        //             alert('등록 되었습니다.')
        //         }
        //     }
        // })

        fetch('http://localhost:8000/api/comparelogin', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify({
                id : id,
                name : name
            })
        })
            alert('등록 되었습니다.')
            navigate('/Subject/Studentsubject');
    }
    // 등록 버튼을 누르면 학생 이름 아이디를 비교해 가져오고
    // 해당 페이지의 과목 _id정보를 가져와서 등록후 학생 페이지에 과목 리스트를 만들고
    // URL도 학생 페이지에 맞도록 자동으로 바꾸어주어야 한다.
    return(
        <div>
            <h1>등록 페이지</h1>
            <input placeholder='아이디' onChange={idEvent}></input>
            <input placeholder='이름' onChange={nameEvent}></input>
            <button onClick={compareData}>등록</button>
        </div>
    );
}

export default Register;