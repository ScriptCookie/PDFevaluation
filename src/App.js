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

function App() {
  const [dataUrl, setDataUrl] = useState();

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

    //getSubjectData();
  }

  // function getSubjectData() {
  //   const config = {
  //     method : "get"
  //   };
  //   fetch('http://localhost:8000/api/subjectdata', config)
  //   .then(res => res.json())
  //   .then(subData => {
  //     console.log('가져온 데이터 정보', subData);
  //   })
  //   .catch(error => console.log("fech error!!"));
  // }

    useEffect(() => {
      getSubjectUrl();
      //location.reload();
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
        <Route path={(`/Subject/${dataUrl}`)} element={'보여질 데이터 공간 과목 / PDF 파일'}></Route>
        <Route path='/영어' element={'ddd'}></Route>
      </Routes>
    </div>
  );
}

export default App;
