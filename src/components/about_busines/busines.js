import React from 'react';
import './busines.scss'

function Busines(props) {
    return (
        <section className="container">
            <div className="first_container">
                <div className="all_images first_images">
                    first
                </div>
                <div className="all_images secondary_images">
                    secondary
                </div>
            </div>
            <div className="secondary_container">
                <div className="all_images third_images">
                    third
                </div>
                <div className="all_images fourth_images">
                    fourth
                </div>
            </div>
        </section>
    );
}

export default Busines;