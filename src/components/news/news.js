import React from "react";
import './news.scss'

function News() {
    return (
        <div className="container">
            <div className="news_box_h1">
                <h1 className="news_h1">Aktualności</h1>
            </div>
            <section className="news_box">
                <div className="box_news_img">
                    <div className="img_news img_news_all"></div>
                    <p className="date">01.01.2021</p>
                    <p className="lorem_text_news">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="more_news">Więcej</p>
                </div>
                <div className="box_news_img">

                    <div className="img_news2 img_news_all"></div>
                    <p className="date">01.01.2021</p>
                    <p className="lorem_text_news">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="more_news">Więcej</p>
                </div>
                <div className="box_news_img">

                    <div className="img_news3 img_news_all"></div>
                    <p className="date">01.01.2021</p>
                    <p className="lorem_text_news">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="more_news">Więcej</p>
                </div>
            </section>

        </div>
    )
}

export default News;