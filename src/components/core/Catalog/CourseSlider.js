import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination}  from 'swiper/modules'

import CourseCard from './CourseCard'

const CourseSlider = ({Courses}) => {
  return (
    <div className='mx-auto w-full'>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3
            },
            760:{
              slidesPerView:2
            },
            390:{
              slidesPerView:1
            }
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i} className='mx-auto'>
              {/* // eslint-disable-next-line */}
              <CourseCard course={course} Height={"h-[250px] w-full"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </div>
  )
}

export default CourseSlider
