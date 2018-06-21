import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="container">
    <h1>Lorem Ipsum Dolor Sit Amet</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet arcu placerat, 
      venenatis mauris sit amet, lacinia diam. Nam pellentesque sit amet elit vitae ultrices. 
      Maecenas ante felis, consectetur et erat nec, fermentum varius lacus. Morbi risus ipsum, 
      elementum ut gravida volutpat, iaculis vel ipsum. Etiam vestibulum non enim et finibus.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
