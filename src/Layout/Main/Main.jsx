import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../../Component/Template/Header/MainHeader';
import MainFooter from '../../Component/Template/Footer/MainFooter';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <MainHeader/>
            <Outlet></Outlet>
            <MainFooter/>
        </div>
    );
};

export default Main;