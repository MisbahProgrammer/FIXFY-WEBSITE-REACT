import React from "react";
import Types from "./Maintenance-Services/Types.jsx"
function Services() {
  return (
    <>
      <h2 className="text-center text-5xl text-cyan-500 py-3 my-4 font-extrabold">
        Services
      </h2>
      <h4 className="text-center text-2xl">
        Choose from our wide range of services
      </h4>
      <div>
       <Types/>
      </div>
    </>
  );
}

export default Services;
