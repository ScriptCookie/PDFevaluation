import React from 'react';

function EvaluationPage() {

    var upload_box = document.getElementById('upload_box');

    // 들어왔을때
    // window.onload = function() {
    //     upload_box.addEventListener('dragenter', function(e) {
    //         console.log('dragenter');
    //     })
    // }
        
    // // 드롭 했을때
    // window.onload = function() {
    //     upload_box.addEventListener('drop', function(e) {
    //         e.preventDefault();
    
    //         console.log('drop');
    //         this.style.backgroundColor = 'white';
    //     });
    // }

    return(
        <div>
            <h1>평가 페이지</h1>
            <h2>파일 업로드</h2>
            <div id='upload_box'>
                
                <input id='btn_file' type='file'></input>
            </div>
        </div>
    );
}

export default EvaluationPage;