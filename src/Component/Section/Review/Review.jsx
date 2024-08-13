import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div className="w-full review-wrapper md:flex md:flex-row">
            <div className="img">
                <img src="/img/image.png" alt="" />
            </div>
            <div className="review flex flex-col items-center justify-center px-[96px]">
                <h2 className='poppins-bold text-[55px] uppercase pt-[24.56px] pb-[12px] leading-[109.5%] tracking-wider'>What <span className='text-main-blue'>our</span> <br /> Clients say?</h2>
                <hr className='text-main-blue w-[100px] h-[3px] '/>
                <p className='poppins-regular text-[21px] uppercase pt-[12px]'>TESTIMONIALS</p>
                <div className="review-card">
                    <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit </p>
                    <div className="clent-wrapper flex flex-row items-center justify-between pt-[36px]">
                        <div className="client-card flex flex-row items-center">
                            <img src="/img/client-img.png" alt="" />
                            <div className="name-email">
                                <h3>Carol Chaves</h3>
                                <p>@caroles.gmail.com</p>
                            </div>
                        </div>
                        <img src="/img/comas.svg" alt="" />
                    </div>
                </div>
                <button className='border-[3px] border-main-blue py-[10px] px-[30.5px]'>VIEW ALL TESTIMONIALS </button>
            </div>
            <div className="img">
                <img src="/img/image1.png" alt="" />
            </div>
        </div>
    );
};

export default Review;