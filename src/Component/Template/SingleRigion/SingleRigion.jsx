import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CountryCard from '../CountryCard/CountryCard';

const SingleRigion = () => {
    const allCountries = useLoaderData();
    console.log(allCountries);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Phone</th>
                            <th>Languages</th>
                            <th>Currency</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
            
                        allCountries.map(country=> <CountryCard
                            key={country.latlng}
                            country={country}
                            ></CountryCard>)
                    }
                        
                        
                    </tbody>
                    {/* foot */}
                </table>
            </div>
           
        </div>
    );
};

export default SingleRigion;