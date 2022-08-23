import React from 'react';

function Invitation() {

    function getSubjectUrl() {
        const config = {
            method : "get"
        };
        fetch('http://localhost:8000/api/subjectss', config)
        .then(res => res.json())
        .then(resData => {
            console.log('res' , resData);
            const urlBox = document.getElementById('urlBox');
            urlBox.append(`http://localhost:3000/Subject/${resData}/register`)
        })
        .catch(error => console.log("fech error!!"));
    
      }

      getSubjectUrl();

    return(
        <div>
            <div id='urlBox'>
                <li>초대 링크</li>
            </div>
        </div>
    );
}

export default Invitation;