import React from 'react';
import {useState} from 'react';
function Mmain() {

    const [subject , setSubject] = useState('');

    function subjectEvent(e) {
        setSubject(e.target.value);
    }

    function subJect() {
        fetch('http://localhost:8000/api/subject', {
            method : "POST",
            headers : {
               "Content-Type" : "application/json",
               "Accept" : "application/json"
            },
            body : JSON.stringify({
                subject : subject,
                explain : null,

            })
        })
        console.log('ok');
    }

    return(
        <div>
            <h1>Manager Main</h1>
            <input placeholder='과목이름' onChange={subjectEvent}></input>
            <input placeholder='설명글'></input>
            <button onClick={subJect}>과목 개설</button>
        </div>
    );
}

export default Mmain;