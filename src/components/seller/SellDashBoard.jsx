// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import { RiListView,RiArrowDownSLine } from "react-icons/ri";
// import { HiOutlineShoppingBag } from 'react-icons/hi';
// import { FaBullhorn,FaGift } from "react-icons/fa";
// import { FiLogOut,FiUsers } from 'react-icons/fi';
// import { SlMenu } from "react-icons/sl";



// const SellDashBoard = () => {
//     // return (
//     //     <div>

//     //         <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//     //         <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
//     //             <ul className="space-y-2 font-medium">
//     //                 <li>
//     //                     <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//     //                     <SlMenu className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//     //                     <span className="ms-3">Your Shop</span>
//     //                     </Link>
//     //                 </li>
//     //                 <li>
//     //                     <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
//     //                         <RiListView className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21"/>
//     //                         <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Products</span>
//     //                         <RiArrowDownSLine className="w-3 h-3" size={26}/>
//     //                     </button>
//     //                     <ul id="dropdown-example" className="hidden py-2 space-y-2">
//     //                         <li>
//     //                             <Link to="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</Link>
//     //                         </li>
//     //                         <li>
//     //                             <Link to="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</Link>
//     //                         </li>
//     //                         <li>
//     //                             <Link to="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</Link>
//     //                         </li>
//     //                     </ul>
//     //                 </li>
//     //                 <li>
//     //                     <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//     //                     <HiOutlineShoppingBag className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
//     //                     <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
//     //                     <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
//     //                     </Link>
//     //                 </li>
//     //                 <li>
//     //                     <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//     //                     <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
//     //                         <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
//     //                     </svg>
//     //                     <span className="flex-1 ms-3 whitespace-nowrap">Promotion</span>
//     //                     </Link>
//     //                 </li>
//     //                 <li>
//     //                     <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//     //                     <FaBullhorn className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//     //                     <span className="flex-1 ms-3 whitespace-nowrap">Advertise your product</span>
//     //                     </Link>
//     //                 </li>
//     //                 <li>
//     //                     <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//     //                     <FiUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//     //                     <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
//     //                     </Link>
//     //                 </li>
//     //                 <li>
//     //                     <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//     //                     <FiLogOut className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//     //                     <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
//     //                     </Link>
//     //                 </li>
//     //             </ul>
//     //         </div>
//     //         </aside>

//     //         <div className="p-4 sm:ml-64">
//     //           <h1>hello, francis wellcome to your shop</h1>
//     //         </div>

//     //     </div>
//     // );

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const handleIconClick = () => {
//         if (!isSidebarOpen) {
//           setIsSidebarOpen(true);
//         }
//       };
  
  
//     return (
//       <div>
//         {/* Button to toggle sidebar */}
//         <button
//           onClick={()=>setIsSidebarOpen((prev) => !prev)}
//           className="p-2 text-white bg-black rounded-lg"
//         >
//           <SlMenu className="w-5 h-5" />
//         </button>
//         <aside
//           id="sidebar-multi-level-sidebar"
//           className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } bg-gray-50 dark:bg-gray-800`}
//           aria-label="Sidebar"
//         >
//           <div className="h-full px-3 py-4 overflow-y-auto">
//             <ul className="space-y-2 font-medium">
//             <li>
//               <Link
//                 to="#"
//                 onClick={handleIconClick}
//                 className={`flex items-center p-2 rounded-lg ${
//                   !isSidebarOpen ? "outline outline-2 outline-gray-500" : ""
//                 }`}
//               >
//                 <RiListView className="w-5 h-5 text-gray-500" />
//                 {isSidebarOpen && <span className="ms-3">Your Shop</span>}
//               </Link>
//             </li>
              
//               <li>
//                     <button
//                         onClick={()=>setIsDropdownOpen((prev) => !prev)}
//                         type="button"
//                         className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                         aria-controls="dropdown-example"
//                         aria-expanded={isDropdownOpen}
//                     >
//                         <RiListView className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
//                         <span className="flex-1 ms-3 text-left whitespace-nowrap">Products</span>
//                         <RiArrowDownSLine className="w-3 h-3" size={26} />
//                     </button>

//                     <ul
//                         id="dropdown-example"
//                         className={`py-2 space-y-2 ${
//                         isDropdownOpen ? "block" : "hidden"
//                         } transition-all`}
//                     >
//                         <li>
//                         <Link
//                             to="/products"
//                             className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                         >
//                             Products
//                         </Link>
//                         </li>
//                         <li>
//                         <Link
//                             to="/billing"
//                             className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                         >
//                             Billing
//                         </Link>
//                         </li>
//                         <li>
//                         <Link
//                             to="/invoice"
//                             className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//                         >
//                             Invoice
//                         </Link>
//                         </li>
//                     </ul>

//                 </li>

//              <li>
//                 <Link
//                   to="#"
//                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                 >
//                   <HiOutlineShoppingBag className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//                   <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
//                   <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
//                     Pro
//                   </span>
//                 </Link>
//               </li>
//               <li>
                
//                 <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                     <FaGift className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//                     <span className="flex-1 ms-3 whitespace-nowrap">Promotion</span>
//                 </Link>
//              </li>

//               <li>
//                 <Link
//                   to="#"
//                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                 >
//                   <FaBullhorn className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//                   <span className="flex-1 ms-3 whitespace-nowrap">
//                     Advertise your product
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                 >
//                   <FiUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//                   <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                 >
//                   <FiLogOut className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
//                   <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </aside>
//       </div>
//     );
// }

// export default SellDashBoard;


import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { RiListView, RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBullhorn, FaGift } from "react-icons/fa";
import { FiUsers, FiLogOut } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";
import { PATH_URL } from "../../constant";

const SellDashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div>
        <div className="h-full bg-slate-200" >
        {/* Small Icon Sidebar */}
            {!isSidebarOpen && (
                <div className="fixed top-0 left-0 h-screen w-16 bg-gray-50 dark:bg-gray-800 flex flex-col items-center py-4 space-y-4 shadow-lg">
                    <button onClick={toggleSidebar} className="p-2">
                    <SlMenu className="w-6 h-6 text-gray-500" />
                    </button>
                    <button onClick={toggleSidebar} className="p-2">
                    <RiListView className="w-6 h-6 text-gray-500" />
                    </button>
                    <button onClick={toggleSidebar} className="p-2">
                    <HiOutlineShoppingBag className="w-6 h-6 text-gray-500" />
                    </button>
                    <button onClick={toggleSidebar} className="p-2">
                    <FaBullhorn className="w-6 h-6 text-gray-500" />
                    </button>
                    <button onClick={toggleSidebar} className="p-2">
                    <FiUsers className="w-6 h-6 text-gray-500" />
                    </button>
                </div>
            )}

        {/* Full Sidebar */}
            <aside
                id="sidebar-multi-level-sidebar"
                className={`fixed top-0 left-0 z-40 h-screen transition-transform bg-gray-50 dark:bg-gray-800 ${
                isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full"
                }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-4 right-4 text-gray-500 hover:bg-gray-100 p-2 rounded-lg"
                    >
                        <MdArrowBackIosNew className="w-5 h-5" />
                    </button>

                    {/* Sidebar Links */}
                    <ul className="space-y-2 font-medium">
                        <li>
                        <Link
                            to="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <SlMenu className="w-5 h-5 text-gray-500" />
                            <span className="ms-3">Your Shop</span>
                        </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example"
                                aria-expanded={isDropdownOpen}
                                >
                                <RiListView className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                                <span className="ms-3 whitespace-nowrap">Products</span>
                                <RiArrowDownSLine className="w-3 h-3 ms-2" size={26} />
                            </button>
                            
                            <ul id="dropdown-example" className={`py-2 space-y-2 ${isDropdownOpen ? "block" : "hidden"}`}>
                                <li>
                                <Link
                                    to={PATH_URL.SELL.MY_PRODUCTS}
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                My Products
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to={PATH_URL.SELL.ADD_PRODUCTS}
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Add Product
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="#"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Invoice
                                </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                        <Link
                            to="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <HiOutlineShoppingBag className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
                        </Link>
                        </li>

                        <li>
                        <Link
                            to="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FaGift className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Promotion</span>
                        </Link>
                        </li>
                        <li>
                            <Link
                            to="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                            <FaBullhorn className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Advertise your product
                            </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                            to={PATH_URL.SELL.PROFILE}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                            <FiUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                            <FiLogOut className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <main 
                className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"} p-4 bg-slate-200`}>
                <Outlet />
            </main>
        </div>

        
    </div>
  );
};

export default SellDashBoard;

