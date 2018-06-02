import React from 'react'
import Link from 'gatsby-link'
import './contact.scss';
import { relative } from 'path';

const Contact = () => (
  <div className="contact-container bg-dark-custom">
    <div className='container'>
      <h2 className='contact-container__title'>
        Let's chat
      </h2>
      <div className='row'>
        <div className="col-sm-3">
          <p className='contact-container__description'>
          A photo - is search for what can get into the frame.
          When you limit events to a frame - You can change these events
          </p>
          <div className='contact-container__message'>
            <a href="#" className='contact-container__link'>Leave a Message</a>
          </div>
        </div>
        <div className="col-sm-9">
          <div style={{ WebkitFilter: 'grayscale(100%)', filter: 'grayscale(100%)'}}>
            <iframe className='contact-container__iframe-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2056651405983!2d-89.24705244814774!3d13.708960698188275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633049860edaef%3A0xa27cb10dfa2dab79!2sElaniin+Digital+-+Agencia+Digital!5e0!3m2!1sen!2ssv!4v1527913888702" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
