import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/Images/404-computer.svg"
const Error = () => {
  return (
    <div className='flex flex-col justify-center
     items-center text-richblack-300 mt-4'
    >
      <div >
        <img src={error} alt="404 Error" />
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <div className='flex justify-center flex-col items-center'>
          <div className='text-white font-bold  gap-3'><span className='text-4xl cursive'>404 Not Found</span></div>

                <p>Whoops! That page doesn't exist.</p>
          </div>

        <div className="flex flex-col gap-2 justify-center"> 
          <h1 className='text-xl text-richblack-5'> Here are some helpful links instead:</h1>
          <div className='flex flex-row items-center gap-4 text-richblack-100 justify-center'>
          <Link to="/" className='hover:text-richblack-5'>Home</Link>
          <Link to="/dashboard/my-profile" className='hover:text-richblack-5'>Dashboard</Link>
          <Link to="/about" className='hover:text-richblack-5'>About Us</Link>
          <Link to="/contact" className='hover:text-richblack-5'>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error