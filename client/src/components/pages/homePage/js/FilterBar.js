import React from 'react';
import "../css/FilterBar.css";
import indus from "../images/indus.svg";
import inter from "../images/inter.svg";
import media from "../images/media.svg";
import graph from "../images/graph.svg";

export default function FilterBar() {
    return (
        <div id='FilterBarCont'>
            
            <a className='disCont indusCont' href="">
                <img src={indus}/>
            </a>

            <a className='disCont interCont' href="">
                <img src={inter}/>
            </a>

            <a className='disCont mediaCont' href="">
                <img src={media}/>
            </a>

            <a className='disCont graphCont' href="">
                <img src={graph}/>
            </a>
            
        </div>
    )
}
