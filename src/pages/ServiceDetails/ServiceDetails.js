import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './serviceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [item,setItem ] = useState([]);

    useEffect(()=>{
        fetch('/fake-service-data.json')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    console.log(item);

    const selectedService = item.filter(sd => sd.id === serviceId);
    console.log('select',selectedService);

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col md={5} className="mb-4">
                        <img className="w-100" src={selectedService[0]?.imgUrl} alt="" />
                    </Col>
                    <Col md={7}>
                        <h2>{selectedService[0]?.serviceName}</h2>
                        <p>{selectedService[0]?.description}</p>
                        <h4>Related doctor</h4>
                        <div className="d-flex resize-img">
                            <img src={selectedService[0]?.doctors['doctorUrl']} alt="" />
                            <h5 className="my-auto ms-2">{selectedService[0]?.doctors['name']}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;