import React from 'react';
import '../styles/corevalues.css';
import { Col } from 'reactstrap';
import CorevData from '../../assets/data/corevaluedata';

const Corevalues = () => {
  return (
    CorevData.map(item => (
      <Corevalue item={item} key={item.id} />
    ))
  );
};

const Corevalue = ({ item }) => (
  <Col lg='4' md='4' className='mb-3'>
    <div className='service-item mb-3'>
      <span className='mb-3 d-inline-block'>
        <img src={item.image} className='icons' alt={item.title} />
        <h6>{item.title}</h6>
      
        <p className='section-description' dangerouslySetInnerHTML={{ __html: item.description }} />
      </span>
    </div>
  </Col>
);

export default Corevalues;
