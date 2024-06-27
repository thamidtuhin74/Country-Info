import React from 'react';

const AllCountries = () => {
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
}
export default AllCountries;