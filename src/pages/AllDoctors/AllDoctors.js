import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';

const AllDoctors = () => {
    const [serviceItem,setServiceItem] = useState([]);

    useEffect(()=>{
        fetch('./fake-service-data.json')
            .then(res => res.json())
            .then(data => setServiceItem(data))
    },[])
    return (
        <div>
            <h1 className="text-center my-5">Meet <span className="text-info">Our Specialists</span></h1>
            <Container className="mb-4">
                <Row sm={12} md={3} className="g-4">
                    {
                        serviceItem.map(service => <Doctors key={service.id}
                        doctors={service.doctors}
                        ></Doctors>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllDoctors;