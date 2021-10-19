import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppointmentBtn.css';

const AppointmentBtn = () => {
    return (
        <div className="make-appointment-part">
            <Container fluid className="pt-3">
                <div className="text-center text-white">
                    <h2>Professional Dentists & Innovative Technology</h2>
                    <p>Make your Appointment or call +86 0018233454</p>
                    <Link to="/appointment"><Button variant="light">Make your appointment</Button></Link>
                </div>
            </Container>
        </div>
    );
};

export default AppointmentBtn;