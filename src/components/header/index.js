import React from 'react';
import './index.scss'

function Index() {
    return (
        <section className="bgc">
            <header className="container_index">
                <section className="navigation">
                    <div className="nav_logo_box">
                        <h1 className="nav_logo">logo</h1>
                    </div>
                    <div className="menu">
                        <p>Poznaj przestrzeń</p>
                        <p className="menu_offer">Oferta</p>
                        <p>Lokalizacja</p>
                        <p className="menu_own_office">Własne biuro</p>
                        <p>Kontakt</p>
                    </div>
                    <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27">
                            <g id="Group_608" data-name="Group 608" transform="translate(-1666.001 -66)">
                                <g id="Group_142" data-name="Group 142" transform="translate(1666.474 66)">
                                    <rect id="Rectangle_99" data-name="Rectangle 99" width="28" height="27"
                                          transform="translate(-0.474)" fill="#fff"/>
                                </g>
                                <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f"
                                      d="M10.075,9.514l.47-3.061H7.607V4.467A1.531,1.531,0,0,1,9.333,2.813h1.335V.207A16.283,16.283,0,0,0,8.3,0c-2.419,0-4,1.466-4,4.12V6.453H1.609V9.514H4.3v7.4H7.607v-7.4Z"
                                      transform="translate(1674.168 71.427)"/>
                            </g>
                        </svg>
                        <svg className="iq_ico" xmlns="http://www.w3.org/2000/svg" width="27" height="27"
                             viewBox="0 0 27 27">
                            <g id="Group_607" data-name="Group 607" transform="translate(-0.134)">
                                <rect id="Rectangle_99" data-name="Rectangle 99" width="27" height="27"
                                      transform="translate(0.134)" fill="#fff"/>
                                <g id="Icon_feather-instagram" data-name="Icon feather-instagram"
                                   transform="translate(5.617 5.617)">
                                    <path id="Path_425" data-name="Path 425"
                                          d="M6.975,3h7.95A3.975,3.975,0,0,1,18.9,6.975v7.95A3.975,3.975,0,0,1,14.925,18.9H6.975A3.975,3.975,0,0,1,3,14.925V6.975A3.975,3.975,0,0,1,6.975,3Z"
                                          transform="translate(-3 -3)" fill="none" stroke="#000" stroke-linecap="round"
                                          stroke-linejoin="round" stroke-width="2"/>
                                    <path id="Path_426" data-name="Path 426"
                                          d="M18.391,14.649a3.18,3.18,0,1,1-2.679-2.679A3.18,3.18,0,0,1,18.391,14.649Z"
                                          transform="translate(-7.26 -7.199)" fill="none" stroke="#000"
                                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    <path id="Path_427" data-name="Path 427" d="M26.25,9.75h0"
                                          transform="translate(-13.927 -6.172)" fill="none" stroke="#000"
                                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </section>
                <section className="box_contact_lorem">
                    <div className="about_busines">
                        <h1 className="busines_logo">Firma</h1>
                        <p className="busines_lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                            velit?</p>
                    </div>
                    <div className="contact">
                        <div className="container_contact">
                            <div className="text_contact">
                                <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <h3>Zostaw kontakt, zadzwonimy do Ciebie</h3>
                            </div>
                            <div className="form_contact">
                                <div className="input_box">
                                    <input className="input_contact" type="text" placeholder="Imie i nazwisko"/>
                                    <input className="input_contact" type="text" placeholder="Telefon"/>
                                    <input className="input_contact" type="text" placeholder=" Email"/>
                                    <input className="input_contact" type="text" placeholder="lorem ipsum lorem ipsum"/>

                                </div>
                                <div className="checkbox_text_agree">
                                    <input className="checkbox_agree" type="checkbox"/>
                                    <p className="agree_text_button">Wyrażam dobrowolną zgodę na przetwarzanie moich
                                        danych
                                        osobowych więcej...</p>
                                </div>
                                <button className="button_contact">Wyślij</button>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

        </section>
    );
}

export default Index;