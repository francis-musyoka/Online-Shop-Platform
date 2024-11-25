import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateLoginForm } from '../../utilis/validateForms';
import { PATH_URL } from '../../constant';
import Button from '../Button';

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
        <div className="flex items-center  min-h-screen">
          
        <form 
            onSubmit={handleSubmit} className="w-full max-w-sm mx-auto p-8 bg-white rounded-lg shadow-md  dark:text-neutral">
            <h1 className="text-3xl font-semibold text-center dark:text-neutral mb-6">
                Sign In
             </h1>
            <div className="mb-6">

                <label for="email" className="block text-sm font-medium text-gray-900 dark:text-neutral">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    className="w-full p-3 mt-2 text-sm text-black border border-gray-300 rounded-lg bg-white "
                />
              { formErrors && <span className='text-red-600'>{formErrors.email}</span>}
            </div>
            <div className="mb-6">
                <label for="password" className="block text-sm font-medium text-gray-900  dark:text-neutral">Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full p-3 mt-2 text-sm text-black border border-gray-300 rounded-lg bg-white "
                />
                { formErrors && <span className='text-red-600'>{formErrors.password}</span>}
            </div>
            <div className="flex justify-start mb-6">
                <input 
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    onClick={()=>setShowPassword(!showPassword)}
                    checked={showPassword}
                />
                <label for="show-password" className="ml-2 text-sm text-black">Show Password</label>
            </div>
           
            <div className="flex justify-end mb-6">
                <Link to={`${PATH_URL.FORGOT_PASSWORD}`} className="text-sm text-blue-600 hover:underline dark:text-blue-400">Forgot Password?</Link>
            </div>

           
            <Button label="Sign In" variant="primary" size='medium'className='w-full'/> 

            <div className="mt-6 text-center">
                <Link to={PATH_URL.SIGN_UP} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">Create New Account</Link>
            </div>
        </form>
</div>

    );
}

export default SignIn;
