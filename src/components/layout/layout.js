
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"
import Index from "../header/index"
import Busines from "../about_busines/busines";
import Benefits from "../benefits/benefits";
import Office from "../own_office/office";
import News from "../news/news";
import Photo from "../businesimg/photo";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <div>
    <Index/>
    <Busines/>
    <Benefits/>
    <Office/>
    <News/>
    <Photo/>
    <Footer/>
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
