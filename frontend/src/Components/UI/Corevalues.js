import React from 'react';
import '../styles/corevalues.css';
import { Row, Col, Container } from 'reactstrap';
import CorevData from '../../assets/data/corevaluedata';

const Corevalues = () => {
  return (
    <Container>
    <h4 className='headerc'> Core Values</h4>
    <Row>
      {CorevData.map(item => (
        <Corevalue item={item} key={item.id} />
      ))}
    </Row>
    </Container>
  );
};

const Corevalue = ({ item }) => (
  <Col lg='3' md='3' className='mb-3'>
    <div className='service-item mb-3'>
      <span className='mb-3 d-inline-block'>
        <img src={item.image} className='icons' alt={item.title} />
        <h6 className='titlec'>{item.title}</h6>
        <p className='section-descriptionc' dangerouslySetInnerHTML={{ __html: item.description }} />
      </span>
    </div>
  </Col>
);

export default Corevalues;
