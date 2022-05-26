import React from 'react';
import './busines.scss'
import img1 from './imgbusines1.png'
import img2 from '../images/imgbusines2.png'
import img3 from '../images/imgbusines3.png'
import img4 from '../images/imgbusines4.png'

function Busines(props) {
    return (
        <section className="container">
            <div className="first_container">
                <div className="all_images first_images">
                    <img src={img1} alt="x"/>
                </div>
                <div className="all_images secondary_images">
                    <img src={img2} alt="x"/>
                </div>
            </div>
            <div className="secondary_container">
                <div className="all_images third_images">
                    <img src={img3} alt=""/>
                </div>
                <div className="all_images fourth_images">
                    <img src={img4} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Busines;