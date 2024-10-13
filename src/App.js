import './App.css';
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/common/Navbar"
import Login from "./pages/Login"
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import OpenRoute from './components/core/Auth/OpenRoute';
import PrivateRoute from './components/core/Auth/PrivateRoute';
import UpdatePassword from './pages/UpdatePassword';
import VerifyEmail from './pages/VerifyEmail';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/core/DashboardPage/MyProfile';
import Settings from "./components/core/DashboardPage/Settings/Index"
import Error from "./pages/Error"
import EnrolledCourses from './components/core/DashboardPage/EnrolledCourses';
import { useSelector } from 'react-redux';
import Cart from "./components/core/DashboardPage/Cart/index"
import { ACCOUNT_TYPE } from './utils/constants';
import AddCourse from './components/core/DashboardPage/AddCourse/index';
import MyCourses from './components/core/DashboardPage/MyCourse';
import EditCourse from './components/core/DashboardPage/EditCourse';
import Catalog from "./pages/Catalog"
import Contact from "./pages/Contact"
import ViewCourse from "./pages/ViewCourse"
import CourseDetails from './pages/CourseDetails';
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from './components/core/DashboardPage/InstructorDashboard/Instructor';
// import { useEffect } from 'react';
// import { setUser } from './slices/profileSlice';
import GeminiModel from './components/common/GeminiModel';
import { useState } from 'react';



function App() {

  const [geminiModal, setGeminiModal] = useState(false);
  const geminiHandler=()=>{
    setGeminiModal(!geminiModal);
  }
  const {user}=useSelector((state)=>state.profile);
  // console.log("Logging user from app",user)
  // const dispatch = useDispatch(); 
  // useEffect(()=>{
  //   if(user){
  //     dispatch(setUser(user));
  //   }
  // })
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter relative'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/catalog/:catalogName" element={<Catalog/>}/>
      <Route path="/courses/:courseId" element={<CourseDetails/>}/>

      <Route path="/login" element={<OpenRoute><Login></Login></OpenRoute>}/>
      <Route path="/signup" element={<OpenRoute><Signup></Signup></OpenRoute>}/>
      <Route path="/forgot-password" element={<OpenRoute><ForgotPassword/></OpenRoute>}/>
      <Route path="/update-password/:token" element={<OpenRoute><UpdatePassword/></OpenRoute>}/>
      <Route path="/verify-email" element={<OpenRoute><VerifyEmail/></OpenRoute>}/>
      <Route path="/about" element={<About/>}/>

      <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
      >
        <Route path="/dashboard/my-profile" element={<MyProfile />} />
        <Route path="/dashboard/Settings" element={<Settings />} />

      {
        user && user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses />} />
          <Route path="/dashboard/cart" element={<Cart />} />
          </>
        )
      }
      {
        user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          {/* <Route path="dashboard/instructor" element={<Instructor />} /> */}
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          <Route path="/dashboard/instructor" element={<Instructor/>}/>
          
          </>
        )
      }

      </Route>

      <Route path="/contact" element={<Contact />} />
      
      <Route element={<PrivateRoute><ViewCourse/></PrivateRoute>}>

        {user && user.accountType===ACCOUNT_TYPE.STUDENT && 
          ( 
            <>
            <Route path="/view-course/:courseId/section/:sectionId/sub-section/:subSectionId" element={<VideoDetails/>}/> 
            {/* <Route path="/view-course/:courseId/section/:sectionId/sub-section/:subSectionId/err" element={<Error/>}/> */}
            </>
          )
        }
      </Route>
      <Route path="/*" element={<Error/>}/>
    </Routes>

        {!geminiModal && <><div className='bottom-12 right-12 fixed animate-ping bg-yellow-5 h-[30px] w-[30px] rounded-full z-8 ' >
            <div className='h-[28px] w-[28px] 
          bg-yellow-25 rounded-full animate-ping'></div>
         </div>
        <div className={`fixed right-10 bottom-10 w-[45px] h-[45px] z-9 text-richblack-700 font-bold font-edu-sa bg-yellow-50 rounded-full 
        flex justify-center items-center`} onClick={geminiHandler}>AI</div></>}
        <div className='fixed right-8 bottom-8 z-10'>{geminiModal && <GeminiModel geminiHandler={geminiHandler} />}</div>
    </div>
  );
}

export default App;
