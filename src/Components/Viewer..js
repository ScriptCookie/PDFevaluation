import {useEffect, useState} from 'react';
import React from 'react';

function Viewer() {
  //------------------------------------------PDFLOADER--------------------------------------------
  const [files , setFiles] = useState('');
  const [datas , setDatas] = useState();
  const [subName , setSubName] = useState();

  function onLoadFile(event) {
    const file = event.target.files;
    console.log(file);
    setFiles(file);
      const fileList = event.target.files;
      console.log(fileList);
  }
  // function viewFile() {
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(files[0]);

  //   fileReader.onload = function () {
  //     document.getElementById("previewPDF").src = datas[0].data;
  // };
  // fileReader.result = null;
  // }

  function view() {
    document.getElementById("previewPDF").src = datas[0].data;
  }

  const config = {
    method : "get"
  }
  fetch('http://localhost:8000/api/name', config)
  .then(res => res.json())
  .then(nameData => setSubName(nameData));

  // ----------------------------------- POST --------------------------------------------------
  function flieInput(event) {

    event.preventDefault();

    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]); // 파일이 다중으로 들어가지 않는 문제

    fileReader.onload = function () {
      fetch('http://localhost:8000/api/list', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body : JSON.stringify({
        data : fileReader.result,
        subjectName : subName
      })
    })
      //console.log('result =>' , subName)
  };
  }

// -------------------------------- GET ---------------------------------------

  useEffect(() => {
    fetch('http://localhost:8000/api/list')
    .then((res) => res.json())
    .then(data => setDatas(data[0]));
  }, [])

  //console.log('datas =>', datas[0].data);
  //console.log('files =>', files);

  return (
    <div className="App">
    
      <input type="file" id="fileUpload" accept=".pdf" required multiple onChange={onLoadFile}/>
      <iframe id="previewPDF" width="700" height="700"></iframe>
      <button id="click" onClick={view}>파일 보기</button>
      <button id="click" onClick={flieInput}>서버 보내기</button>
    </div>
  );
}

export default Viewer;
