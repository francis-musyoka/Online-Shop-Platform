
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiLogIn, FiMenu } from 'react-icons/fi';
import { BsCartCheck } from 'react-icons/bs';
import { HiMiniUserCircle } from 'react-icons/hi2';
import { GrSearch } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { PATH_URL } from '../../constant';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        navigate('/categories')
    };

    return (
        <nav className="">
            <div className="max-w-screen-xl mx-auto p-4 ">
                <div className="flex flex-col md:hidden">
                    <div className="flex items-center justify-between space-x-4">
                        {/* <button
                            onClick={toggleMenu}
                            type="button"
                            className={ ({ isActive }) => `flex justify-center items-center  w-10 h-15 ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`}
                            aria-controls="navbar-search"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open categories</span>
                            <FiMenu size={26}/>
                            
                        </button> */}
                        <NavLink to={PATH_URL.CATEGORIES} className={({ isActive }) =>`flex-1 flex justify-center ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`}>
                            <FiMenu size={26}/>
                        </NavLink>
                        <NavLink to={PATH_URL.HOME} className={({ isActive }) =>`flex-1 flex justify-center ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`}>
                            <FaHome size={26} />
                        </NavLink>

                        <NavLink to={PATH_URL.SIGN_IN} className={({ isActive }) =>`flex-1 flex justify-center ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`}>
                            <FiLogIn size={26}/>
                        </NavLink>
                        <NavLink to={PATH_URL.ACCOUNT.BASE} className={({ isActive }) =>`flex-1 flex justify-center ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`}>
                            <HiMiniUserCircle size={26}/>
                        </NavLink>
                        <NavLink to={PATH_URL.CART} className={({ isActive }) =>`flex-1 flex justify-center ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`}>
                            <BsCartCheck size={26}  />
                        </NavLink>
                    </div>

                    <div className="relative w-full max-w-lg px-3 pt-3">
                        <input
                            type="search"
                            id="search-navbar"
                            className="block w-full p-2 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                            <GrSearch className="w-6 h-6 text-gray-500 dark:text-gray-400 mr-3"/>
                        </div>
                    </div>
                </div>

               
                <div className="hidden md:flex md:items-center md:justify-between">
                    <div className="flex items-center space-x-16">
                        <NavLink
                            to={PATH_URL.HOME}
                            className={({ isActive }) => 
                                `text-lg font-mono ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to={PATH_URL.CATEGORIES}
                            className={({ isActive }) => 
                                `text-lg font-mono ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`
                            }
                        >
                            Category
                        </NavLink>
                    </div>

                    <div className="relative w-full max-w-lg px-3">
                        <div className="absolute inset-y-0 left-5 flex items-center">
                            <GrSearch className="w-6 h-6 text-neutral" />
                        </div>
                        <input
                            type="search"
                            id="search-navbar"
                            className="block w-full pl-12 p-2 text-sm border border-gray-300 rounded-lg bg-tertiary text-neutral placeholder-neutral"
                            placeholder="Search..."
                            aria-label="Search through site content"
                        />
                        </div>

                    <div className="flex items-center space-x-16">
                        <NavLink
                            to={PATH_URL.SIGN_IN}
                            className={({ isActive }) => 
                                `text-lg font-mono ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`
                            }
                        >
                            <FiLogIn size={24} className="inline-block" /> Sign In
                        </NavLink>
                        <NavLink
                            to={PATH_URL.ACCOUNT.BASE}
                            className={({ isActive }) => 
                                `text-lg font-mono ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`
                            }
                        >
                            <HiMiniUserCircle size={24} className="inline-block" /> Account
                        </NavLink>
                        <NavLink
                            to={PATH_URL.CART}
                            className={({ isActive }) => 
                                `text-lg font-mono ${isActive ? 'dark:text-gray-950' : 'text-white hover:text-secondary'}`
                            }
                        >
                            <BsCartCheck size={24} className="inline-block" /> Cart
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



