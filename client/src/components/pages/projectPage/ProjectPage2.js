import React from 'react';
import './ProjectPage.css';
import landscape from './images/placeholder.png';

export default class ProjectPage2 extends React.Component {
    render() {
        return(
            <div className="pp-cont">

                <div className="pp-section">
                    <h1 className="pp-project-title">PROJECT TITLE</h1>
                    <h2 className="pp-designerName">FirstName LastName</h2>
                </div>

                <div className="pp-section">
                    <div className="pp-flexcontainer2">
                        <p className="pp-project-synopsis2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui.</p>
                        <div className="pp-flexcontainer3">
                            <img className="pp-med-img" src={landscape} alt="placeholder"/>
                            <img className="pp-med-img" src={landscape} alt="placeholder"/>
                        </div>
                    </div>
                </div>

                <div className="pp-section">
                    <img src={landscape} alt="placeholder"/>
                </div>

                <div className="pp-section">
                    <div className="pp-flexcontainer2">
                        <img className="pp-pr-hero" src={landscape} alt="placeholder"/>
                        <div className="pp-flexcontainer3">
                            <img className="pp-micro-img" src={landscape} alt="placeholder"/>
                            <img className="pp-micro-img" src={landscape} alt="placeholder"/>
                        </div>
                    </div>
                    <p className="pp-project-synopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. </p>
                </div>

                <div className="pp-section">
                    <div className="pp-flexcontainer2">
                        <img className="pp-sml-img" src={landscape} alt="placeholder"/>
                        <img className="pp-sml-img" src={landscape} alt="placeholder"/>
                    </div>
                    <p className="pp-project-synopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. </p>
                </div>

            </div>
        );
    }    
}