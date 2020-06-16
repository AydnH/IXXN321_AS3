import React from 'react';
import "../css/InterestingPeople.css";
import student1 from "../images/student1.jpg";
import student2 from "../images/student2.jpg";
import student3 from "../images/student3.jpg";

export default function InterestingPeople() {
    return (
        <div id='InterestingPeopleCont'>

            <div className='titleCont'>
                <h1 className='disciplineTitle'>Interesting</h1>
                <h1 className='titleFlip'>People</h1>
            </div>

            <div id='IntPeopleCont'>

                <div className='personCont personCont1' style={{ backgroundImage: (student1) }}>
                    <div className='hoverInfo'>
                        <h1>Firstname Lastname</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh.</p>
                    </div>
                </div>

                <div className='personCont personCont2' style={{ backgroundImage: (student2) }}>
                    <div className='hoverInfo'>
                        <h1>Firstname Lastname</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh.</p>
                    </div>
                </div>

                <div className='personCont personCont3' style={{ backgroundImage: (student3) }}>
                    <div className='hoverInfo'>
                        <h1>Firstname Lastname</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim pretium sit id scelerisque auctor tellus sit vitae nibh.</p>
                    </div>
                </div>
            </div>

            <a className='cta'>SIGN-UP</a>

        </div>
    )
}
