import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCountry = () => {
    const CountryDetailsArray = useLoaderData();
    const CountryDetails = CountryDetailsArray[0];
    const border = CountryDetails.border;
    console.log(border);
    return (
        <div>
            <div className="hero min-h-[400px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card bg-base-100 w-md-full shrink-0 shadow-xl">
                        <img src={CountryDetails.flags.png} alt="{CountryDetails.flags.alt}" />
                        {/* <h1 className="text-2xl font-bold">{CountryDetails?.name?.common}</h1> */}

                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">{CountryDetails?.name?.common}</h1>
                        <p className="py-6">
                        {CountryDetails?.name?.official}
                        </p>
                        <p>Capital : {CountryDetails.capital[0]}</p>
                        <p>region : {CountryDetails.region}</p>
                        <p>Area : {CountryDetails.borders.join(', ')}</p>
                        <p>Population : {CountryDetails.population}</p>
                        <p>Borders : {CountryDetails.area}</p> 
                        <p>Start Of Week : {CountryDetails.startOfWeek}</p> 

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleCountry;