import {useEffect} from 'react';

function App() {
// -------------------------------- GET ---------------------------------------
  useEffect(() => {
    fetch('http://localhost:3000/api/list')
    .then((res) => res.json())
    .then((data) => console.log(data));
  }, [])
// ----------------------------------- POST --------------------------------------------------

  function flieInput(event) {
    const fileList = event.target.files;
    console.log(fileList);

    event.preventDefault();
    fetch('http://localhost:3000/api/list', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        name : '철수',
        age : 28
      })
    })
  }

  return (
    <div className="App">
      <h1>client</h1>
      <input type="file" id="fileUpload" multiple="multiple" required accept=".pdf" onChange={flieInput}/>
    </div>
  );
}

export default App;
