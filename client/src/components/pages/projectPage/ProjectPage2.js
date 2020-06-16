import React from 'react';
import './styles.css';
import landscape from './images/placeholder.png';

export default class ProjectPage2 extends React.Component {
    render() {
        return(
            <div className="container">

                <div className="section">
                    <h1 className="project-title">PROJECT TITLE</h1>
                    <h2 className="designer-name">FirstName LastName</h2>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <p className="synopsis2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui.</p>
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
                        <img className="hero" src={landscape} alt="placeholder"/>
                        <div className="flexcontainer3">
                            <img className="micro-img" src={landscape} alt="placeholder"/>
                            <img className="micro-img" src={landscape} alt="placeholder"/>
                        </div>
                    </div>
                    <p className="synopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. </p>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="sml-img" src={landscape} alt="placeholder"/>
                        <img className="sml-img" src={landscape} alt="placeholder"/>
                    </div>
                    <p className="synopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. </p>
                </div>

            </div>
        );
    }    
}