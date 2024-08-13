import React from 'react';
import "./experiance.css";

const Experiance = () => {
    return (
        <div className="main-container experiance-wrapper bg-slate-950 pb-[261px] pt-[111px] tracking-widest">
            <div className="experiance-content md:flex md:flex-row text-left">
                <div className="left md:w-7/12 w-full bg-slate-950 pr-14">
                    <p className='poppins-regular text-[21px]'>why us?</p>
                    <hr className='text-main-blue w-[100px] h-[3px]'/>
                    <h2 className='poppins-bold text-[55px] uppercase pb-[45px] pt-[24.56px] leading-[109.5%] tracking-wider'>25 years of <span className='text-main-blue'>experience</span> as a creative agency</h2>
                    <button className='border-[3px] border-main-blue py-[10px] px-[30.5px]'>Read more</button>
                </div>
                <div className="right md:w-5/12 w-full poppins-light text-[21px] content-end">
                    <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum</p>
                    <ul className='pt-8'>
                        <li className='flex '><img className='pr-3' src="/icons/correct.svg" alt="" />Happy Customer</li>
                        <li className='flex py-1'><img className='pr-3' src="/icons/correct.svg" alt="" />Experienced Team</li>
                        <li className='flex '><img className='pr-3' src="/icons/correct.svg" alt="" />Modern Technology</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experiance;