import React from 'react'
import Link from 'gatsby-link'
import './myWorks.scss'

const MyWorks = ({imagesList}) => (
    <section className='myworks-container bg-dark-custom'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className='myworks-container__title'>
                        My Works.
                    </h2>
                    <p className='myworks-container__description'>A photo — 
                    is a search for what can get into the frame. 
                    When you limit events to a frame — 
                    You change these events.</p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="myworks-container__photo-grid">
                {imagesList.map( ({node})=> (
                    <figure className={node.ratio} key={node.src} >
                        <img src={node.src} alt=""/>
                    </figure>
                ))}
            </div>
            <a href="#" className="myworks-container__link">Explore gallery</a>
        </div>
    </section>
)

export default MyWorks

export const ImageGalleryFragment = graphql`
  fragment ImageGalleryGet on Items2Json {
          src,
          ratio,
          info {
            make,
            model,
            speed,
            aperture,
            focal,
            iso
          }
  }
`