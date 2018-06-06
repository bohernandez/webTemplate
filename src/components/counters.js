import React from 'react'
import Link from 'gatsby-link'
import './counters.scss'

const Counters = () => (
    <section className='counter-container bg-dark-custom'>
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="counter-container__number">
                        <span>1270</span>
                        <div className="counter-container__legend">CLIENTS</div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="counter-container__number">
                        <span>4357</span>
                        <div className="counter-container__legend">PHOTOS</div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="counter-container__number">
                        <span>634</span>
                        <div className="counter-container__legend">ALBUMS</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Counters