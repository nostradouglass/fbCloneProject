import React from 'react'
import Header from './base/header'
import Dropzone from 'react-dropzone'
import axios from 'axios'

class Testing extends React.Component {



 onDrop(acceptedFiles, rejectedFiles) {
    
    let formData = new FormData();
     var file = acceptedFiles
     console.log(file[0])
    formData.append("file", file[0]);
     formData.append('someName','someValue');
    formData.append('_method', 'PUT'); // ADD THIS LINE
    axios({
             method: 'post', //CHANGE TO POST
             url: "/upload/profile_pic",
             data: formData,
       })
       }

    render() {
        return (
            <div>
                <Header />
                <h1>Testing</h1>

<Dropzone onDrop={(files) => this.onDrop(files)}>
<div>Try dropping some files here, or click to select files to upload.</div>
</Dropzone>

            </div>
        )
    }
}


export default Testing