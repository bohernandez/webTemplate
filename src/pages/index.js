import React from 'react'
import Link from 'gatsby-link'
import SignUp from '../components/signUp'
import MyWorks from '../components/myWorks'
import Counters from '../components/counters'
import Testimonials from '../components/testimonials'

import './index.scss'
import helloImage from '../images/deer-wallpaper.jpg';

const IndexPage = ({data}) => (
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
    <section className="hello-container bg-dark-custom">
      <div className="container">
        <div className="hello-container__image-box">
          <img src={helloImage} />
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 ">
            <h2 className="hello-container__title">
              Hello.
            </h2>
            <p className="hello-container__quote">
              All that we do is work on the style of life, on "being." The object as such is not very interesting. I wonder how people will live with him, what metamorphoses he will undergo in the house. I always liked very simple things. In all. Doing simple things is the most difficult thing. If we talk about simplicity, then it is a synthesis.
            </p>
            <div className="hello-container__author">- Edward Oliver</div>
          </div>
        </div>
      </div>
    </section>

    <MyWorks imagesList={data.allItems2Json.edges} />

    <Counters />

    <Testimonials />
    
    <SignUp />
  </div>
)

export default IndexPage

export const query = graphql`
  query ImageGalleryQuery {
    allItems2Json {
      edges {
        node {
          ...ImageGalleryGet
        }
      }
    }
  }
`
