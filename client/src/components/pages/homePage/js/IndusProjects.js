import React from 'react';
import "../css/IndusProjects.css";

export default function IndusProjects() {
    return (
        <div id='IndusCont'>

            <div className='titleCont'>
                <h1 className='disciplineTitle'>industrial</h1>
                <h1 className='titleFlip'>projects</h1>
            </div>


            <div className='IndusProjectsCont'>

                <div className='ProjectCont IndusProject1'>
                    <div className='IndusHoverInfo'>
                        <h1>Cool Project Name</h1>
                        <p>Firstname Lastname</p>
                    </div>
                </div>

                <div id='IndusSec2'>
                    <div className='ProjectCont IndusProject2'>
                        <div className='IndusHoverInfo'>
                            <h1>Cool Project Name</h1>
                            <p>Firstname Lastname</p>
                        </div>
                    </div>

                    <div id='IndusSec3'>
                        <div className='ProjectCont IndusProject3'>
                            <div className='IndusHoverInfo'>
                                <h1>Cool Project Name</h1>
                                <p>Firstname Lastname</p>
                            </div>
                        </div>
                        <div className='ProjectCont IndusProject4'>
                            <div className='IndusHoverInfo'>
                                <h1>Cool Project Name</h1>
                                <p>Firstname Lastname</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
            <a className='cta'>VIEW MORE</a>
        
        </div>
    )
}
