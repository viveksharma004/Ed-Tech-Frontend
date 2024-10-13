import React, { useEffect, useState } from 'react'
import { Link,matchPath } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links"
import {useLocation} from "react-router-dom"
import { useSelector } from 'react-redux'
import { AiOutlineShopping } from 'react-icons/ai'
import apiConnector  from "../../services/apiConnector"
import { categories } from '../../services/api'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import ProfileDropDown from "../core/Auth/ProfileDropDown"

const Navbar = () => {

  const {token}=useSelector((state)=> state.auth);
  const {user}=useSelector((state)=>state.profile);
  const {totalItems}=useSelector((state)=>state.cart);
  const [subLinks,setSubLinks]=useState([]);
  const fetchSubLinks=async()=>{
    try{
      const result=await apiConnector("GET",categories.CATEGORIES_API);
      // console.log("Printing catalog result",result);
      setSubLinks(result.data.allCategories);
    }catch(err){
      console.log("Could not get catalog list :",err)
    }
  }
  useEffect(()=>{
    fetchSubLinks();
    // console.log("Logging token from navbar :",token)
  },[])

  const location =useLocation();
  const matchRoute=(route)=>{
    return matchPath({path:route},location.pathname)
  }

  return ( 
    <div className='flex h-14 items-center border-b-[1px] border-b-richblack-700 shadow-sm shadow-richblack-600 justify-center'>
        <div className='flex flex-row w-11/12 max-w-maxContent  items-center justify-between'>
          <Link to="/" ><img src={logo} width={160} height={30} alt=""/></Link>

        <nav>
          <ul className='flex gap-x-6 text-richblack-25'>
              {NavbarLinks.map((link,index)=>(
               
                  <li key={index}>
                    {
                      link.title==="Catalog"?(<div className='flex items-center gap-1 relative group'>
                        <p>{link.title}</p>
                        <IoIosArrowDropdownCircle/>

                        <div className={`z-10 invisible absolute left-[50%] top-0 translate-x-[-50%] translate-y-[25%] flex flex-col rounded-md 
                         bg-richblack-5 p-2 text-richblack-900
                          opacity-0 transition-all duration-300 ${subLinks.length? (`group-hover:visible group-hover:opacity-100`):(``)}
                            w-[200px] lg:w-[250px]  `}>
                            <div className=' z-[-1] absolute left-[47%]  top-0 h-6 w-6 rotate-45 rounded-sm bg-richblack-5'>
                            </div>
                            {
                              subLinks.length?(
                                subLinks.map((subLink,index)=>(
                                  <div key={index} className='w-full mx-auto hover:rounded-md hover:bg-richblack-50 hover:text-richblack-800'>
                                  <Link to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`} className='p-0 flex  justify-center text-richblack-600 mx-auto transition-all duration-200'>
                                    {subLink.name}
                                  </Link>
                                  </div>
                                ))
                              ):(<div></div>)
                            }
                        </div>
                        

                      </div>)
                      :(<Link to={link?.path}>{<p className={`${matchRoute(link?.path)?"text-yellow-5":"text-richblack-25" }`}>{link.title}</p>}</Link>)
                    }
                  </li>
                  
              )
            )
            }
          </ul>
        </nav>

        <div className='flex gap-x-4 items-center'>
            {
              user&& user?.accountType!=="Instructor"&&(
                <Link to="/dashboard/cart" className='relative text-richblack-5 flex flex-row items-center'>
                  <AiOutlineShopping size={25} />
                  {
                    totalItems>0 && (
                      <span className=' rounded-full w-4'>
                        {totalItems}
                      </span>
                    )
                  }
                </Link>
              )
            }
            {
              token==null && (
                <Link to="/login">
                  <button className='border border-richblack-700 bg-richblack-800 
                  px-[12px] py-[8px] text-richblack-100 rounded-md'>
                    Login
                  </button>
                </Link>
              )
            }
            {
              token==null && (
                <Link to="signup">
                  <button className='border border-richblack-700 bg-richblack-800 
                  px-[12px] py-[8px] text-richblack-100 rounded-md'> Sign Up </button>
                </Link>
              )
            }
            

            {
              (token!==null) &&
              (<ProfileDropDown/>)
            }
        </div>
        </div>
    </div>
  )
}

export default Navbar