import {Routes , Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Viewer from './Components/Viewer.';
import Login from './Components/Login';
import Slogin from './Components/Slogin';
import MLogin from './Components/MLogin';
import Singup from './Components/Singup';
import Smain from './Components/Smain';
import Mmain from './Components/Mmain';
import MainPage from './Components/MainPage';
import Subject from './Components/Subject';
import SubProject from './Components/Subproject';
import Invitation from './Components/Invitation';
import Register from './Components/Register';
import Studentsubject from './Components/Studentsubject';
import Subjectquest from './Components/Subjectquest';

/* global history */
/* global location */
/* global window */

/* eslint no-restricted-globals: ["off"] */

function App() {
  const [dataUrl, setDataUrl] = useState();
  const [subdata, setSubData] = useState();

  function getSubjectUrl() {
    const config = {
        method : "get"
    };
    fetch('http://localhost:8000/api/subjectss', config)
    .then(res => res.json())
    .then(resData => {
      console.log('넣어줄 URL', resData);
      setDataUrl(resData);
    })
    .catch(error => console.log("fech error!!"));

  }

  // function getSubjectData() {
  //   const config = {
  //     method : "get"
  //   };
  //   fetch('http://localhost:8000/api/subjectdata', config)
  //   .then(res => res.json())
  //   .then(subData => {
  //     console.log('가져온 데이터 정보', subData.explains);
  //     setSubData(subData.explains);
  //   })
  //   .catch(error => console.log("fech error!!"));
  // }

    useEffect(() => {
      getSubjectUrl();
      //getSubjectData();

      if (self.name !== 'reload') {
        self.name = 'reload';
        self.location.reload(true);
    }
    else self.name = ''; 
    }, [])

  return(
    <div className='App'>
      <h1>평가 사이트</h1>
      <Routes>
        <Route path='/Viewer' element={<Viewer />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Slogin' element={<Slogin />}></Route>
        <Route path='/Slogin/Singup' element={<Singup />}></Route>
        <Route path='/MLogin' element={<MLogin />}></Route>
        <Route path='/Smain' element={<Smain />}></Route>
        <Route path='/Mmain' element={<Mmain />}></Route>
        <Route path='/MainPage/*' element={<MainPage />}></Route>
        <Route path='/Subject' element={<Subject/>}></Route>
        <Route path='/Subjectquest' element={<Subjectquest/>}></Route>
        {/* 중첩 라우팅에 대해 공부를 하자 */}
        {/* 새로고침 문제는 서버에서 데이터를 가져오는 동안 로딩창을 만들면 갠찮지 않을까 */}
        <Route path={(`/Subject/${dataUrl}`)} element={<SubProject/>}></Route>
        <Route path={(`/Subject/${dataUrl}/invitation`)} element={<Invitation/>}></Route>
        <Route path={(`/Subject/${dataUrl}/register`)} element={<Register/>}></Route>
        <Route path={('/Subject/Studentsubject')} element={<Studentsubject/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
