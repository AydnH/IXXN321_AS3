import React from 'react';
import './SignUp.css';

export default class SignUp extends React.Component {
    render() {

        return(
            <div>
                <div className="heading">
                    <h1>VORTFOLIO</h1>
                    <h2>VICTORIA UNIVERSITY</h2>
                </div>
                <div className="form">
                    <input type="text" placeholder="John Doe"></input>
                    <input type="email" placeholder="YOUR@EMAIL.HERE"></input>
                    <input id="password" type="password" placeholder="Password"></input>
                    
                    <div className="professions">
                        <button>ANFX</button>
                        <button>Communication</button>
                        <button>Fashion</button>
                        <button>Industrial</button>
                        <button>Media</button>
                        <button>Social Innovation</button>
                        <button>User Experience</button>    
                    </div>

                    <input type="text" placeholder="BIOGRAPHY"></input>
                    <button>SUBMIT</button>
                </div>
            </div>
        )
    }
}