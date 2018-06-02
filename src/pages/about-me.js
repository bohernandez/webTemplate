import React from 'react'
import Link from 'gatsby-link'
import SignUp from '../components/signUp'

const AboutMe = () => (
  <div>
    <h1>About Me</h1>
    <p>This text must be about me</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
    <SignUp />
  </div>
)

export default AboutMe
