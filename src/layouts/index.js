import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
// import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Drink beer from Worcester, Massachuetts and enjoy life' },
        { name: 'keywords', content: 'beer, worcester, massachusetts, craft beer, ipas, stouts, saisons, sessions' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="container">
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
