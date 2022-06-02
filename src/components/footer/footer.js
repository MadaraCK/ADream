import React from "react";
import './footer.scss'

function Footer() {
    return (
        <div className="footer_bgc">
            <section className="container">
                <section className="box_footer">
                    <div className="first_section_footer">
                        <h1 className="logo_footer">logo</h1>
                        <p className="adres_footer">ul.Towarowa 5/6</p>
                        <p>31-000 Kraków</p>
                        <p className="number_footer">+48 999 999 999</p>
                        <p className="email_footer">email@email.com</p>
                        <p className="policy_footer">Polityka prywatności</p>
                    </div>
                    <div className="secondary_section_footer">
                        <div className="left_menu">
                            <p>Strona głowna</p>
                            <p className="space_footer">Poznaj Przestrzeń</p>
                            <p>Oferta</p>
                        </div>
                        <div className="right_menu">
                            <p>Lokalizacja</p>
                            <p className="space_footer">Własne biuro</p>
                            <p>Kontakt</p>
                        </div>
                    </div>
                    <div className="logo_busines">
                        <span className="logo_group"></span>
                        <p className="logo_busines_design">Proudly designed by</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Footer;