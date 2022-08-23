import React, { useEffect } from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Studentsubject() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const config = {
        method : "get"
    };

    useEffect(() => {

        const ulList = document.getElementById('register');
        fetch('http://localhost:8000/api/compareData', config)
        .then(res => res.json())
        .then(resData => {
            console.log('등록된 학생', resData)
            setName(resData[0]);

            let text = ""

            for(let i = 1 ; i < resData.length ; i++) {
                text += "<li>" + resData[i] + "</li>";
            }
            text += ""
            ulList.innerHTML = text

            for(var i = 0 ; i < resData.length ; i++) {
                const ulNodes = ulList.childNodes[i]

                ulNodes.addEventListener('click', function() {
                    alert('dd');
                })
            }
        })
    }, [])

    return(
        <div>
            <li>{name}</li>
            <h1>등록한 과목 이름</h1>
            <ul id='register'>

            </ul>
        </div>
    );
}

export default Studentsubject;