import React, { useEffect } from 'react';
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
      
      function moveSubject() {
        navigate('/Subjectquest')
      }

      function getprojectList() {
        const projectList = document.getElementById('projectList');
        const configs = {
            method : "get"
        }
        fetch('http://localhost:8000/subjectproject', configs)
        .then(res => res.json())
        .then(resDatas => {
            for(var i = 0 ; i < resDatas.length ; i++) {
                console.log(resDatas[i].name)

                let text = ""
                for(let i = 0 ; i < resDatas.length ; i++) {
                    text += "<li>" + resDatas[i].name + "</li>";
                }
                text += ""
                projectList.innerHTML = text
            }

            for(let i = 0 ; i < resDatas.length ; i++) {
                const ulNodes = projectList.childNodes[i]

                ulNodes.addEventListener('click', function() {
                    alert('dd');
                })
            }
        })
      }

      useEffect(() => {
        getprojectList();
      }, [])

    return(
        <div>
            <button onClick={moveSubject}>과제 만들기</button>
            <h3>과제 목록</h3>
            <ul id='projectList'>
            
            </ul>
            <p></p>
            <li>초대 인원</li>
            <p></p>
            <button onClick={getSubjectUrl}>구성원 초대하기</button>
        </div>
    );
}

export default SubProject;