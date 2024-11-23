import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PATH_URL } from '../../constant';


const NavbarOne = () => {
   

    return (
        <nav className=" dark:bg-gray-900 ">
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto  p-2">

                <div className="items-center flex  ml-auto ">  
                    <Link to={PATH_URL.SELL.CREATE_BUSINESS_ACCOUNT} className='dark:text-white'>Open Shop</Link>
                </div>    
                
            </div>

           
        </nav>
    );
};

export default NavbarOne;

