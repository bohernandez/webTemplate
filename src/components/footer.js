import React from 'react'
import Link from 'gatsby-link'
import './footer.scss';

const Footer = ({ siteTitle }) => (
    <footer className='main-footer bg-dark pt-4 mt-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h5 className="text-uppercase">Office</h5>
                    <ul className="list-unstyled">
                        <li>
                            756 Livinstone Street,<br />
                            Brokling, NY 11201
                        </li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h5 className="text-uppercase">Get in Touch</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a className="footer__email" href='mailto: work@eoliver.com'>work@eoliver.com </a><br />
                            +1 (00) 123-45-67
                        </li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h5 className="text-uppercase">Social</h5>
                    <ul className="list-unstyled">
                        <li>
                            Connect with me on <a href="#">facebook</a><br />
                            <a href="#">twitter</a> o <a href="#">instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



    </footer>
  
)

export default Footer
