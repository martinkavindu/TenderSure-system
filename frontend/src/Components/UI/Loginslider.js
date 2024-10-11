
import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../styles/loginslider.css'

const Loginslider = () => {
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
        <h4 className='text-light mb-3'>
           Our promises
        </h4>
        <h6 className='text-light mb-4' >
             Effieciency,Transparency and Savings</h6>
         
    </div>
    </Container> 
</div>
<div className='slider-item slider-item-02 mt-0'>
   <Container>
    <div className='slider-content'>
  
    </div>
    </Container> 
</div>
<div className='slider-item slider-item-03 mt-0'>
   <Container>
    <div className='slider-content'>
        
    </div>
    </Container> 
</div>
</Slider>
  )
}

export default Loginslider
