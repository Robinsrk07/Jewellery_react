import React, { useState } from 'react';
import welcomeImage from '../assets/images/5842ecaa-891f-40c4-acd5-599fce52d694.jpg';
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate =useNavigate()
    const [userName,setUserName] = useState('')
    const [password,setPassword] =useState('')
    const [errors,setErrors] = useState({})
    const [logOut,setLogOut] =useState(false)
    


    const handleSignIn =(e)=>{
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors)
        }



         if(userName =="mdh@mdh" && password ==12345){
            return         navigate('/dashboard')

         }
        console.log("userName:",userName);
        console.log("password:",password);
        


    }
    const validate =()=>{
        let newErrors={}
        if(!userName.trim()) newErrors.userName =" please Enter UserName"
        if(!password.trim()) newErrors.password =" please Enter Password"

        return newErrors
    }



  return (
    <div className='w-full h-full bg-white flex flex-col md:flex-row font-sans'>
    

      


      {/* Left side - Form (always visible) */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center pt-[92px]" style={{paddingTop:'90px'}}>
      {logOut &&(<div className='w-[55%] h-[30%] bg-blue-600 flex flex-col text-center justify-center pt-5 rounded' style={{fontFamily:"Open Sans"}} >You are logged out successfully.</div>)}

  <div className="w-full max-w-[300px]"> {/* This matches your input width */}
    <h1 className="text-[1.65rem] font-bold mb-4 text-gray-700 tracking-tight leading-relaxed " style={{fontFamily:"Open Sans"}}>Sign In</h1>
    <p className="text-gray-500 text-[16px] " style={{paddingTop:'10px',marginBottom:'30px',fontFamily:"Open Sans"}}>
      Enter your username and password to<br /> sign in
    </p>
    {errors.userName && (
    <div className="w-[300px] mt-1"> {/* Match input width and add top margin */}
      <p className="text-pink-700 text-xs flex items-start">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3 w-3 mr-1 mt-0.5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
            clipRule="evenodd" 
          />
        </svg>
        {errors.userName}
      </p>
    </div>
  )}
    <div className="flex justify-center">
      <input 
        type="text" 
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder="User Name" 
        className="input input-md text-[16px] border-b bg-white border-gray-300 focus:outline-none focus:border-blue-500 rounded-md placeholder-gray-400 text-black"
        style={{paddingLeft:'10px',height:'50px',marginBottom:'15px',width:'300px'}}
      />
      
    </div>
    
    {errors.password && (
    <div className="w-[300px] mt-1"> {/* Match input width and add top margin */}
      <p className="text-pink-700 text-xs flex items-start">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3 w-3 mr-1 mt-0.5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
            clipRule="evenodd" 
          />
        </svg>
        {errors.password}
      </p>
    </div>
  )}
    
    <div className="flex justify-center">
      <input 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        className="input input-md text-[16px] border-b bg-white border-gray-300 focus:outline-none focus:border-blue-500 rounded-md placeholder-gray-400 text-black"
        style={{paddingLeft:'10px',height:'50px',width:'300px'}}
        required
      />
    </div>
    

    <div className="flex ">
      <fieldset className="fieldset bg-white rounded-box p-4" style={{marginTop:'17px'}}>
        <label className="label items-center gap-2">
          <input 
            type="checkbox" 
            defaultChecked 
            className="toggle checked:bg-blue-500 bg-gray-200"
            style={{width:'40px', height:'20px' }}
          />
          <span className="text-gray-500 text-[1rem]" style={{fontFamily:"Open Sans"}}>Remember me</span>
        </label>
      </fieldset>
    </div>

    <div className="flex justify-center">
      <button 
        className="btn btn-primary bg-blue-500 rounded-lg" 
        style={{marginTop:'20px', height:'50px', width:'300px' ,fontFamily:"Open Sans"}}
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
    
    <div className="flex justify-center">
      <p 
        className="text-gray-500 text-[15px]" 
        style={{paddingTop:'23px', marginBottom:'30px' , fontFamily:"Open Sans"}}
      >
        Don't have an account?{' '}
        <span className="text-blue-500 font-medium cursor-pointer">Sign up</span>
      </p>
    </div>
  </div>
</div>

      {/* Right side - Image (hidden on small screens) */}
      <div className="hidden md:flex md:w-1/2 bg-white items-center justify-center"> 
        <div className="w-[95%] aspect-[3.4/3]">
          <img 
            src={welcomeImage} 
            alt="Welcome" 
            className='w-full h-full object-cover rounded-lg shadow-md' 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;