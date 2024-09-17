import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

/* eslint-disable react/prop-types */
export const Card = ({ reviews }) => {
  return (
    <div className="flex flex-col md:relative">
      <div
       className="absolute top-[-7rem] z-10 mx-auto">
        <img className="aspect-square rounded-full w-[140px] h-[140px] z-25"
         src={reviews.image}/>
         {/* <div className="aspect-square rounded-full bg-violet-600 w-[140px] h-[140px] z-[1]
         top-[-6px] left-[10px]"></div> */}
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize">{reviews.name}</p>
      </div>
      <div className="text-center mt-7">
        <p className="text-violet-400 uppercase text-sm">{reviews.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-5 text-slate-500">
        {reviews.text}
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};