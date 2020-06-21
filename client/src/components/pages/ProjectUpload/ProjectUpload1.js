import React, { Component } from "react";
import "./ProjectUpload.css";
// import PRupload from './forms/pr-hero'
// import landscape from "./images/placeholder.png";
import axios from "axios";

export default class ProjectUpload1 extends React.Component {
  state = {
    message: "",

  };
  placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. ';
  
  getImage = e => {
    console.log(e.target)
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.setState({ file,
        file: URL.createObjectURL(e.target.files[0])
       });
    }
  };

  uploadFile = e => {
    e.preventDefault();
    const { file } = this.state;
    this.setState({message:'Uploading...'})

    console.log(file);
    const contentType = file.type; // img*
    
    const generatePutUrl = 'http://localhost:3100/generate-put-url';
    // for(var x = 0; x<this.state.file.length; x++) {
       const options = {
        params: {
          Key: file.name,
          ContentType: contentType
        },
        headers: {
          'Content-Type': contentType
        }
      }
     
console.log(options)

    axios.get(generatePutUrl, options, ).then(res => {
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
  // };
  };

  render() {
    return (
        
      <div className="container">
        <div className="section">
          <input
            className="project-title"
            type="text"
            placeholder="PROJECT TITLE"
          ></input>
          <div className="name-flex">
            <input
              className="designerNames"
              type="text"
              placeholder="FIRST NAME "
            ></input>
            <input
              className="designerNames"
              type="text"
              placeholder="LAST NAME "
            ></input>
          </div>
        </div>
        

        <div className="section">
          <div className="flexcontainer">

            {/* <React.Fragment> */}
              {/* <img className="pr-hero" src={landscape} alt="placeholder" /> */}
              <img className="pr-hero" src={this.state.file}/>
              <form onSubmit={this.uploadFile}>
              <input
                className="pr-hero"
                id="upload-image"
                type="file"
                accept="image/*"
                
                onChange={this.getImage}
              />
              <button id="file-upload-button">Upload</button>
              </form>
              {/* <p>{this.state.message}</p> */}
            {/* </React.Fragment> */}
            <textarea
              className="synopsis-input"
              rows="8"
              placeholder={this.placeholder}
            ></textarea>
                      

          </div>
        </div>

        <div className="section">
          <div className="flexcontainer2">
            {/* <React.Fragment> */}
            <form onSubmit={this.uploadFile}>
              <input
                className="sml-img"
                id="upload-image"
                type="file"
                accept="image/*"

                onChange={this.getImage}
              />
              <p>{this.state.message}</p>
              <button id="file-upload-button">Upload</button>
          </form>
            {/* </React.Fragment> */}
            {/* <React.Fragment> */}
            <form onSubmit={this.uploadFile}>
              <input
                className="sml-img"
                id="upload-image"
                type="file"
                accept="image/*"

                onChange={this.getImage}
              />
              <p>{this.state.message}</p>
              <button id="file-upload-button">Upload</button>
          </form>
            {/* </React.Fragment> */}
            {/* <img className="sml-img" src={landscape} alt="placeholder" />
            <img className="sml-img" src={landscape} alt="placeholder" /> */}
          </div>
          {/* <React.Fragment> */}
            <textarea
              className="synopsis-input4"
              placeholder={this.placeholder}
            ></textarea>
          {/* </React.Fragment> */}
        </div>

        <div className="section">
          {/* <React.Fragment> */}
          <form onSubmit={this.uploadFile}>
            <input
              className="sml-img"
              id="upload-image"
              type="file"
              accept="image/*"
              onChange={this.getImage}
            />
            <p>{this.state.message}</p>
            <button id="file-upload-button">Upload</button>
          </form>
          {/* </React.Fragment> */}
          {/* <img src={landscape} alt="placeholder" /> */}
        </div>

        <div className="section">
          <div className="flexcontainer2">
            {/* <React.Fragment> */}
            <form onSubmit={this.uploadFile}>
              <input
                className="sml-img"
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={this.getImage}
              />
              {/* <p>{this.state.message}</p> */}
              <button id="file-upload-button">Upload</button>
          </form>
            {/* </React.Fragment> */}
            {/* <img className="sml-img" src={landscape} alt="placeholder" /> */}
            <textarea
              className="synopsis-input3"
              rows="6"
              placeholder={this.placeholder}            />
          </div>
        </div>

        <div className="section">
          <div className="flexcontainer2">
            {/* <React.Fragment> */}
            <form onSubmit={this.uploadFile}>
              <input
                className="pr-hero"
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={this.getImage}
              />
              <p>{this.state.message}</p>
              <button id="file-upload-button">Upload</button>
          </form>
            {/* </React.Fragment> */}
            {/* <img className="pr-hero" src={landscape} alt="placeholder" /> */}
            <div className="flexcontainer3">
              {/* <React.Fragment> */}
              <form onSubmit={this.uploadFile}>
                <input
                  className="micro-img"
                  id="upload-image"
                  type="file"
                  accept="image/*"

                  onChange={this.getImage}
                />
                <p>{this.state.message}</p>
                <button id="file-upload-button">Upload</button>
          </form>
              {/* </React.Fragment> */}
              {/* <React.Fragment> */}
              <form onSubmit={this.uploadFile}>
                <input
                  className="micro-img"
                  id="upload-image"
                  type="file"
                  accept="image/*"

                  onChange={this.getImage}
                />
                <p>{this.state.message}</p>
                <button id="file-upload-button">Upload</button>
          </form>
              {/* </React.Fragment> */}
              {/* <img className="micro-img" src={landscape} alt="placeholder" />
              <img className="micro-img" src={landscape} alt="placeholder" /> */}

            </div>
          </div>

        </div>
      </div>

    );
  }
}
