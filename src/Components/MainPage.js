import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

/* global history */
/* global location */
/* global window */

/* eslint no-restricted-globals: ["off"] */

function MainPage() {
    const navigate = useNavigate();
    function getSubject() {
        const ulList = document.getElementById('subList');
        const config = {
            method : "get"
        };
        fetch('http://localhost:8000/api/subject', config)
        .then(res => res.json())
        .then(subjectData => {
            let datas = subjectData[0]
            //const idDatas = datas.map((id) => id._id)
            const list = datas.map((data) => data)

            //console.log('과목 리스트 :' ,list);
            //console.log('과목에 대한 id 값 :', idDatas);

            const dataList = list.map((name) => name.subjects);
            //console.log('map',dataList);

            let text = ""

            for(let i = 0 ; i < dataList.length ; i++) {
                text += "<li>" + dataList[i] + "</li>";
            }
            text += ""
            ulList.innerHTML = text

            for(var i = 0 ; i < dataList.length ; i++) {
                const ulNodes = ulList.childNodes[i]
    
                ulNodes.addEventListener('click', function() {
                    for(var j = 0 ; j < dataList.length ; j++) {
                        if(ulNodes.textContent === dataList[j]) {
                            //console.log('선택한 리스트 :', dataList[j])
                            const selectSub = dataList[j]
                            subMit(selectSub)
                        }
                    }
                })
            }
        })
        .catch(error => console.log("fech error!!"));

    }
    useEffect(() => {
        getSubject();
    }, [])

    function subMit(selectSub) {

        fetch('http://localhost:8000/api/subjects', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify({
                selectSub : selectSub
            })
        })

        // fetch('http://localhost:8000/api/subjectdata', {
        //     method : "POST",
        //     headers : {
        //         "Content-Type" : "application/json",
        //         "Accept" : "application/json"
        //     },
        //     body : JSON.stringify({
        //         selectSubs : selectSub
        //     })
        // })

        //console.log('보낸 데이터', selectSub);

        const con = {
            method : "get"
        }
        fetch('http://localhost:8000/api/subjects', con)
        .then((res) => res.json())
        .then((resUrl) => {
            navigate(`/Subject/${resUrl}`);
            location.replace(`/Subject/${resUrl}`);
            
            console.log('받은 URL', resUrl)

            fetch('http://localhost:8000/api/subjectss', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                },
                body : JSON.stringify({
                    resUrl : resUrl
                })
            })
        })
    }

    function createMove() {
        navigate('/Mmain');
    }

    return(
        <div>
            <h1>페이지</h1>
            <h2>개설된 과목</h2>
            <ul id='subList'></ul>
            <button onClick={createMove}>과목 만들기</button>
        </div>
    );
}

export default MainPage;