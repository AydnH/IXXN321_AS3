import React, { Component } from "react";
import "./ProjectUpload.css";
// import PRupload from './forms/pr-hero'
import landscape from "./images/placeholder.png";
import axios from "axios";

export default class ProjectUpload1 extends React.Component {
  state = {
    message: "",
    image1: landscape,
    image2: landscape,
    image3: landscape,
    image4: landscape,
    image5: landscape,
    image6: landscape,
    image7: landscape,
    image8: landscape,
  };
  placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. ';
  // getImage = e => {
  //   console.log(e.target)
  //   const files = e.target.files;
  //   if (files && files.length > 0) {
  //     const file = files[0];
  //     this.setState({ file,
  //       file: URL.createObjectURL(e.target.files[0])
  //      });
  //   }
  // };
  
  getImage = e => {
    const { name, files } = e.target;
    this.setState({
      [name]: URL.createObjectURL(e.target.files[0]),
    });
  }

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
          />

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
          <div/>

        
        <div className="section">
          <div className="flexcontainer1">
              {/* <img className="pr-hero" src={this.state.image1}/> */}
              <form onSubmit={this.uploadFile} >
              <label htmlFor="upload-image" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image1}")`}}>Upload File</label>    
              <input
                className="upload-image"
                name="image1"
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={this.getImage}
              />
            </form>
            <textarea
              className="synopsis-input"
              rows="8"
              placeholder={this.placeholder}
            />
          </div>
        </div>

        <div className="section">
          <div className="flexcontainer2">
            {/* <img className="sml-img1" src={this.state.image2}/> */}
            <form onSubmit={this.uploadFile}>
            <label htmlFor="sml-img-upload" className="custom-file-upload2" style={{"backgroundImage": `url("${this.state.image2}")`}}>Upload File</label>
              <input
                name="image2"
                className="sml-img-upload"
                id="sml-img-upload"
                type="file"
                accept="image/*"
                onChange={this.getImage}
              />
          </form>
            {/* <img className="sml-img2" src={this.state.image3}/> */}
            <form onSubmit={this.uploadFile}>
            <label htmlFor="sml-img-upload2" className="custom-file-upload2" style={{"backgroundImage": `url("${this.state.image3}")`}}>Upload File</label>
              <input
                name="image3"
                className="sml-img-upload2"
                id="sml-img-upload2"
                type="file"
                accept="image/*"

                onChange={this.getImage}
              />
          </form>
            <textarea
              className="synopsis-input4"
              placeholder={this.placeholder}
            />

            </div>
        </div>

        <div className="section">
        <div className="flexcontainer3">
          {/* <img className="lrg-img" src={this.state.image4}/> */}
          <form onSubmit={this.uploadFile}>
          <label htmlFor="lrg-img-upload" className="custom-file-upload3" style={{"backgroundImage": `url("${this.state.image4}")`}}>Upload File</label>
            <input
              name="image4"
              className="lrg-img-upload"
              id="lrg-img-upload"
              type="file"
              accept="image/*"
              onChange={this.getImage}
            />
            {/* <button id="file-upload-button">Upload</button> */}
          </form>
          {/* <img src={landscape} alt="placeholder" /> */}
          </div>
        </div>

        <div className="section">
          <div className="flexcontainer4">
            {/* <img className="container4-image" src={this.state.image5}/> */}
            <form onSubmit={this.uploadFile}>
            <label htmlFor="sml-img-upload" className="custom-file-upload2" style={{"backgroundImage": `url("${this.state.image5}")`}}>Upload File</label>
              <input
                name="image5"
                className="sml-img-upload"
                id="sml-img-upload"
                type="file"
                accept="image/*"
                onChange={this.getImage}
              />
              {/* <button id="file-upload-button">Upload</button> */}
          </form>
            <textarea
              className="synopsis-input3"
              rows="6"
              placeholder={this.placeholder}            />
          </div>
        </div>

        <div className="section">
          <div className="flexcontainer5">
            {/* <img className="container5-image" src={this.state.image6}/> */}
            <form onSubmit={this.uploadFile}>
            <label htmlFor="upload-image" className="custom-file-upload2" style={{"backgroundImage": `url("${this.state.image6}")`}}>Upload File</label>
              <input
                name="image6"
                className="upload-image"
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={this.getImage}
              />

          </form>
          <div className="flexcontainer6">
              {/* <img className="micro-img1" src={this.state.image7}/> */}
              <form onSubmit={this.uploadFile}>
              <label htmlFor="micro-img-upload" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image7}")`}}>Upload File</label>
                <input
                  name="image7"
                  className="micro-img-upload"
                  id="micro-img-upload"
                  type="file"
                  accept="image/*"
                  onChange={this.getImage}
                />
          </form>
              {/* <img className="micro-img2" src={this.state.image8}/> */}
              <form onSubmit={this.uploadFile}>
              <label htmlFor="micro-img-upload" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image8}")`}}>Upload File</label>
                <input
                  name="image8"
                  className="micro-img-upload"
                  id="micro-img-upload"
                  type="file"
                  accept="image/*"

                  onChange={this.getImage}
                />

          </form>
          </div>
          </div>

        </div>
      </div>
      </div>
    );
  }
}
