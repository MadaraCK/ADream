import React from "react";
import './news.scss'

function News() {
    return (
        <div className="container">
            <section className="news_box">
                <h1 className="news_h1">Aktualności</h1>
                <div className="box_news_img">
                    <div className="img_news"></div>
                    <p className="date">01.01.2021</p>
                    <p className="lorem_text_news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum.</p>
                    <p className="more_news">Więcej</p>
                </div>
                <div className="box_news_img">

                    <div className="img_news2"></div>
                    <p className="date">01.01.2021</p>
                    <p className="lorem_text_news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?</p>
                    <p className="more_news">Więcej</p>
                </div>
                <div className="box_news_img">

                    <div className="img_news3"></div>
                    <p className="date">01.01.2021</p>
                    <p className="lorem_text_news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta.</p>
                    <p className="more_news">Więcej</p>
                </div>
            </section>
        </div>
    )
}

export default News;