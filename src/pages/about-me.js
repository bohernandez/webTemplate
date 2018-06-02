import React from 'react'
import Link from 'gatsby-link'
import SignUp from '../components/signUp'

import './about-me.scss'


const AboutMe = () => (
  <div>
    <section className="quote-container bg-dark-custom">
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 quote-container__wrap'>

            <h2 className='quote-container__text'>Photography —is the most democratic of all arts.</h2>

          </div>
        </div>
      </div>
    </section>


    <section className="video-container bg-dark-custom">
      <iframe className="video-container__iframe" width="560" height="625" src="https://www.youtube.com/embed/hW9PUzl7j9w?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </section>

    <SignUp />
  </div>
)

export default AboutMe
