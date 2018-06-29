import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="site-header sticky-top">
    <div className="row no-gutters">
      <div className="col">
      <div className="d-flex flex-column justify-content-between justify-content-center">
        <Link to="/" className="logo py-3 px-2">
          Drink Worcester Beer!
        </Link>
      </div>
      </div>
      <div className="col-md-auto">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <Link className="p-4 d-none d-md-inline-block" to="/explore">Explore</Link>
          <Link className="p-4 d-none d-md-inline-block" to="/events">Events</Link>
          <Link className="p-4 d-none d-md-inline-block" to="/contribute">Contribute</Link>
          <Link className="p-4 d-none d-md-inline-block" to="/merch">Merch</Link>
          <Link className="p-4 d-none d-md-inline-block" to="/login">Login</Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
