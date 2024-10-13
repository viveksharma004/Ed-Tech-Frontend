import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/CTAButton";

import {LearningGridArray} from "../../../data/learningGridArray"

const LearningGrid = () => {
  return (
    <div className="grid mx-auto mt-14  lg:w-fit grid-cols-1 lg:grid-cols-4  mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "lg:col-span-2 lg:h-[280px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[280px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[280px]"
                : "bg-transparent"
            } ${card.order === 3 && "lg:col-start-2"} `}
          >
            {card.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col gap-3 p-6 lg:p-10">
                <div className="text-4xl font-semibold text-white">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium hidden lg:flex">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;