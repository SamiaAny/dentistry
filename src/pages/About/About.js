import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about_img from '../../images/pexels-rodnae-productions-6129507.jpg';

const About = () => {
    return (
        <div>
            <h2 className="text-center my-5">Who <span className="text-info">We Are</span></h2>
            <Container className="mb-5">
                <Row>
                    <Col sm={12} md={6}>
                        <img src={about_img} alt="" className="w-100 img-fluid" />
                    </Col>
                    <Col sm={12} md={6}>
                        <h3>About Ourself...</h3>
                        <p>
                        Dentistry is the renowned dental care hospital with a specialized, Dental implant, Orthodontics, Laser Dentistry, Endodontic, Pediatric operative, Prosthodontic, oral surgery, and Orthodontic Center.Established in 2010. From that time to till now, Dentistry Dental care is a center of excellence and house of trust in the section of dental practice. Our philosophy is to provide excellence in dental care, with a focus on patient comfort, satisfaction, and dental health.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;