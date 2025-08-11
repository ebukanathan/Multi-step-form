import React, { useState } from "react";
import PlanCard from "../components/PlanCard";
import ToggleSwitch from "../components/ToggleSwitch";

function Steptwo({ HandleChange, setFormData, formData }) {
  const [option, setOption] = useState(false);

  const HandleSwitch = () => {
    setOption((s) => !s);
  };

  const HandleCardClick = (item) => {
    setFormData((prev) => ({ ...prev, plan: item }));
    console.log(formData);
  };

  const yearlyPlan = [
    { id: 1, name: "Arcade", value: "arcade", price: 20, duration: 2 },
    { id: 2, name: "Advanced", value: "advanced", price: 120, duration: 2 },
    { id: 3, name: "Pro", value: "pro", price: 150, duration: 2 },
  ];

  const monthlyPlan = [
    { id: 4, name: "Arcade", value: "arcade", price: 9, duration: 2 },
    { id: 5, name: "Advanced", value: "advanced", price: 12, duration: 2 },
    { id: 6, name: "Pro", value: "pro", price: 15, duration: 2 },
  ];
  const yearly = yearlyPlan.map((item, index) => (
    <PlanCard
      key={index}
      plan={item.name}
      price={item.price}
      valid={item.duration}
      option={option}
      onClick={() => HandleCardClick(item)}
    />
  ));

  const monthly = monthlyPlan.map((item, index) => (
    <PlanCard
      key={index}
      plan={item.name}
      price={item.price}
      valid={item.duration}
      option={option}
      onClick={() => HandleCardClick(item)}
      value={item.value}
    />
  ));
  return (
    <div className="w-full flex flex-col">
      <h1>{option}</h1>
      <h1 className="text-3xl font-semibold mb-4">Select your plan</h1>
      <p className="text-md">
        you have the option of monthly or yearly billing.
      </p>
      <div className="w-full flex gap-3 my-4">{option ? yearly : monthly}</div>
      <div className="flex justify-around w-1/3 mx-3 ">
        <label htmlFor="">Monthly</label>
        {<ToggleSwitch HandleChange={HandleSwitch} />}

        <label htmlFor="">Yearly</label>
      </div>
    </div>
  );
}

export default Steptwo;
