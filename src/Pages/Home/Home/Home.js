import React from 'react';
import AllTitle from '../../../Hooks/AllTitle';
import AllGallery from '../Gallery/AllGallery';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import InternationalCenters from '../InternationalCenters/InternationalCenters';
import MedicalValue from '../MedicalValue/MedicalValue';
import Overview from '../Overview/Overview';

const Home = () => {
    AllTitle('Home')
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Overview></Overview>
            <AllGallery></AllGallery>
            <InternationalCenters></InternationalCenters>
            <MedicalValue></MedicalValue>

        </div>
    );
};

export default Home;