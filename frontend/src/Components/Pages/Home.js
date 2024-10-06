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
<section>
  <Aboutsection/>
</section>
<section>
  <div className='corevalues'>

<h3 className='ml-5'>CORE VALUES</h3>
  </div>

  <Corevalues/>
</section>

<section>
  <Footer/>
</section>

 </>
  )
}

export default Home