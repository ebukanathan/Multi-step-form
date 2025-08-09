import React from "react";

function AddonCard({ service, desc, price }) {
  return (
    <div className="flex  border-2 rounded-md p-2 items-center my-2 justify-between hover:border-blue-950">
      <div className="flex items-center w-2/3 justify-center  gap-4">
        <input type="checkbox" className="border-2 rounded-md h-12 w-6" />
        <div className="flex flex-col w-full">
          <div className=" text-lg font-semibold">{service}</div>
          <div className="font-normal text-sm">{desc}</div>
        </div>
      </div>
      <div className="text-lg font-medium">{`+$${price}/mo`}</div>
    </div>
  );
}

export default AddonCard;
