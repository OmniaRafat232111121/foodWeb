import React  from "react";
import HomeContainer from "./HomeContainer";
import Delivery from "../img/delivery.png"
const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
    <div className="py-2 flex-1 flex flex-col items-center">
     <div className="flex items-center  ju">
     <p>Bike Delivery</p>
     <div className="w-10 bg-white h-10 rounded-full overflow-h1">
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