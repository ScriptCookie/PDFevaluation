import React, { useEffect, useState } from 'react';

function Subject() {
    const [subData , setSubData] = useState([]);
    const [dataExplain , setDataExplain] = useState();

    function getSubjectData() {
        const config = {
            method : "get"
        };
        fetch('http://localhost:8000/api/subjects', config)
        .then(res => res.json())
        .then(resData => {
            const name = resData.subjects
            const explain = resData.explains
            setSubData(name);
            setDataExplain(explain);
        })
        .catch(error => console.log("fech error!!"));
    }
    useEffect(() => {
        getSubjectData();
    }, [])

    //console.log(subData);
    //console.log(dataExplain);

    return(
        <div>
            <h1>과목 이름</h1>
            <li>{subData}</li>
            <h2>과목 설명</h2>
            <li>{dataExplain}</li>
            <button>구성원 초대하기</button>
        </div>
    );
}

export default Subject;