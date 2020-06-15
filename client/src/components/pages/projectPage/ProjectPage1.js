import React from 'react';
import './styles.css';
import landscape from './images/placeholder.png';

export default class ProjectPage1 extends React.Component {
    render() {
        return(
            <div className="container">

                <div className="section">
                    <h1>PROJECT TITLE</h1>
                    <h2>FirstName LastName</h2>
                </div>

                <div className="section">
                    <div className="flexcontainer">
                        <img className="hero" src={landscape} alt="placeholder"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. </p>
                    </div>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="sml-img"  src={landscape} alt="placeholder"/>
                        <img className="sml-img" src={landscape} alt="placeholder"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. </p>
                </div>

                <div className="section">
                    <img src={landscape} alt="placeholder"/>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="sml-img" src={landscape} alt="placeholder"/>
                        <p className="synopsis3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu. Dignissim blandit.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="flexcontainer2">
                        <img className="hero" src={landscape} alt="placeholder"/>
                        <div className="flexcontainer3">
                            <img className="micro-img" src={landscape} alt="placeholder"/>
                            <img className="micro-img" src={landscape} alt="placeholder"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}