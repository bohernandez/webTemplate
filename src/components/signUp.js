import React from 'react'
import Link from 'gatsby-link'
import './signUp.scss'

const SignUp = () => (
    <div className='signup-container bg-dark-custom text-center'>
        <h2 className='signup-container__title'>
            Sign up for our newsletter
            to receive special offers.
        </h2>
        <div className='signup-container__vertical-line'></div>
        <form action="#" className="signup-container__email-form form-inline my-2 my-lg-0">
            <input className="bg-dark-custom" type="email" placeholder="Enter your email address" aria-label="Search" required />
            <button className="btn-outline-success my-2 my-sm-0 bg-dark-custom" type="submit">ok</button>
        </form>
    </div>
)

export default SignUp
