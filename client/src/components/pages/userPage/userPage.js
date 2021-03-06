import React from "react";
import "../userPage/userPage.css"
import "../userPage/Hover.css"
import placeholder from './images/placeholder.jpg';
import Hover from "../userPage/Hover";

export default class userPage extends React.Component {
  render() {
    return (
      <div>
        <section id= "UserProfile">
         
          <h1 className="designer-name">FIRST NAME LAST NAME</h1>
          <h3 className="designer-profession">PROFESSION X DESIGNER</h3>
          <h2 className="designer-projects">Featured Projects</h2>
          <img className="hero" src={placeholder} alt="placeholder"/>
          <p className = "synopsis"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit 
        vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim 
        blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa 
        dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu porttitor faucibus mi neque, venenatis. 
        Congue massa dui eu porttitor faucibus. massa dui eu porttitor faucibus mi neque, venenatis. Congue massa 
        dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu porttitor faucibus mi neque, venenatis. 
        Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu porttitor faucibus mi neque, 
        venenatis.</p>
        </section>

        <section id="UserProject">
        <Hover>
        <img className="placeholder" src={placeholder} alt="placeholder"/> 
        <img className="placeholder2" src={placeholder} alt="placeholder"/> 
        <img className="placeholder3" src={placeholder} alt="placeholder"/> 
        <img className="placeholder4" src={placeholder} alt="placeholder"/> 
        <img className="placeholder5" src={placeholder} alt="placeholder"/> 
        <img className="placeholder6" src={placeholder} alt="placeholder"/> 
        <img className="placeholder7" src={placeholder} alt="placeholder"/> 
        <img className="placeholder8" src={placeholder} alt="placeholder"/> 
        </Hover>
        </section>
      </div>
    );
  }
}
