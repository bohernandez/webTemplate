import React from 'react'
import Link from 'gatsby-link'
import './pricing.scss'

const Pricing = ({pricingList}) => (
    <section className='pricing-container bg-dark-custom'>
        <div className="container-fluid">
            <div className="row">

                {pricingList.map( ({node})=> (
                    <div className="col-lg-3 col-md-6 col-sm-6 pricing-box" 
                    key={node.id}
                    style={{ backgroundImage: 'url('+ node.url +')'  }}>
                        <h4 className="pricing-title">{node.title}</h4>
                        <div className="pricing-item">
					        <div className="pricing-item__name">Photos</div>
					        <div className="pricing-item__sub">{node.photos}</div>
				        </div>
                        <div className="pricing-item">
					        <div className="pricing-item__name">Processing</div>
					        <div className="pricing-item__sub">{node.processing}</div>
				        </div>
                        <div className="pricing-item">
					        <div className="pricing-item__name">Type of camera</div>
					        <div className="pricing-item__sub">{node.camera}</div>
				        </div>
                        <div className="pricing-item">
					        <div className="pricing-item__name">Resolution</div>
					        <div className="pricing-item__sub">{node.resolution}</div>
				        </div>
                        <div className="pricing-item">
					        <div className="pricing-item__name">Term</div>
					        <div className="pricing-item__sub">{node.term}</div>
				        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
)

export default Pricing

export const PricingFragment = graphql`
  fragment PricingList on PricingJson {
    id,
    url,
    title,
    photos,
    processing,
    camera,
    resolution,
    term,
    price,
    currency
  }
`