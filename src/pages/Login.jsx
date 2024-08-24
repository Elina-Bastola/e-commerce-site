import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState ('Sign Up');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 '/>

      </div>
    {currentState === 'Login' ? '' : <input className='w-full px-3 border border-gray-800' type="text" placeholder='Name' required/>}  
      <input className='w-full px-3 border border-gray-800' type="email" placeholder='email' required/>
      <input className='w-full px-3 border border-gray-800' type="password" placeholder='password' required/>
        <div className= " w-full flex justify-between text-sm mt-[-8px]">
          <p className='cursor-pointer'>Forgot Your Password</p>
          {
            currentState === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'> Create account</p>
            : <p onClick={()=>setCurrentState('Login')}className='cursor-pointer'>Login Here</p>
          }

        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'SIgn In' : 'Sign Up'}</button>


    </form>
  )
}

export default Login