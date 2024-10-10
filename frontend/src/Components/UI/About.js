import React from 'react'
import { Container ,Row ,Col } from 'reactstrap'
import '../styles/aboutsection.css';

const Aboutsection = () => {
  return (
  <section className='about-section'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
             <div className='about-section-content'>
              <h5 className='section-subtitle'>
              WELCOME TO TENDERSURE™
                </h5>  
                <h3 className='section-title'>
                WELCOME TO TENDERSURE™
                The Next Generation of Procurement
                </h3>
                <h3 className='section-title'>
                  VISION
                </h3>
                <p className='section-description'>
                Our Vision is to be the preferred solution for eProcurement in Africa.
                </p>
 
                </div>   
                 </Col>
            <Col lg='6' md='6'> 
            <div>
              <p>
              More and more leading organisations are playing the game by the rules, meaning there is no way back for the ones who are not yet using the system. Tendersure clears the air in the misty haze around tenders and the procurement thereof.
              </p>
              <h3 className='section-title'>
              MISSION
              </h3>
              <p className='section-description'>Our Mission is to optimize procurement practices for organizations across Africa through automation to enhance efficiency, integrity and transparency</p>
             
            </div>

            </Col>

        </Row>
    </Container>
  </section>
  )
}

export default Aboutsection