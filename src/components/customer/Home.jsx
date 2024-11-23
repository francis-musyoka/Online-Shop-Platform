import React,{useState} from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
    const [rating, setRating] = useState(0); 
    const[hoverValue, setHoverValue]= useState(undefined);

    const star = Array(5).fill(0);
    
    return (
        <>
       
        <div className= "flex flex-wrap  " >
           

           <div class="my-8 mx-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-white dark:border-white-700">
                <Link to="#" class="bg-white p-4 flex items-center justify-center">
                    <img class="w-full h-auto object-contain" src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111909_series7-480.png" alt="product image" />
                </Link>
                <div class="px-5 pb-5">
                    <Link to="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black mb-2">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    </Link>
                    
                    <div class="flex items-center mt-2 mb-4">
                        <div class="flex items-center space-x-1">
                            { star.map((_,index)=>(
                                <FaStar
                                    key={index}
                                    value={rating}
                                    onChange={(e)=>setRating(e.target.value)}
                                    onClick={()=>setRating(index+1)}
                                    onMouseMove={()=>setHoverValue(index+1)}
                                    onMouseLeave={()=>setHoverValue(undefined)}
                                    className={`cursor-pointer ${(hoverValue || rating) > index ? "text-yellow-300" : "text-gray-300 dark:text-gray-500" }`}
                                />
                            ))
                            }
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.toFixed(1)}</span>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                    <span class="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                         <Link to="#"class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700">Add to Cart</Link>
                    </div>
                </div>
            </div>

            <div class="my-8 mx-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-white dark:border-white-700">
                <Link to='#' class="bg-white p-4 flex items-center justify-center">
                    <img class="w-full h-auto object-contain" src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111909_series7-480.png" alt="product image"/>
                </Link>
                <div class="px-5 pb-5">
                    <Link to='#'>
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black mb-2">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    </Link>
                    
                    <div class="flex items-center mt-2 mb-4">
                        <div class="flex items-center space-x-1">
                            { star.map((_,index)=>(
                                <FaStar
                                    key={index}
                                    value={rating}
                                    onChange={(e)=>setRating(e.target.value)}
                                    onClick={()=>setRating(index+1)}
                                    onMouseMove={()=>setHoverValue(index+1)}
                                    onMouseLeave={()=>setHoverValue(undefined)}
                                    className={`cursor-pointer ${(hoverValue || rating) > index ? "text-yellow-300" : "text-gray-300 dark:text-gray-500" }`}
                                />
                            ))
                            }
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.toFixed(1)}</span>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                    <span class="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                        <Link to='#' class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700">Add to Cart</Link>
                    </div>
                </div>
            </div>

            <div class="my-8 mx-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-white dark:border-white-700">
                <Link to='#' class="bg-white p-4 flex items-center justify-center">
                    <img class="w-full h-auto object-contain" src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111909_series7-480.png" alt="product image" />
                </Link>
                <div class="px-5 pb-5">
                    <Link to='#'>
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black mb-2">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    </Link>
                    
                    <div class="flex items-center mt-2 mb-4">
                        <div class="flex items-center space-x-1">
                            { star.map((_,index)=>(
                                <FaStar
                                    key={index}
                                    value={rating}
                                    onChange={(e)=>setRating(e.target.value)}
                                    onClick={()=>setRating(index+1)}
                                    onMouseMove={()=>setHoverValue(index+1)}
                                    onMouseLeave={()=>setHoverValue(undefined)}
                                    className={`cursor-pointer ${(hoverValue || rating) > index ? "text-yellow-300" : "text-gray-300 dark:text-gray-500" }`}
                                />
                            ))
                            }
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.toFixed(1)}</span>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                    <span class="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                        <Link to='#' class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700">Add to Cart</Link>
                    </div>
                </div>
            </div>

            <div class="my-8 mx-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-white dark:border-white-700">
                <Link to='#' class="bg-white p-4 flex items-center justify-center">
                    <img class="w-full h-auto object-contain" src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111909_series7-480.png" alt="product image" />
                </Link>
                <div class="px-5 pb-5">
                    <Link to='#'>
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black mb-2">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    </Link>
                    
                    <div class="flex items-center mt-2 mb-4">
                        <div class="flex items-center space-x-1">
                            { star.map((_,index)=>(
                                <FaStar
                                    key={index}
                                    value={rating}
                                    onChange={(e)=>setRating(e.target.value)}
                                    onClick={()=>setRating(index+1)}
                                    onMouseMove={()=>setHoverValue(index+1)}
                                    onMouseLeave={()=>setHoverValue(undefined)}
                                    className={`cursor-pointer ${(hoverValue || rating) > index ? "text-yellow-300" : "text-gray-300 dark:text-gray-500" }`}
                                />
                            ))
                            }
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.toFixed(1)}</span>
                    </div>

                    <div class="flex items-center justify-between mt-4">
                    <span class="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                        <Link to='#' class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700">Add to Cart</Link>
                    </div>
                </div>
            </div>

      

            <div class="my-8 mx-8 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-white dark:border-white-700">
                <Link to="#" class="bg-white p-4 flex items-center justify-center">
                    <img class="w-full h-auto object-contain" src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111909_series7-480.png" alt="product image" />
                </Link>
                <div class="px-5 pb-5">
                    <Link to="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black mb-2">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    </Link>
                    
                    <div class="flex items-center mt-2 mb-4">
                        <div class="flex items-center space-x-1">
                            { star.map((_,index)=>(
                                <FaStar
                                    key={index}
                                    value={rating}
                                    onChange={(e)=>setRating(e.target.value)}
                                    onClick={()=>setRating(index+1)}
                                    onMouseMove={()=>setHoverValue(index+1)}
                                    onMouseLeave={()=>setHoverValue(undefined)}
                                    className={`cursor-pointer ${(hoverValue || rating) > index ? "text-yellow-300" : "text-gray-300 dark:text-gray-500" }`}
                                />
                            ))
                            }
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.toFixed(1)}</span>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                        <Link class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700">Add to Cart</Link>
                    </div>
                 </div>
            </div>

        </div>
        </>
    );
}

export default Home;
