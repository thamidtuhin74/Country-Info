import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
    // if(country?.currencies){
    //     const currencyEntries  = Object.entries(country?.currencies);
    // }
    // if(country?.languages){
    //     const languageEntries  = Object.entries(country?.languages);
    // }
    const currencyEntries  = country?.currencies ? Object.entries(country.currencies) : [];
    const languageEntries  = country?.languages ? Object.entries(country.languages) : [];
    const countryName = country?.name?.common;
    
    // console.log(languageEntries)
    return (
        <tr>
                <td>
                    <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                        <img
                            src={country?.flags?.svg}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{countryName}</div>
                        <div className="text-sm opacity-50">{country?.name?.official}</div>
                    </div>
                    </div>
                </td>
                <td>
                    {country?.capital}
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                
                <td>{country?.idd?.root}{country?.idd?.suffixes?.[0]}</td>
                <td>{languageEntries.length > 0 ? languageEntries.map(x => x[1]).join(', ') : ''}</td>
                <td>{currencyEntries.length > 0 ? `${currencyEntries[0][1]?.name} (${currencyEntries[0][1]?.symbol})` : ''}</td>
                <th>
                    <Link to={`/country-details/${countryName}`}>
                    <button className="btn btn-ghost btn-xs">details</button></Link>
                </th>
            </tr>
    );
};

export default CountryCard;