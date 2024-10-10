import React from 'react'
import Header from '../Header/Header'
import Slider from '../UI/HSlider'
import Aboutsection from '../UI/About'
import Corevalues from '../UI/Corevalues'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
 <>
<Header/>
<section>
  <Slider/>
</section>
<section className='mt-5'>
  <Aboutsection/>
</section>
<section className='mt-5'>


  <Corevalues/>
</section>

<section>
  <Footer/>
</section>

 </>
  )
}

export default Home