import React, { Component } from 'react';
import axios from 'axios';

export default class Uploader extends Component {
  state = {
    message:''
  };

  getImage = e => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.setState({ file });
    }
  
  };

  uploadFile = e => {
    e.preventDefault();
    const { file } = this.state;
    this.setState({message:'Uploading...'})
    console.log(file);
  
    console.log(file);
    const contentType = file.type; // img*

    const generatePutUrl = 'http://localhost:3100/generate-put-url';
    const options = {
      params: {
        Key: file.name,
        ContentType: contentType
      },
      headers: {
        'Content-Type': contentType
      }
    };
console.log(options)
    axios.get(generatePutUrl, options).then(res => {
      const {
        data: { putURL }
      } = res;
      axios
        .put(putURL, file, options)
        .then(res => {
          this.setState({message:'Upload Successful'})
          setTimeout(()=>{
            this.setState({message:''});
            document.querySelector('#upload-image').value='';
          }, 2000)
        })
        .catch(err => {
          this.setState({message:'Sorry, something went wrong'})
          console.log('err', err);
        });
    });
    console.log(this.data)
  };

  render() {
    return (
      <React.Fragment>

        <input
          id='upload-image'
          type='file'
          accept='image/*'
          onChange={this.getImage}
        />
        <p>{this.state.message}</p>
        <form onSubmit={this.uploadFile}>
          <button id='file-upload-button'>Upload</button>
        </form>
      </React.Fragment>
    );
  }
}