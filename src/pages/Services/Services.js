import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
// import img from '../../images/services/pexels-andrea-piacquadio-3779711.jpg';
import './Services.css';


const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('./fake-service-data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <div className="body-bg">
            <h2 className="text-center my-5">Services <span className="text-info">We Provide</span>
            </h2>
            {/* ---------- */}
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <SingleService 
                            key={service.id}
                            service={service} ></SingleService>)
                    }
                    {/* <div className="col-md-4">
                        <div className="a-box">
                            <div className="img-container">
                                <div className="img-inner">
                                    <div className="inner-skew">
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-container">
                                <h3>A blue bird</h3>
                                <div>
                                    This a demo experiment to skew image container. It looks good.
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Services;