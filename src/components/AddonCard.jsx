import React from "react";

function AddonCard({ service, desc, price, onClick, checked, monthly }) {
  return (
    <div
      className="flex  border-2 rounded-md p-2 items-center my-2 justify-between hover:border-blue-950"
      onClick={onClick}
    >
      <div className="flex items-center w-2/3 justify-center  gap-4">
        <input
          type="checkbox"
          checked={checked}
          className="border-2 rounded-md h-12 w-6"
        />
        <div className="flex flex-col w-full">
          <div className=" text-lg font-semibold">{service}</div>
          <div className="font-normal text-sm">{desc}</div>
        </div>
      </div>
      <div className="text-lg font-medium">{`+$${price}/${
        monthly ? "mo" : "yr"
      }`}</div>
    </div>
  );
}

export default AddonCard;
