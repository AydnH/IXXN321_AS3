import React from "react";
import "../userPage/userPage.css"
import placeholder from './images/placeholder.jpg';
export default class userPage extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h1>First Name Last Name</h1>
          <h3>Profession x
          designer</h3>
          <h2>Featured Project</h2>
          <img className="hero" src={placeholder} alt="placeholder"/>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit 
        vitae nibh. Aenean pellentesque imperdiet morbi vitae varius sed pellentesque aliquet ultricies. Dignissim 
        blandit ultrices vehicula convallis. Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa 
        dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu porttitor faucibus mi neque, venenatis. 
        Congue massa dui eu porttitor faucibus. massa dui eu porttitor faucibus mi neque, venenatis. Congue massa 
        dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu porttitor faucibus mi neque, venenatis. 
        Congue massa dui eu porttitor faucibus mi neque, venenatis. Congue massa dui eu porttitor faucibus mi neque, 
        venenatis.</p>
        </section>
        <section>
        <img className="placeholder" src={placeholder} alt="placeholder"/> 
        <img className="placeholder2" src={placeholder} alt="placeholder"/> 
        <img className="placeholder3" src={placeholder} alt="placeholder"/> 
        <img className="placeholder4" src={placeholder} alt="placeholder"/> 
        <img className="placeholder5" src={placeholder} alt="placeholder"/> 
        <img className="placeholder6" src={placeholder} alt="placeholder"/> 
        <img className="placeholder7" src={placeholder} alt="placeholder"/> 
        <img className="placeholder8" src={placeholder} alt="placeholder"/> 

        <h4>project name
        dd/mm/yyyy</h4>
    <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae 
        nibh. consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. consectetur 
        adipiscing elit. 
        Read more</p2>
        </section>
      </div>
    );
  }
}
