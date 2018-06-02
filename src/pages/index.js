import React from 'react'
import Link from 'gatsby-link'
import SignUp from '../components/signUp'
import './index.scss'

const IndexPage = () => (
  <div>
    <header className="hero-container">
      <div className='container'>
        <h6 className='hero-container__intro'>Introduccion</h6>
        <h2 className='hero-container__title'>Photography is 
          a journey</h2>
        <p className="hero-container__description">
          My advice to everyone is to create a life, not to consume it. I'm curious to
          see how many emotions now appear in things created with the help of 
          complex technologies. They are so loaded with different feelings that it
          is no longer possible to separate emotions and work from the
          instrument on which it is done.
        </p>
        <a href='#' className='hero-container__link'>Discover</a>
      </div>
    </header>

    <section>
      <div>About Us</div>
    </section>
    
  </div>
)

export default IndexPage
