import React from 'react';

const Hero = () => {
    return (
        <div className='hero-css'>
            <div
                className="hero min-h-[60vh]"
                style={{
                    backgroundImage: "url(https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_1280.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-0.50"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to World Explorer</h1>
                    <p className="mb-5">
                    Discover detailed information about countries around the world. From history and culture to geography and politics, explore the rich tapestry of global diversity. Start your journey now!
                    </p>
                    <button className="btn btn-primary">Search for a Country</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;