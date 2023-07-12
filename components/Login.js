import React from 'react'

// function showpop(){
//     var popup = "Logged in";
//     alert(popup);
// }
const Login = () => {
    return (
        <div>
            <div className='bg-[#313338] py-4 mx-auto mt-[10%] w-[90%] md:w-[70%] xl:w-[50%] relative z-10 rounded'>
                <p className='text-2xl text-white text-center font-bold pt-4'>Welcome Back!</p>
                <h1 className='text-gray-400 text-center'>We're excited too see you again!</h1>
                <div className='p-6 pl-[5%] sm:pl-[10%] '>
                    <label className='uppercase block font-bold text-gray-400 my-2'>Email or Phone Number
                    </label>
                    <input placeholder='Enter Email or Phone Number' required className='w-[100%] sm:w-[90%] md:w-[90%] xl:w-[90%]  rounded p-2'></input>
                    <label className='uppercase block font-bold text-gray-400 my-2'>Password
                    </label>
                    <input type='password' placeholder='Enter Password' required className='w-[100%] sm:w-[90%] md:w-[90%] xl:w-[90%]  rounded p-2'></input>
                    <label className='block text-sky-500 text-md hover:text-sky-600 mt-1'>Forgot your password?</label>
                    <button  className='w-[100%] sm:w-[90%] md:w-[90%] xl:w-[90%]  block bg-fuchsia-600 mt-4 rounded p-2 text-white font-bold hover:bg-fuchsia-700'>Log In</button>
                    <label className='text-gray-400'>Need an account? </label><label className=' text-sky-500 text-md hover:text-sky-600 '> Register</label>
                </div>
            </div>
            <div className='h-24 bg-zinc-700/50'></div>
        </div>
    )
}

export default Login