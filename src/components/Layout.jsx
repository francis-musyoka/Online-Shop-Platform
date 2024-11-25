import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './customer/Navbar';
import Footer from './customer/Footer';
import { PATH_URL } from '../constant';

const Layout = () => {
    return (
        <div className='bg-tertiary '>
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-2">
                <div className="items-center flex ml-auto">
                    <Link to={PATH_URL.SELL.CREATE_BUSINESS_ACCOUNT} className="text-secondary hover:underline">
                        Open Shop
                    </Link>
                </div>
            </div>
            <header className="bg-primary sticky top-0 z-10">
                <Navbar/>
            </header>
            
            <div className='min-h-screen' >
                
                <Outlet/>
            </div>

            <div>
                 <Footer/> 
            </div>
            
        </div>
    );
};

export default Layout;
