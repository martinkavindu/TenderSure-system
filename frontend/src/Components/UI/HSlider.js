import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../styles/slider.css';

const HSlider = () => {
    const settings = {
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite:true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll:1,
        pauseOnHover:false,
    }
  return (
<Slider {...settings} className='hero-slider'>
<div className='slider-item slider-item-01 mt-0'>
   <Container>
   <div className='slider-content'>
        <h4 className='cloud'>
        A CLOUD BASED
        </h4>
        <p class="header-text">E-PROCUREMENT SOLUTION</p>
<p class="sub-header-text">
  Promoting good governance, transparency and integrity in the procurement process.
</p>

<a href="http://www.tendersure.co.ke/available-jobs/" target="_self" rel="nofollow" class="available-jobs-link">
  Available Jobs
</a>

<a href="http://www.tendersure.co.ke/contact-us/" target="_self" rel="nofollow" class="contact-us-link">
  Contact Us
</a>


           
    </div>
    </Container> 
</div>
<div className='slider-item slider-item-02 mt-0'>
   <Container>
    <div className='slider-content'>
        <h4 className='cloud'>
        A CLOUD BASED
        </h4>
        <p class="header-text">E-PROCUREMENT SOLUTION</p>
<p class="sub-header-text">
  Promoting good governance, transparency and integrity in the procurement process.
</p>

<a href="http://www.tendersure.co.ke/available-jobs/" target="_self" rel="nofollow" class="available-jobs-link">
  Available Jobs
</a>

<a href="http://www.tendersure.co.ke/contact-us/" target="_self" rel="nofollow" class="contact-us-link">
  Contact Us
</a>


           
    </div>
    </Container> 
</div>

</Slider>
  )
}

export default HSlider