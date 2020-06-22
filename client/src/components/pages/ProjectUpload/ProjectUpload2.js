import React from 'react';
import './ProjectUpload.css';
import landscape from './images/placeholder.png';

export default class ProjectUpload2 extends React.Component {
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

    getImage = e => {
        const { name, files } = e.target;
        this.setState({
          [name]: URL.createObjectURL(e.target.files[0]),
        });
    }

    uploadFile = e => {} 

    render() {
        return(
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
                    <div className="flexcontainer7">
                        <div className="flexcontainer8">
                        <form onSubmit={this.uploadFile} >
                            {/* <img className="container8-image1" src={landscape} alt="placeholder"/> */}
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
                        
                        <form onSubmit={this.uploadFile} >
                            {/* <img className="container8-image2" src={landscape} alt="placeholder"/> */}
                            <label htmlFor="upload-image2" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image2}")`}}>Upload File</label>
                            <input
                                className="upload-image2"
                                name="image2"
                                id="upload-image2"
                                type="file"
                                accept="image/*"
                                onChange={this.getImage}
                            />
                        </form>
                        </div>

                        <textarea className="synopsis-input5" 
                        placeholder={this.placeholder}
                        />
                    </div>
                </div>

                <div className="flexcontainer3">
                    {/* <img className="lrg-img" src={landscape} alt="placeholder"/> */}
                    <form onSubmit={this.uploadFile} >
                        <label htmlFor="upload-image3" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image3}")`}}>Upload File</label>
                        <input
                            className="upload-image3"
                            name="image3"
                            id="upload-image3"
                            type="file"
                            accept="image/*"
                            onChange={this.getImage}
                        />
                    </form>
                </div>

                <div className="section">
                    <div className="flexcontainer5">
                        {/* <img className="container5-image" src={landscape} alt="placeholder"/> */}
                        <form onSubmit={this.uploadFile} >
                            <label htmlFor="upload-image4" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image4}")`}}>Upload File</label>
                            <input
                                className="upload-image4"
                                name="image4"
                                id="upload-image4"
                                type="file"
                                accept="image/*"
                                onChange={this.getImage}
                            />
                        </form>
                        <div className="flexcontainer6">
                            {/* <img className="micro-img1" src={landscape} alt="placeholder"/> */}
                            <form onSubmit={this.uploadFile} >
                                <label htmlFor="upload-image5" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image5}")`}}>Upload File</label>
                                <input
                                    className="upload-image5"
                                    name="image5"
                                    id="upload-image5"
                                    type="file"
                                    accept="image/*"
                                    onChange={this.getImage}
                                />
                            </form>

                            {/* <img className="micro-img2" src={landscape} alt="placeholder"/> */}
                            <form onSubmit={this.uploadFile} >
                                <label htmlFor="upload-image6" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image6}")`}}>Upload File</label>
                                <input
                                    className="upload-image6"
                                    name="image6"
                                    id="upload-image6"
                                    type="file"
                                    accept="image/*"
                                    onChange={this.getImage}
                                />
                            </form>
                        </div>
                    </div>
                    <textarea className="synopsis-input4" 
                    placeholder={this.placeholder}
                    />
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        {/* <img className="sml-img1" src={landscape} alt="placeholder"/> */}
                        <form onSubmit={this.uploadFile} >
                            <label htmlFor="upload-image7" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image7}")`}}>Upload File</label>
                            <input
                                className="upload-image7"
                                name="image7"
                                id="upload-image7"
                                type="file"
                                accept="image/*"
                                onChange={this.getImage}
                            />
                        </form>

                        {/* <img className="sml-img2" src={landscape} alt="placeholder"/> */}
                        <form onSubmit={this.uploadFile} >
                            <label htmlFor="upload-image8" className="custom-file-upload" style={{"backgroundImage": `url("${this.state.image8}")`}}>Upload File</label>
                            <input
                                className="upload-image8"
                                name="image8"
                                id="upload-image8"
                                type="file"
                                accept="image/*"
                                onChange={this.getImage}
                            />
                        </form>
                    </div>
                    <textarea className="synopsis-input4" type="text"
                    placeholder={this.placeholder}
                    />
                </div>

            </div>
            </div>
        );
    }    
}