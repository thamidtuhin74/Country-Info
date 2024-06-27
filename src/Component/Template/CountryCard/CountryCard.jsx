import React from 'react';

const CountryCard = ({country}) => {
    const currencyEntries  = Object.entries(country.currencies);
    const languageEntries  = Object.entries(country.languages);
    console.log(languageEntries)
    // const {code , currencry}
    return (
        <tr>
                <td>
                    <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                        <img
                            src={country.flags.svg}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{country.name.common}</div>
                        <div className="text-sm opacity-50">{country.name.official}</div>
                    </div>
                    </div>
                </td>
                <td>
                    {country.capital}
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                
                <td>{country.idd.root}{country.idd.suffixes[0]}</td>
                <td>{languageEntries.map(x=>x[1]).join(', ')}</td>
                <td>{currencyEntries[0][1].name}({currencyEntries[0][1].symbol})</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
    );
};

export default CountryCard;