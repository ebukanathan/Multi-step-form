import React, { useState } from "react";
import PlanCard from "../components/PlanCard";
import ToggleSwitch from "../components/ToggleSwitch";

function Steptwo({
  HandleChange,
  setFormData,
  formData,
  monthly,
  HandleSwitch,
}) {
  const HandleCardClick = (item) => {
    setFormData((prev) => ({ ...prev, plan: item }));
    console.log(formData);
  };

  const yearlyPlan = [
    {
      id: 1,
      img: "/imgs/icon-arcade.svg",
      name: "Arcade",
      value: "arcade",
      price: 20,
      duration: 2,
    },
    {
      id: 2,
      img: "/imgs/icon-advanced.svg",
      name: "Advanced",
      value: "advanced",
      price: 120,
      duration: 2,
    },
    {
      id: 3,
      img: "/imgs/icon-pro.svg",
      name: "Pro",
      value: "pro",
      price: 150,
      duration: 2,
    },
  ];

  const monthlyPlan = [
    {
      id: 4,
      img: "/imgs/icon-arcade.svg",
      name: "Arcade",
      value: "arcade",
      price: 9,
      duration: 2,
    },
    {
      id: 5,
      img: "/imgs/icon-advanced.svg",
      name: "Advanced",
      value: "advanced",
      price: 12,
      duration: 2,
    },
    {
      id: 6,
      img: "/imgs/icon-pro.svg",
      name: "Pro",
      value: "pro",
      price: 15,
      duration: 2,
    },
  ];

  const Yearly = yearlyPlan.map((item, index) => (
    <PlanCard
      key={index}
      src={item.img}
      plan={item.name}
      price={item.price}
      valid={item.duration}
      option={monthly}
      onClick={() => HandleCardClick(item)}
    />
  ));

  const Monthly = monthlyPlan.map((item, index) => (
    <PlanCard
      key={index}
      src={item.img}
      plan={item.name}
      price={item.price}
      valid={item.duration}
      option={monthly}
      onClick={() => HandleCardClick(item)}
      value={item.value}
    />
  ));

  const here = formData;

  const check = monthly ? false : true;

  return (
    <div className="w-full flex flex-col">
      <h1>{monthly}</h1>
      <h1>wellcom {here.fullname}</h1>
      <h1 className="text-3xl font-semibold mb-4">Select your plan</h1>
      <p className="text-md">
        you have the option of monthly or yearly billing.
      </p>
      <div className="w-full flex gap-3 my-4">{monthly ? Monthly : Yearly}</div>
      <div className="flex justify-around w-1/3 mx-3 ">
        <label htmlFor="">Monthly</label>
        {<ToggleSwitch HandleChange={HandleSwitch} check={check} />}

        <label htmlFor="">Yearly</label>
      </div>
    </div>
  );
}

export default Steptwo;
