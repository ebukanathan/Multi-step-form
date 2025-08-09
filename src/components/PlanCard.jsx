import React from "react";

function PlanCard({ plan, price, valid, option, onClick }) {
  const validity = option ? `${valid} months free` : "";
  console.log(validity);
  return (
    <div
      className="rounded-md  border-2 p-2 flex flex-col w-[150px] hover:border-blue-700 duration-[.9s]"
      onClick={onClick}
    >
      <img src="" alt="" />
      <div className="font-semibold capitalize">{plan}</div>
      <div className="font-normal text-slate-400">{price}</div>
      <div className="font-medium">{validity}</div>
    </div>
  );
}

export default PlanCard;
