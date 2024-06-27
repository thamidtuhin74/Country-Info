import React from 'react';
import Hero from '../../Section/Hero/Hero';
import { useLoaderData } from 'react-router-dom';
import CountryCard from '../../Template/CountryCard/CountryCard';
import TopRegions from '../../Section/Hero/TopRegions/TopRegions';

const Home = () => {

    const Countries = useLoaderData();
    console.log(Countries);
    return (
        <div>
            <Hero></Hero>
            <TopRegions></TopRegions>
            <div>
                {
                    Countries.map(country=> <CountryCard
                            key={country.latlng}
                            country={country}
                         ></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Home;