import React from "react";
import './photo.scss'

function Photo(){
    return(
        <header className="images_photo">
            <section className="first_image">
                <div className="photo_img_1"></div>
            </section>
            <section className="secondary_image">
                <div className="photo_img_2 photo_img"></div>
                <div className="photo_img_3 photo_img"></div>
            </section>
            <section className="last_image">
                <h1 className="galery">Galeria</h1>

                <div className="photo_img_4"></div>
            </section>
        </header>
    )
}
export default Photo;