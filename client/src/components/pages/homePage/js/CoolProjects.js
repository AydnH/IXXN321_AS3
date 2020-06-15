import React from 'react';
import "../css/CoolProjects.css";

export default function CoolProjects() {
    return (
        <section id='CPCont'>

            {/* <div id='titleCont'>
                <h1 id='titleVort'>VORTFOLIO's</h1>
                <h1 id='titleFlip'>TOP PICKS</h1>
            </div> */}

            <div id='Project1'>
                <img src='https://media.giphy.com/media/l4FGpgZtKSRpbgeXK/source.gif'/>
                <div id='Project1Text'>
                    <div class='lineDiv'></div>
                    <h1>Project name</h1>
                    <h1>DD/MMMM/YYYY</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh.</h2>
                    <h3>interaction design</h3>
                </div>
            </div>

            <div id='Project2'>
                <div id='Project2Text'>
                    <h1>Project name</h1>
                    <h1>DD/MMMM/YYYY</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh.</h2>
                    <h3>industrial design</h3>
                    <div class='lineDiv'></div>
                </div>
                <img src='https://media.giphy.com/media/3oEdv3bCFCHj3kRcXe/source.gif'/>
            </div>

            <div id='Project3'>
                <div id='Project3Name'>
                    <h1>Project name</h1>
                    <h1>DD/MMMM/YYYY</h1>
                </div>
                <img src='https://media.giphy.com/media/jIIlWEJOC9Xgs/source.gif'/>
                <div id='Project3Text'>
                    <div class='lineDiv'></div>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque.</h2>
                    <h3>graphic design</h3>
                </div>
            </div>
            
        </section>
    )
}
