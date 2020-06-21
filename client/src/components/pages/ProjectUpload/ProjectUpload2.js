import React from 'react';
import './ProjectUpload.css';
import landscape from './images/placeholder.png';

export default class ProjectUpload2 extends React.Component {
    render() {
        return(
            <div className="container">

                <div className="section">
                    <input className="project-title" type="text" placeholder="PROJECT TITLE"></input>
                    <div className="name-flex">
                        <input className="designerNames" type="text" placeholder="FIRST NAME "></input>
                        <input className="designerNames" type="text" placeholder="LAST NAME "></input>
                    </div>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <textarea className="synopsis-input" 
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies.">
                        </textarea>
                        <div className="flexcontainer3">
                            <img className="med-img" src={landscape} alt="placeholder"/>
                            <img className="med-img" src={landscape} alt="placeholder"/>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <img src={landscape} alt="placeholder"/>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="pr-hero" src={landscape} alt="placeholder"/>
                        <div className="flexcontainer3">
                            <img className="micro-img" src={landscape} alt="placeholder"/>
                            <img className="micro-img" src={landscape} alt="placeholder"/>
                        </div>
                    </div>
                    <textarea className="synopsis-input4" 
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu.">
                    </textarea>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="sml-img" src={landscape} alt="placeholder"/>
                        <img className="sml-img" src={landscape} alt="placeholder"/>
                    </div>
                    <textarea className="synopsis-input4" type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu.">
                    </textarea>
                </div>

            </div>
        );
    }    
}