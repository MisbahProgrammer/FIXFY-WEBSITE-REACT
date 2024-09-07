import React from "react";
function types() {
  return (
    <div className="flex justify-center gap-x-16 p-4">
    <div>
      <img loading="lazy" alt="AC Services" src="https://cdn.mrmahir.com/services/ac.svg" height="69" width="69"></img>
      <a href="#"><p>AC Services</p></a>
    </div>
    <div>
      <img loading="lazy" alt="AC Services" src="https://cdn.mrmahir.com/services/plumber.svg" height="69" width="69"></img>
      <a href="#"><p>Plumber</p></a>
    </div>
    <div>
      <img loading="lazy" alt="AC Services" src="https://cdn.mrmahir.com/services/electrician.svg" height="69" width="69"></img>
      <a href="#"><p>Electrician</p></a>
    </div>
    <div>
      <img loading="lazy" alt="AC Services" src="https://cdn.mrmahir.com/services/handyman.svg" height="69" width="69"></img>
      <a href="#"><p>Handy Man</p></a>
    </div>
    </div>
  );
}

export default types;
