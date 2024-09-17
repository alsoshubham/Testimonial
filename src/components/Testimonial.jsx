/* eslint-disable react/prop-types */
 
import { useState } from "react";
import { Card } from "./Card";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

 
export const Testimonials = ({reviews}) => {
  const[index, setIndex] = useState();
  function LeftShiftHandler(){
    if(index-1 <0){
      setIndex(reviews.length -1);
    }
    else{
      setIndex(index-1);
    }
  }

  function RightShiftHandler(){
    if(index+1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }

  }

  function SurpriseHandler(){
    let radnomIndex = Math.floor(Math.random()*reviews.length);
    setIndex(radnomIndex);
  }
  
  return (
    <div>
      <Card reviews={reviews[index]}/>
      <div className="flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold">
        <button onClick={LeftShiftHandler} className="cursor-pointer hover:text-violet-600"><FaChevronLeft /> </button>
        <button onClick={RightShiftHandler} className="cursor-pointer hover:text-violet-600"><FaChevronRight /></button>
      </div>
      <br />
      <div>
        <button onClick={SurpriseHandler} className="bg-violet-400 hover:bg-violet-600 transition-all
        duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white
        text-lg">Surprise Me</button>
      </div>
    </div>
  );
}; 