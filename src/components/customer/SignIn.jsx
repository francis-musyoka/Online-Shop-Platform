import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateLoginForm } from '../../utilis/validateForms';
import { PATH_URL } from '../../constant';

const SignIn = () => {
    const [email, setemail] = useState('');
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
            navigate(`${PATH_URL.ACCOUNT}`)
        }
        
    }

    return (
        <div class="flex items-center  min-h-screen bg-neutral-700">
          
        <form 
            onSubmit={handleSubmit} class="w-full max-w-sm mx-auto p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-300">
            <h1 className="text-3xl font-semibold text-center text-white mb-6">
                Sign In
             </h1>
            <div class="mb-6">

                <label for="email" class="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    placeholder="name@example.com"
                    class="w-full p-3 mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                />
              { formErrors && <span className='text-red-600'>{formErrors.email}</span>}
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    class="w-full p-3 mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                />
                { formErrors && <span className='text-red-600'>{formErrors.password}</span>}
            </div>
            <div class="flex justify-start mb-6">
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

            <button
                type="submit"
                class="w-full px-4 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Sign In
            </button>

            <div class="mt-6 text-center">
                <Link to={PATH_URL.SIGN_UP} class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">Create New Account</Link>
            </div>
        </form>
</div>

    );
}

export default SignIn;
