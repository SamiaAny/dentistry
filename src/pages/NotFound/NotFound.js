import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/undraw_page_not_found_su7k (1).svg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container">
            <div className="error mt-4">
                <img className="w-100" src={notFoundImg} alt="" />
                <Link to="/"><button className="btn btn-info mt-5">Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;