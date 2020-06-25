import React from 'react';
import "../css/GraphProjects.css";

export default function GraphProjects() {
    return (
        <div id='GraphCont'>

            <div className='titleCont'>
                <h1 className='disciplineTitle'>Media</h1>
                <h1 className='titleFlip'>projects</h1>
            </div>

            <div id='GraphProjectsCont'>

                <div className='ProjectCont GraphPro1'>
                    <div id='GraphHoverInfo'>
                        <h1>Cool Project Name</h1>
                        <p>Firstname Lastname</p>
                    </div>
                </div>

                <div className='ProjectCont GraphPro2'>
                    <div id='GraphHoverInfo'>
                        <h1>Cool Project Name</h1>
                        <p>Firstname Lastname</p>
                    </div>
                </div>

                <div className='ProjectCont GraphPro3'>
                    <div id='GraphHoverInfo'>
                        <h1>Cool Project Name</h1>
                        <p>Firstname Lastname</p>
                    </div>
                </div>

            </div>

            <a className='cta'>View More</a>
            
        </div>
    )
}
