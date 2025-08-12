import React from "react";

function PlanCard({ src, plan, price, valid, option, onClick }) {
  // const validity = option ? `${valid} months free` : "";
  // console.log(validity);
  return (
    <div
      className=" rounded-md   w-[100%] mx-auto border-2 p-2 flex gap-x-4 md:flex-col md:w-[150px] md:h-[180px] hover:border-blue-700 duration-[.9s] active:border-blue-700"
      onClick={onClick}
    >
      <img src={src} alt="" className="w-[40px] h-[40px] mb-8" />
      <div className="flex flex-col">
        <div className="font-semibold capitalize">{plan}</div>
        <div className="font-normal text-slate-400">{price}</div>
      </div>
      {/* <div className="font-medium">{validity}</div> */}
    </div>
  );
}

export default PlanCard;
