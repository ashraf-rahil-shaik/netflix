import React, { useRef, useState } from 'react'
import Header from './Header'
import {validationData} from  "../utils/validation";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from  "../utils/firebase"

import { useDispatch } from 'react-redux';


const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true)
const [errorMessaage,setErrorMessage]=useState(null);
const dispatch =useDispatch()

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)


const handleButtonClick = () => {
  const message = validationData(email.current.value , password.current.value);
  setErrorMessage(message)
  if (message) return

  if(!isSignIn){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
    
      updateProfile(user, {
        displayName: name.current.value,

      }).then(() => {
        const {uid,email,displayName} = auth.currentUser
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))



      }).catch((error) => {
       setErrorMessage(error.message)
      });
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    setErrorMessage(errorMessage + " " + errorCode )
    });
  }else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " : "+ errorMessage)
    });
  }
}

const toggleSignInForm =()=>{
setIsSignIn(!isSignIn)
}



  return (
    <div>


<div className='absolute'>
<Header />
<img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg'
atl="bg-image" className='image-fit scale-130 md:bg-blend-lighten'/>
 </div>

 <form  onSubmit={(e)=>e.preventDefault()} className=' w-full h-[600px] md:w-[450px] absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
  <h1 className='text-3xl font-medium p-0 my-4'>{isSignIn?"Sign In":"Sign Up"}</h1>

  {!isSignIn &&  <input type= "text" 
    name="username"
    ref={name}
    placeholder="Full name"
    className="p-4 my-4 w-full bg-[#333333] rounded-md"/>} 

    <input type= "text" 
    ref={email}
    name="username"
    placeholder="Email or phone number"
    className="p-4 my-4 w-full bg-[#333333] rounded-md"/>
    
<p className=' text-orange-600 py-1'>{errorMessaage}</p>

    <input type= "password"
    ref={password}
     name="password" 
     placeholder="password" 
     className="p-4 my-4 w-full bg-[#333333] rounded-md"/>
  


    <button  type="submit" className= "p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
      {isSignIn?"Sign In":"Sign Up"}
      </button>
    <p className='py-4 cursor-pointer text-green-400' onClick={toggleSignInForm}>
      {isSignIn?"New to Netflix? Sign up now.":"Already Regestiered ? Sign In now."}
      </p>
  </form>
 
</div>


  
  )
}

export default Login;