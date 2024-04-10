import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
const Footer = () => {
  return (
    <>
    <div className=" font-sans flex flex-col  flex-wrap sm:mx-60 mb-16">

<div className="sm:mx-39 my-6 text-center sm:text-start">
<h2 > What can I do as a team?</h2>



</div  >
   
    <div className="sm:w-full sm:flex sm:px-39 mx-auto">
        <div className=" mt-10 border-2 rounded-md p-6 md:flex    sm:mx-3 w-80 sm:w-3/4   ">
          <div className="mr-5  " >
            <img className="w-32 h-28 sm:w-60 sm:h-52" src={p1}  alt="" />
          </div>
          <div className=" flex flex-col flex-wrap mr-5 w-9/12 ">
            <h2 className="font-bold mb-4"> Round Robin Scheduling </h2>

            <p className="mb-4">
              Automatically assign meetings based on what makes the most sense
              for your team's goals - whether by availability, priority or
              equity.
            </p>
            <a className="mb-4 text-blue-600" href="">Watch Video</a>
          </div>
        </div>
        <div className=" mt-10 border-2 rounded-md p-6 md:flex  sm:mx-3 w-80 sm:w-3/4  " >
          <div    className="mr-5 "  >
            <img className="w-32 h-28 sm:w-60 sm:h-52" src={p2}  alt="" />
          </div>
          <div className="  flex flex-col flex-wrap mr-5 w-9/12 ">
            <h2 className="font-bold mb-4"> Access Powerful Management Tools</h2>
            <p className="mb-4">
              Get new and existing users up to speed and engaged with event type
              templates to make sure everyone's set up for efficient scheduling,
              all managed through one centralized billing solution.
            </p>
            <a className="mb-4 text-blue-600" href="">Watch Video</a>
          </div>
        </div>
      </div>
      <button class="absolute top-1/2 transform-translate-y-0 right-0 px-4 py-2 bg-white text-black rounded-md shadow-md hover:shadow-lg transform -rotate-90">
  Feedback
</button>



<button class="hidden md:block absolute top-3/4 right-10 px-4 py-2 bg-gray-600 text-white rounded-md shadow-md hover:shadow-lg">
<span class="absolute -top-2 -right-1">
    <span class="inline-flex items-center justify-center h-[1rem] w-[1rem] bg-red-500 text-white rounded-full text-xs">
      2
    </span>
  </span>
  Getting Started
</button>


    </div>
   
    </>
  );
};

export default Footer;
