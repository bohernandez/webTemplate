import React from 'react';
import Swiper from 'react-id-swiper';
import './testimonials.scss'

class Testimonials extends React.Component {
  render() {
    const params = {
        pagination: {
          el: '.swiper-custom-pagination',
          type: 'fraction',
        },
        effect: 'coverflow',        
        grabCursor: true,
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-link-next',
          prevEl: '.swiper-link-prev',
        },
        renderPrevButton: () => <div className="swiper-link-prev">Prev</div>,
        renderNextButton: () => <div className="swiper-link-next">Next</div>,
      };

    return (
        <Swiper {...params}>
            <div>
                Slide 1<br/><br/><br/><br/>
            </div>
            <div>Slide 2<br/><br/><br/><br/></div>
            <div>Slide 3<br/><br/><br/><br/></div>
            <div>Slide 4<br/><br/><br/><br/></div>
            <div>Slide 5<br/><br/><br/><br/></div>
        </Swiper>
    )
  }
}

export default Testimonials;