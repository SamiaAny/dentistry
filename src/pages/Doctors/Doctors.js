import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Doctors = (props) => {
    const {user} = useAuth();
    const { name, designation, doctorUrl } = props.doctors;

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={doctorUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {designation}
                    </Card.Text>
                </Card.Body>
                {user?.email && <Link to="/appointment"><Button varient="primary" className="w-100">Make appointment</Button></Link>}
            </Card>
        </Col>
    );
};

export default Doctors;