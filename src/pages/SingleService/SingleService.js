import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SingleService = (props) => {
    // console.log(props.service);
    const { id,serviceName,description,imgUrl } = props.service;
    return (

        <div className="col-md-4 col-12 mb-5">
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={imgUrl} alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h3>{serviceName}</h3>
                    <div className="text-start ps-2 mb-2">
                        {description.slice(0,100)}
                    </div>
                    <Link to={`/detailService/${id}`}>
                        <Button variant="primary">Service Details... </Button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SingleService;