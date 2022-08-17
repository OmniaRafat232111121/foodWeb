import React  from "react";
import HomeContainer from "./HomeContainer";
import Delivery from "../img/delivery.png"
const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
    <div className="py-2 flex-1 flex flex-col items-center">
     <div className="flex items-center p-2 rounded-full justify-center gap-2 bg-orange-100">
     <p className="text-base text-orange-500 fon">Bike Delivery</p>
     <div className="w-6 h-6 bg-white h-10 rounded-full overflow-h1">
     <img src={Delivery} 
     alt="delivery"
     className="w-full h-full object-contain"
      />
     </div>
     </div>
     </div>
    </div>
  );
};

export default MainContainer;