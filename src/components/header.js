import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="site-header sticky-top py-1">
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <a className="py-4" href="#">
        {siteTitle}
      </a>
      <a className="py-4 d-none d-md-inline-block" href="#">Explore</a>
      <a className="py-4 d-none d-md-inline-block" href="#">Events</a>
      <Link className="py-4 d-none d-md-inline-block" to="/contribute">Contribute</Link>
      <a className="py-4 d-none d-md-inline-block" href="#">Merch</a>
    </div>
  </nav>
)

export default Header
