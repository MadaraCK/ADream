import React from 'react';

import './busines.scss'

function Busines() {
    return (
        <section className="container">
            <div className="first_container">
                <div className="all_images first_images">
                    <div className="img1">
                        <div className="box_ofice">
                            <h2 className="ofice ofice1">Biuro</h2>
                            <p className="ofice_cost">od 1000zl/msc</p>
                        </div>
                        <div className="arrow">

                        </div>
                    </div>
                </div>
                <div className="all_images secondary_images">
                    <div className="img2">
                        <div className="ofice_lorem">
                            <h2 className="ofice ofice2">Lorem Ipsum</h2>
                            <p className="ofice_cost">od 1000zl/msc</p>
                        </div>
                        <div className="arrow">

                        </div>
                    </div>
                </div>
            </div>
            <div className="secondary_container">
                <div className="all_images third_images">
                    <div className="img3">
                        <div className="ofice_lorem3">
                            <h2 className="ofice ofice3">Biuro Lorem</h2>
                            <p className="ofice_cost">od 1000zl/msc</p>
                        </div>
                        <div className="arrow">

                        </div>
                    </div>
                </div>
                <div className="all_images fourth_images">
                    <div className="img4">
                        <div className="ofice_lorem4">
                            <h2 className="ofice ofice4">Biuro Lorem ipsum Lorem</h2>
                            <p className="ofice_cost">od 1000zl/msc</p>
                        </div>
                        <div className="arrow">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Busines;