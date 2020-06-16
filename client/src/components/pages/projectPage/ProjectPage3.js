import React from 'react';
import './ProjectPage.css';
import landscape from './images/placeholder.png';
import portrait from './images/portrait.png';

export default class ProjectPage3 extends React.Component {
    render() {
        return(
            <div className="container">

                <div className="section">
                    <h1 className="project-title">PROJECT TITLE</h1>
                    <h2 className="designerName">FirstName LastName</h2>
                </div>

                <div className="section">
                    <img src={landscape} alt="placeholder"/>
                </div>

                <div className="section">
                    <div className="flexcontainer">
                        <img className="pr-hero" src={landscape} alt="placeholder"/>
                        <p className="project-synopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. </p>
                    </div>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="portrait" src={portrait} alt="placeholder"/>
                        <img className="portrait" src={portrait} alt="placeholder"/>
                        <img className="portrait" src={portrait} alt="placeholder"/>
                    </div>
                    <p className="project-synopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. </p>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="portrait" src={portrait} alt="placeholder"/>
                        <img className="lrg-img" src={landscape} alt="placeholder"/>
                    </div>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="sml-img" src={landscape} alt="placeholder"/>
                        <p className="project-synopsis3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Dignissim blandit.</p>
                    </div>
                </div>

            </div>
        )
    }    
}