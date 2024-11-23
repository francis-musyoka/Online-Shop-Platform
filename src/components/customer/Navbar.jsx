
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
        <nav className="dark:bg-yellow-900">
            <div className="max-w-screen-xl mx-auto p-4">
                <div className="flex flex-col md:hidden">
                    <div className="flex items-center justify-between space-x-4">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="flex-1 flex justify-center items-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open categories</span>
                            <FiMenu className="w-5 h-5" size={26}/>
                            
                        </button>

                        <NavLink to={PATH_URL.HOME} className="flex-1 flex justify-center">
                            <FaHome size={26} className="text-gray-900 dark:text-black" />
                        </NavLink>

                        <NavLink to={PATH_URL.SIGN_IN} className="flex-1 flex justify-center">
                            <FiLogIn size={26} className="text-gray-900 dark:text-black" />
                        </NavLink>
                    <NavLink to={PATH_URL.ACCOUNT.BASE} className="flex-1 flex justify-center">
                            <HiMiniUserCircle size={26} className="text-gray-900 dark:text-black" />
                        </NavLink>
                        <NavLink to={PATH_URL.CART} className="flex-1 flex justify-center">
                            <BsCartCheck size={26} className="text-gray-900 dark:text-black" />
                        </NavLink>
                    </div>

                    <div className="relative w-full max-w-lg px-3">
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

                {/* Big Screen Layout */}
                <div className="hidden md:flex md:items-center md:justify-between">
                    <div className="flex items-center space-x-16">
                        <NavLink
                            to={PATH_URL.HOME}
                            className="text-lg font-mono text-gray-900 dark:text-black"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to={PATH_URL.CATEGORIES}
                            className={({ isActive }) =>
                                `text-lg font-mono ${isActive ? 'text-blue-700' : 'text-gray-900 dark:text-black'}`
                            }
                        >
                            Category
                        </NavLink>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full max-w-lg px-3">
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

                    {/* Right side: Login and Cart Icons */}
                    <div className="flex items-center space-x-16">
                        <NavLink
                            to={PATH_URL.SIGN_IN}
                            className={({ isActive }) =>
                                `text-lg font-mono ${isActive ? 'text-blue-700' : 'text-gray-900 dark:text-black'}`
                            }
                        >
                            <FiLogIn size={24} className="inline-block" /> Sign In
                        </NavLink>
                        <NavLink
                            to={PATH_URL.ACCOUNT.BASE}
                            className={({ isActive }) =>
                                `text-lg font-mono ${isActive ? 'text-blue-700' : 'text-gray-900 dark:text-black'}`
                            }
                        >
                            <HiMiniUserCircle size={24} className="inline-block" /> Account
                        </NavLink>
                        <NavLink
                            to={PATH_URL.CART}
                            className={({ isActive }) =>
                                `text-lg font-mono ${isActive ? 'text-blue-700' : 'text-gray-900 dark:text-black'}`
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



