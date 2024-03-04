import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true)

const toggleSignInForm =()=>{
setIsSignIn(!isSignIn)
}

  return (
    <div >


<div className='absolute'>
<Header />
<img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg'
atl="bg-image" className='image-fit scale-130 md:bg-blend-lighten'/>
 </div>

 <form className=' w-full h-[600px] md:w-[450px] absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
  <h1 className='text-3xl font-medium p-0 my-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
    <input type= "text" name="username" placeholder="Email or phone number"   className="p-4 my-4 w-full bg-[#333333] rounded-md"/>
    <input type= "password" name="password" placeholder="password" className="p-4 my-4 w-full bg-[#333333] rounded-md"/>
    <button  type="submit" className= "p-4 my-6 bg-red-700 w-full rounded-lg">{isSignIn?"Sign In":"Sign Up"}</button>
    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>new to netflix ? sign up now</p>
  </form>
 
</div>


  
  )
}

export default Login