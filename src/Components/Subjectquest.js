import React, {useState} from 'react';

function Subjectquest() {
    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [place, setPlace] = useState('');

    function subName(e) {
        setName(e.target.value);
    }

    function subDay(e) {
        setDay(e.target.value);
    }

    function subPlace(e) {
        setPlace(e.target.value);
    }
    
    function insertData() {
        fetch('http://localhost:8000/subjectproject', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify({
                name : name,
                day : day,
                place : place
            })
        })
        alert('과제가 만들어졌습니다.')
        alert('목록창으로 이동합니다.')
        }

    return(
        <div>
            <input placeholder='과제 이름' onChange={subName}></input>
            <input placeholder='날짜' onChange={subDay}></input>
            <input placeholder='내용' onChange={subPlace}></input>
            <button onClick={insertData}>만들기</button>
        </div>
    );
}

export default Subjectquest;