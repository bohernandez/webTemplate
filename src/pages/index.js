import React from 'react'
import Link from 'gatsby-link'
import SignUp from '../components/signUp'
import './index.scss'

const IndexPage = () => (
  <div>
    <header className="hero-container">
      <div className='container'>
        <div className='hero-container__wrap'>
          <h6 className='hero-container__intro'>Introduccion</h6>
          <h2 className='hero-container__title'>Photography is <br />
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
      </div>
      <div className='hero-container__social'> 
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className="hero-container__anchor">
        <a href="#about" className="hero-container__anchor-link"><span>Explore More</span></a>
      </div>
    </header>

    <section>
      <div id='about'>About Us</div>
    </section>
    <SignUp />
  </div>
)

export default IndexPage
