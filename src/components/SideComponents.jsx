import React from "react";

function SideComponents({ no, sub, desc, onClick, step }) {
  return (
    <div
      className="w-[200px] h-[70px] flex border-0 rounded-lg  justify-evenly items-center  hover: cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`border-4 rounded-[50px] w-[35px] h-[35px] p-0 flex items-center justify-center text-lg ${
          step == no ? "bg-white text-black" : "bg-slate-600"
        }`}
      >
        {no}
      </div>
      <div className="flex flex-col items-start gap-y-0 justify-center ">
        <div className="font-normal text-orange-500  pt-0">{sub}</div>
        <div className="font-semibold text-md uppercase text-orange-800  flex flex-col items-start pt-0">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default SideComponents;
