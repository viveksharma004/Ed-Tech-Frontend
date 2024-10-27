import React, { useState } from "react";
import HighlightText from "../core/HomePage/HighlightText";
import {RingLoader} from "react-spinners";
import {  RxCross1 } from "react-icons/rx";


export default function GeminiModel({geminiHandler}) {


  const [response, setResponse] = useState("");
  // const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitHandlerButton() {
    try {
      // console.log("values ",value);
      setLoading(true);
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value,
        }),
        headers: {
          "Content-type": "application/json",
        },
      };

      // const response = await fetch("http://localhost:8000/gemini", options);
      const response = await fetch("https://chat-assistant-model.onrender.com/gemini", options);
      const data = await response.json();
      // console.log(data.response);
      setResponse(data.response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }
  const changeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    // <div className="flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center h-[400px] w-[300px]  border-2 border-richblack-400 rounded-lg ">
        <div className="p-2 flex flex-col justify-center items-center h-full w-full bg-richblack-700 rounded-sm ">
       <div className="flex relative"><HighlightText text={"Ask Me Anything"}></HighlightText> <RxCross1 className="absolute -right-[55%] text-white" onClick={geminiHandler}/> </div>
          <div className="min-h-[75%] max-h-[75%] w-full border bg-white border-richblack-50 border-1 overflow-auto rounded-md px-2 py-1">
            {loading? (<RingLoader
                  color="#7e9eda"
                  speedMultiplier={1}
                  size={65}
                  className="absolute top-[40%] left-[40%]"
                />): (response && <p className="font-sans font-medium font-edu-sa">{response}</p>)}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div>
              <label htmlFor="prompt" className="text-[12px] text-richblack-25 pl-1">Enter Your Prompt :</label>
              <div className="relative">
                <input onChange={changeHandler}
                type="text"
                name="prompt"
                id="prompt"
                value={value}
                placeholder="Enter your prompt here..."
                 className="w-full  placeholder:text-slate-400
                  text-slate-700 text-sm border border-slate-200 rounded-md
                   pl-2 pr-20 py-2 transition duration-300 ease focus:outline-none
                    focus:border-slate-400 hover:border-slate-300 shadow-sm 
                    focus:shadow" />
                <button type="submit" name="submit" onClick={submitHandlerButton}
                className="absolute right-1 top-1 rounded bg-yellow-25 py-1 px-2.5
                 border border-transparent text-center text-sm text-richblack-800 transition-all 
                 shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700
                  hover:bg-slate-700 active:shadow-none font-semibold " >
                  Submit
                </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

