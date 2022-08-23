import {useEffect, useState} from 'react';
import React from 'react';

function Viewer() {
  //------------------------------------------PDFLOADER--------------------------------------------
  const [files , setFiles] = useState('');
  const [datas , setDatas] = useState();

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

  // ----------------------------------- POST --------------------------------------------------
  function flieInput(event) {
    event.preventDefault();

    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = function () {
      fetch('http://localhost:8000/api/list', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body : JSON.stringify({
        data : fileReader.result
      })
    })
      //console.log('result =>' , fileReader.result)
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
