import React from 'react'
import Link from 'gatsby-link'
import './signUp.scss'

const SignUp = () => (
    <div className='signup-container bg-dark'>
        <h2 className='signup-container__title'>
            Sign up for our newsletter
            to receive special offers.
        </h2>
        <div className='signup-container__vertical-line'></div>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="email" placeholder="Enter your email address" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">ok</button>
        </form>
    </div>
)

export default SignUp
