import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopRegions = () => {
    // const [regionName, setRegionName] = useState('')
    return (
        <div className='my-[80px]'>
            <h2 className='text-3xl font-bold'>Top Regions</h2>
            <div className='my-[20px] grid grid-cols-3 gap-4'>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                        src="\img\america.jpg"
                        alt="America" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        America
                        <div className="badge badge-secondary">Top</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        
                    
                        <Link to={`/region/america`}><div className="badge badge-outline btn">Learn more</div></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                        src="\img\europe.jpg"
                        alt="Europe" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Europe!
                        <div className="badge badge-secondary">Super</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <Link to={'/region/europe'}><div className="badge badge-outline btn">Learn more</div></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                        src="\img\Aisa.jpg"
                        alt="Asia" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Asia!
                        <div className="badge badge-secondary">Hot</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <Link to={`/region/asia`}><div className="badge badge-outline btn">Learn more</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRegions;