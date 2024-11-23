import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateLoginForm } from '../../utilis/validateForms';
import { PATH_URL } from '../../constant';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const [formErrors, setFormErros] = useState({});
  
    const navigate = useNavigate();

    const validateForm = ()=>{
        const errors = validateLoginForm(email,password);
        setFormErros(errors)
        return Object.keys(errors).length < 1 
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        const isvalid = validateForm();
        if(isvalid){
            navigate(`${PATH_URL.SELL.DASHBOARD}`)
        }
        
    }
    return (
        <div className=' bg-gray-100 text-base'>
            <div className="flex items-center min-h-screen">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                        Log IN 
                    </h1>
                    <p className="text-md  text-center text-gray-800 mb-6">
                        Don't have a shop? 
                        <Link 
                            to={PATH_URL.SELL.CREATE_BUSINESS_ACCOUNT}
                            class="text-sm text-blue-600 hover:underline dark:text-blue-400"
                            >
                             Open New Shop
                        </Link>
                    </p>
                            
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                        />
                        {formErrors.email && <span className="text-red-700 text-xs">{formErrors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                        />
                        {formErrors.password && <span className="text-red-700 text-xs">{formErrors.password}</span>}
                    </div>
                    <div class="flex justify-start mb-4">
                        <input 
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            onClick={()=>setShowPassword(!showPassword)}
                            checked={showPassword}
                        />
                        <label for="show-password" class="ml-2 text-sm text-gray-600 dark:text-gray-400">Show Password</label>
                    </div>
                    <div class="flex justify-end mb-6">
                        <Link to={`${PATH_URL.FORGOT_PASSWORD}`} class="text-sm text-blue-600 hover:underline dark:text-blue-400">Forgot Password?</Link>
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            class="w-full px-4 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        Submit
                        </button>
                    </div>
                
                </form>
            </div>
        </div>
    );
}

export default Login;
