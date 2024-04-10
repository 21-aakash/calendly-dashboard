import React from "react";
import { useState } from "react";


const Dashboard = () => {

  const [active, setactive] = useState();
  const handleClick = (link) => {
    setactive(link);
  };

  
  return (


    
    <div className=" font-sans   sm:h-96 flex flex-col w-full p-2">
     
      <nav className="flex flex-col flex-wrap  bg-white shadow-md  ">
        <div className="flex justify-between  sm:mx-60 py-5">
          <div className="text-lg sm:text-2xl tracking-tight sm:tracking-normal">
            Admin Management
            <span className="text-[8px] sm:text-sm text-slate-500 mx-2">1/1 seat occcupied</span>
          </div>
          <div>
            <button class="text-[10px] sm:text-lg font-sans bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
              + New Users
            </button>
          </div>
        </div>
        <div className="py-2 sm:mx-60 text-[10px] sm:text-sm">
          <ul className="list-none flex gap-1 sm:gap-4 ">
            <li className="">
            <a
            href="#"
            className={active === 'about' ? 'active-link pb-2' : 'pb-2'}
            onClick={() => handleClick('about')}
          >
            All People
          </a>

            </li>
            <li className="">
            <a
            href="#"
            className={active === 'groups' ? 'active-link pb-2' : 'pb-2'}
            onClick={() => handleClick('groups')}
          >
          Groups
          </a>
            </li>
            <li className="">
            <a
            href="#"
            className={active === 'events' ? 'active-link pb-2' : 'pb-2'}
            onClick={() => handleClick('events')}
          >
           Managed Events 
          </a>
     
      
            </li>
            <button  className= " ml-2 py-0.5 px-1 sm:py-1 sm:px-3 sm:font-bold text-[8px] sm:text-xs bg-blue-500 text-white rounded-md" >BETA</button>
     
          </ul>
        </div>
      </nav>

      <div className="flex flex-col  p-10 text-center">
        <h1 className="font-bold my-5 text-2xl ">Start building your organisation</h1>

        <h3 className="my-4 " >
          Invite users to unlock unique team scheduling featured starting as low
          as &12 per user/mo
        </h3>
        <div  className="my-4" >
          <button class=" font-sans bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
            Invite Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
