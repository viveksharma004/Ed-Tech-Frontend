import React from 'react'
import CTAButton from '../CTAButton'
// import HighlightText from './HighlightText'
import { FaArrowRight } from 'react-icons/fa'
import {TypeAnimation} from "react-type-animation"

const CodeBlock = ({
    position,heading,subheading,ctabtn1,ctabtn2, codeblock,bgGradient,codeColor
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
        <div className='md:w-[50%] w-[80%] flex flex-col gap-8'>
            {heading}
            <div className='text-richblack-300 font-bold'>{subheading}</div>
        
        <div className='flex gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btntext}
                    <FaArrowRight/>
                </div>
            </CTAButton>
            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn2.btntext}
                </div>
            </CTAButton>

        </div>
        </div>

        <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        {bgGradient}
        {/* Indexing */}
        <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  )
}

export default CodeBlock