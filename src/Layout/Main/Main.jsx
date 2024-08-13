import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../../Component/Template/Header/MainHeader';
import MainFooter from '../../Component/Template/Footer/MainFooter';

const Main = () => {
    return (
        <div className=''>
            <MainHeader/>
            <Outlet></Outlet>
            <MainFooter/>
        </div>
    );
};

export default Main;