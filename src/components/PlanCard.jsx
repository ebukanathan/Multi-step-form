import React from "react";

function PlanCard({ src, plan, price, valid, option, onClick }) {
  // const validity = option ? `${valid} months free` : "";
  // console.log(validity);
  return (
    <div
      className="rounded-md  border-2 p-2 flex flex-col w-[150px] h-[180px] hover:border-blue-700 duration-[.9s] active:border-blue-700"
      onClick={onClick}
    >
      <img src={src} alt="" className="w-[40px] h-[40px] mb-8" />
      <div className="font-semibold capitalize">{plan}</div>
      <div className="font-normal text-slate-400">{price}</div>
      {/* <div className="font-medium">{validity}</div> */}
    </div>
  );
}

export default PlanCard;
