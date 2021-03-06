import React from "react";
import "./ProjectUpload.css";
// import PRupload from './forms/pr-hero'
import landscape from "./images/placeholder.png";
// import axios from "axios";

export default class ProjectUpload1 extends React.Component {
  state = {
    image1: landscape,
    image2: landscape,
    image3: landscape,
    image4: landscape,
    image5: landscape,
    image6: landscape,
    image7: landscape,
    image8: landscape,
  };
  placeholder =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. ";
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

  //   getImage = e => {
  //     const { name, files } = e.target;
  //     this.setState({
  //       [name]: URL.createObjectURL(e.target.files[0]),
  //     });
  //   }

  //   uploadFile = e => {
  //     e.preventDefault();
  //     const { file } = this.state;
  //     this.setState({message:'Uploading...'})

  //     console.log(file);
  //     const contentType = file.type; // img*

  //     const generatePutUrl = 'http://localhost:3100/generate-put-url';
  //     // for(var x = 0; x<this.state.file.length; x++) {
  //        const options = {
  //         params: {
  //           Key: file.name,
  //           ContentType: contentType
  //         },
  //         headers: {
  //           'Content-Type': contentType
  //         }
  //       }

  // console.log(options)

  //     axios.get(generatePutUrl, options, ).then(res => {
  //       const {
  //         data: { putURL }
  //       } = res;
  //       axios
  //         .put(putURL, file, options)
  //         .then(res => {
  //           this.setState({message:'Upload Successful'})
  //           setTimeout(()=>{
  //             this.setState({message:''});
  //             document.querySelector('#upload-image').value='';
  //           }, 2000)
  //         })
  //         .catch(err => {
  //           this.setState({message:'Sorry, something went wrong'})
  //           console.log('err', err);
  //         });
  //     });
  //   // };
  //   };

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
          <div />

          <div className="section">
            <div className="flexcontainer1">
              <form onSubmit={this.uploadFile}>
                <label
                  htmlFor="upload-image"
                  className="custom-file-upload"
                  style={{ backgroundImage: `url("${this.state.image1}")` }}
                >
                  Upload File
                </label>
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
              <form onSubmit={this.uploadFile}>
                <label
                  htmlFor="upload-image2"
                  className="custom-file-upload2"
                  style={{ backgroundImage: `url("${this.state.image2}")` }}
                >
                  Upload File
                </label>
                <input
                  name="image2"
                  className="upload-image2"
                  id="upload-image2"
                  type="file"
                  accept="image/*"
                  onChange={this.getImage}
                />
              </form>
              <form onSubmit={this.uploadFile}>
                <label
                  htmlFor="upload-image3"
                  className="custom-file-upload2"
                  style={{ backgroundImage: `url("${this.state.image3}")` }}
                >
                  Upload File
                </label>
                <input
                  name="image3"
                  className="upload-image3"
                  id="upload-image3"
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
              <form onSubmit={this.uploadFile}>
                <label
                  htmlFor="upload-image4"
                  className="custom-file-upload3"
                  style={{ backgroundImage: `url("${this.state.image4}")` }}
                >
                  Upload File
                </label>
                <input
                  name="image4"
                  className="upload-image4"
                  id="upload-image4"
                  type="file"
                  accept="image/*"
                  onChange={this.getImage}
                />
              </form>
            </div>
          </div>

          <div className="section">
            <div className="flexcontainer4">
              <form onSubmit={this.uploadFile}>
                <label
                  htmlFor="upload-image5"
                  className="custom-file-upload2"
                  style={{ backgroundImage: `url("${this.state.image5}")` }}
                >
                  Upload File
                </label>
                <input
                  name="image5"
                  className="upload-image5"
                  id="upload-image5"
                  type="file"
                  accept="image/*"
                  onChange={this.getImage}
                />
              </form>
              <textarea
                className="synopsis-input3"
                rows="6"
                placeholder={this.placeholder}
              />
            </div>
          </div>

          <div className="section">
            <div className="flexcontainer5">
              <form onSubmit={this.uploadFile}>
                <label
                  htmlFor="upload-image6"
                  className="custom-file-upload2"
                  style={{ backgroundImage: `url("${this.state.image6}")` }}
                >
                  Upload File
                </label>
                <input
                  name="image6"
                  className="upload-image6"
                  id="upload-image6"
                  type="file"
                  accept="image/*"
                  onChange={this.getImage}
                />
              </form>
              <div className="flexcontainer6">
                <form onSubmit={this.uploadFile}>
                  <label
                    htmlFor="upload-image7"
                    className="custom-file-upload"
                    style={{ backgroundImage: `url("${this.state.image7}")` }}
                  >
                    Upload File
                  </label>
                  <input
                    name="image7"
                    className="upload-image7"
                    id="upload-image7"
                    type="file"
                    accept="image/*"
                    onChange={this.getImage}
                  />
                </form>
                <form onSubmit={this.uploadFile}>
                  <label
                    htmlFor="upload-image8"
                    className="custom-file-upload"
                    style={{ backgroundImage: `url("${this.state.image8}")` }}
                  >
                    Upload File
                  </label>
                  <input
                    name="image8"
                    className="upload-image8"
                    id="upload-image8"
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
