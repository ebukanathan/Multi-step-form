import React from "react";

function Stepfour() {
  const addie = [
    { id: 14, name: "large", price: 20 },
    { id: 15, name: "custom", price: 190 },
  ];
  return (
    <>
      <div className="w-full flex flex-col">
        <h1 className="text-3xl font-semibold mb-4">Finishing Up</h1>
        <p className="text-md">
          Double-check everything looks OK before confirming
        </p>
        <div className="w-2/3 rounded-lg bg-slate-300 flex flex-col justify-start py-6 px-4  my-4">
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <div className="font-bold text-xl">Arcade(monthly)</div>
              <div className="text-gray-700 underline">change</div>
            </div>
            <div className="font-bold text-xl">$90</div>
          </div>
          <hr className=" my-4 bg-black" />
          <>
            {addie.map((n) => (
              <div key={n.id} className="flex justify-between">
                <div className="">{n.name}</div>
                <div className="">{n.price}</div>
              </div>
            ))}
          </>
        </div>
        <div className="flex justify-between w-2/3 px-8 my-6">
          <div className="text-gray-500">total</div>
          <div className="text-lg text-violet-950">20</div>
        </div>
      </div>
    </>
  );
}

export default Stepfour;
