import React from 'react';
import './Banner.css';
import banner1 from '../../images/banner/pexels-gustavo-fring-4173251.jpg';
import banner2 from '../../images/banner/banner_2.jpg';
import banner3 from '../../images/banner/banner_3.jpg';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <div className="background">
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h5>Welcome to Dentistry</h5>
                        <p>Always try to give best treatment</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="background">
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h5>ModernTechnology with Professional Doctors</h5>
                        <p>Always try to give best treatment</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="background">
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h5>Keep regular checkup for refreshing smile</h5>
                        <p>Always try to give best treatment</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <Container fluid>
                    <Row>
                        <Col md={4} className="border bg-img">
                            <div className="p-4 text-white">
                                <h2>Find Consultant...</h2>
                                <p>Free consultation with our trusted doctors and get the best recomendations</p>
                            </div>
                        </Col>
                        <Col md={4} className="border bg-img">
                            <div className="p-4 text-white">
                                <h2>Appointment...</h2>
                                <p>You can make appointment on online for yourself or your children and your lovely family</p>
                            </div>
                        </Col>
                        <Col md={4} className="border bg-img">
                            <div className="p-4 text-white">
                                <h2>Helpline...</h2>
                                <p>Contact us, if you have any query.We will try to response as early as possible</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;