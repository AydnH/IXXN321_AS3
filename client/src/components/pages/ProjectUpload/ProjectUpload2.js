import React from 'react';
import './ProjectUpload.css';
import landscape from './images/placeholder.png';

export default class ProjectUpload2 extends React.Component {
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
                            <img className="container8-image1" src={landscape} alt="placeholder"/>
                            <img className="container8-image2" src={landscape} alt="placeholder"/>
                        </div>
                        <textarea className="synopsis-input5" 
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies.">
                        </textarea>
                    </div>
                </div>

                <div className="flexcontainer3">
                    <img className="lrg-img" src={landscape} alt="placeholder"/>
                </div>

                <div className="section">
                    <div className="flexcontainer5">
                        <img className="container5-image" src={landscape} alt="placeholder"/>
                        <div className="flexcontainer6">
                            <img className="micro-img1" src={landscape} alt="placeholder"/>
                            <img className="micro-img2" src={landscape} alt="placeholder"/>
                        </div>
                    </div>
                    <textarea className="synopsis-input4" 
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu.">
                    </textarea>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="sml-img1" src={landscape} alt="placeholder"/>
                        <img className="sml-img2" src={landscape} alt="placeholder"/>
                    </div>
                    <textarea className="synopsis-input4" type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu.">
                    </textarea>
                </div>

            </div>
            </div>
        );
    }    
}