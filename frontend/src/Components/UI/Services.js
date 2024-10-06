import React from "react";
import "../styles/Services.css";
import image5 from '../../assets/images/about.jpg';

export const Services = () => {
  return (
<section className='about-section'>
    <Container>
        <Row>

        <Col lg='6' md='6'> 
            <div className='about-img'>
              <img src={image5} alt='' className='w-100' style={{borderRadius:'5px'}}/> 
            </div>

            </Col>

            <Col lg='6' md='6'>
             <div className='about-section-content'>
              <h4 className='section-subtitle'>
               SOLUTION OVERVIEW
                </h4>  
                <h2 className='section-title'>
                What We Offer to Our Customers
                </h2>
                <p className='section-description'>
                TenderSure™ is a cloud based eProcurement solution that enhances efficiency, transparency and integrity in the source to procure processes in procurement. Tendersure™ is a highly traceable and auditable system, which helps to combat corruption in procurement.
                </p>
                 <div className='about-section-item d-flex align-items-center'>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  We are creating a comprehensive mobility platform for getting bodaboda rider to save Time

                    </p>  
                 </div>
                 
                 <div className='about-section-item d-flex align-items-center'>
                    <h5>Why Choose Tendersure</h5>
                  <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-check-line" style={{color:"green"}}></i>
                  Security
                    </p> 

                    <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-check-line" style={{color:"green"}}></i>
                  Bespoke Evaluation
                    </p>
                    
                    <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-check-line" style={{color:"green"}}></i>
                  Quality Assurance
                    </p>
                    
                    <p className='section-description d-flex align-items-center gap-2'>
                  <i class="ri-check-line" style={{color:"green"}}></i>
                  User-friendly
                    </p>

                 </div>
                </div>   
                 </Col>
        

        </Row>
    </Container>
  </section>
  );
};
