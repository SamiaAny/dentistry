import React from 'react';
import Banner from '../../components/Banner/Banner';
import AppointmentBtn from '../../components/Shared/AppointmentBtn/AppointmentBtn';
import About from '../About/About';
import DoctorsTeam from '../DoctorsTeam/DoctorsTeam';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <DoctorsTeam></DoctorsTeam>
            <AppointmentBtn></AppointmentBtn>
        </div>
    );
};

export default Home;