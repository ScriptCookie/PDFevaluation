import React from 'react';
import {useNavigate} from 'react-router-dom';

function SubProject() {
    const navigate = useNavigate();

    function getSubjectUrl() {    
        const config = {
            method : "get"
        };
        fetch('http://localhost:8000/api/subjectss', config)
        .then(res => res.json())
        .then(resData => {
            navigate(`/Subject/${resData}/invitation`);
        })
        .catch(error => console.log("fech error!!"));
    
      }
        // 이제 학생이 로그인하고 > 자기 과목 리스트 보이는 페이지 만들고 > 그룹화하는 과정.
    return(
        <div>
            <li>초대 인원</li>
            <p></p>
            <button onClick={getSubjectUrl}>구성원 초대하기</button>
        </div>
    );
}

export default SubProject;