import React from 'react';
import Hero from '../../Section/Hero/Hero';
import { useLoaderData } from 'react-router-dom';
import CountryCard from '../../Template/CountryCard/CountryCard';
import TopRegions from '../../Section/Hero/TopRegions/TopRegions';
import Experiance from '../../Section/Experiance/Experiance';
import Review from '../../Section/Review/Review';

const Home = () => {

    const Countries = useLoaderData();
    console.log(Countries);
    return (
        <div className=''>
            <Hero></Hero>
            <TopRegions></TopRegions>
            <Experiance></Experiance>
            <Review></Review>
        </div>
    );
};

export default Home;