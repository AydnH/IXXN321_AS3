import React from 'react';
import './SignUp.css';

export default class SignUp extends React.Component {
    render() {

        return(
            <div>
                <div className="heading">
                    <h1 className="SignUp-H1">VORTFOLIO</h1>
                    <h2 className="SignUp-H2">VICTORIA UNIVERSITY</h2>
                </div>
                <div className="form">
                    <input className="SignUp-Inputs" type="text" placeholder="John Doe"></input>
                    <input className="SignUp-Inputs" type="email" placeholder="YOUR@EMAIL.HERE"></input>
                    <input className="SignUp-Inputs" id="password" type="password" placeholder="Password"></input>
                    
                    <div className="professions">
                        <button className="prof-buttons">ANFX</button>
                        <button className="prof-buttons">Communication</button>
                        <button className="prof-buttons">Fashion</button>
                        <button className="prof-buttons">Industrial</button>
                        <button className="prof-buttons">Media</button>
                        <button className="prof-buttons">Social Innovation</button>
                        <button className="prof-buttons">User Experience</button>    
                    </div>

                    <textarea maxLength="200" className="SignUp-Inputs" placeholder="BIOGRAPHY"></textarea>
                    <button className="submit-button">SUBMIT</button>
                </div>
            </div>
        )
    }
}