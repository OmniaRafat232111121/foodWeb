import React  from "react";
import HomeContainer from "./HomeContainer";
import Delivery from "../img/delivery.png"
const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
    <div className="py-2 flex-1 flex flex-col items-center">
     <div className="flex items-center p-2 rounded-full justify-center gap-2 bg-orange-100
     px-4 py-1 rounded-full">
     <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
     <div className="w-8 h-8 bg-white h-10 rounded-full overflow-h1">
     <img src={Delivery} 
     alt="delivery"
     className="w-full h-full object-contain"
      />
     </div>
     </div>
     <p className="text-[2.5rem] font-bold tracking-wide
      text-headingColor" >The Fastest Delivery in { " "}
     <span className="text-orange-00"> Your City</span> </p>
     </div>
    </div>
  );
};

export default MainContainer;