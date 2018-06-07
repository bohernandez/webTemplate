import React from 'react';
import Swiper from 'react-id-swiper';
import './testimonials.scss'

class Testimonials extends React.Component {
  render() {
    const { itemsList } = this.props;
    const params = {
        pagination: {
          el: '.test-swiper__custom-pagination',
          type: 'fraction',
        },     
        grabCursor: true,
        slidesPerView: 'auto',
        breakpoints: {
            // when window width is <= 768px
            768: {
              slidesPerView: 1,
              spaceBetween: 100
            }
        },
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.test-swiper__link-next',
          prevEl: '.test-swiper__link-prev',
        },
        spaceBetween: 140,        
        renderPrevButton: () => <div className="test-swiper__link-prev">Prev</div>,
        renderNextButton: () => <div className="test-swiper__link-next">Next</div>,
        containerClass: 'swiper-container test-swiper'
      };

    return (
        <Swiper {...params}>
            {itemsList.map( ({node})=> (
                    <div key={node.id} >
                        <div className="test-swiper__number">
				            <span>0{node.id}.</span>
				        </div>                        
                        <div className="test-swiper__box">
                            <div className="test-swiper__img">
                                <img src={node.avatar} alt={node.name + node.lastname} />
                            </div>
                            <div className="test-swiper__info">
                                <h3 className="test-swiper__author">{node.name} <strong>{node.lastname}</strong></h3>
                                <h4 className="test-swiper__organization">{node.organization}</h4>
                            </div>
				        </div>
                        <div className="test-swiper__comment">
				            <p>{node.comment}</p>
                        </div>
                    </div>
            ))}
        </Swiper>
    )
  }
}

export default Testimonials;


export const TestimonialsFragment = graphql`
  fragment TestimonialsGet on ReviewsJson {
        id,
        avatar,
        name,
        lastname,
        organization,
        comment,
  }
`