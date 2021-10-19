import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';

const DoctorsTeam = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('./fake-service-data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[]);

    const specialTeam = services.slice(0,4);
    // console.log(specialTeam);
    return (
        <div className="mb-5">
            <h1 className="text-center my-5">Meet <span className="text-info">Our Specialists</span></h1>
            <Container>
                <Row sm={12} md={4} className="g-4">
                    {
                        specialTeam.map(service => <Doctors key={service.id}
                        doctors={service.doctors}
                        ></Doctors>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default DoctorsTeam;