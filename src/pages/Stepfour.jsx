import React from "react";

function Stepfour({ formData, setStep }) {
  const here = formData;

  const calculate = () => {
    let total = 0;

    total += here.plan.price;

    here.addon.forEach((n) => {
      total += Number(n.price);
    });

    return total;
  };

  console.log(calculate());

  calculate();
  return (
    <>
      <div className="w-full flex flex-col">
        <h1 className="text-3xl font-semibold mb-4">Finishing Up</h1>
        <p className="text-md">
          Double-check everything looks OK before confirming
        </p>
        <div className="w-full rounded-lg bg-slate-300 flex flex-col justify-start py-6 px-4  my-4">
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <div className="font-bold text-xl">{here.plan.name}</div>
              <div
                className="text-gray-700 underline hover:cursor-pointer"
                onClick={() => setStep(2)}
              >
                change
              </div>
            </div>
            <div className="font-bold text-xl">{`$${here.plan.price}`}</div>
          </div>
          <hr className=" my-4 bg-black" />
          <>
            {here.addon.map((n) => (
              <div key={n.id} className="flex justify-between">
                <div className="">{n.service}</div>
                <div className="">{`+$${n.price}`}</div>
              </div>
            ))}
          </>
        </div>
        <div className="flex justify-between w-2/3 px-8 my-6">
          <div className="text-gray-500">total</div>
          <div className="text-lg text-violet-950">{calculate()}</div>
        </div>
      </div>
    </>
  );
}

export default Stepfour;
