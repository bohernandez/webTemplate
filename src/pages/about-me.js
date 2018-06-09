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

    <section className="info-container bg-dark-custom">
      <div className="container">
        <div className="row">
        <div className="col-sm-6 col-md-4">
					<h3 className="info-container__title">Experience.</h3>
				    <ul className="info-container__list list-info list-unstyled">
					    <li><strong>Photo Agency Shutter</strong></li>
						<li>Photographer-intern <br /> 2016–2017</li>
				    </ul>
				    <ul className="info-container__list list-unstyled">
					    <li><strong>Studio e.Oliver</strong></li>
						<li>Photographer-retoucher <br />2017–Present</li>
				    </ul>
				</div>
        <div className="col-sm-6 col-md-4">
					<h3 className="info-container__title">Education.</h3>
				    <ul className="info-container__list list-info list-unstyled">
					    <li><strong>Photography School</strong></li>
						<li>New York Film Academy <br /> 2010–2012</li>
				    </ul>
				    <ul className="info-container__list list-unstyled">
					    <li><strong>Photography Universities</strong></li>
						<li> Bloomfield Hills, <br />MI 2013–2015</li>
				    </ul>
				</div>
        <div className="col-sm-6 col-md-4">
					<h3 className="info-container__title">Equipment.</h3>
				    <ul className="info-container__list list-info list-unstyled">
					    <li><strong>Digital cameras</strong></li>
						<li>Canon EOS 5D Mark IV <br />Sony Alpha A7R II</li>
				    </ul>
				    <ul className="info-container__list list-unstyled">
					    <li><strong>Video camera</strong></li>
						<li>Sony AX53 4K Handycam <br />4K 24p Cinema/60p </li>
				    </ul>
				</div>
        </div>
      </div>
    </section>

    

    <section className="video-container bg-dark-custom">
      <iframe className="video-container__iframe" width="560" height="625" src="https://www.youtube.com/embed/hW9PUzl7j9w?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
    </section>

    <SignUp />
  </div>
)

export default AboutMe
