import React from "react";
import AddonCard from "../components/AddonCard";

function Stepthree({ setFormData, formData, monthly }) {
  const info = formData;
  const HandleCardClick = (item) => {
    // setFormData((prev) => {
    //   const selected = prev.addon.includes(item);

    //   return {
    //     ...prev,
    //     addon: selected
    //       ? prev.addon.filter((value) => value !== item)
    //       : [...prev.addon, item],
    //   };
    // });

    setFormData((prev) => ({ ...prev, addon: [...prev.addon, item] }));
    // console.log(formData);
    // console.log(info.addon);

    console.log(info.addon);
    console.log(item);
  };

  const addonMonthly = [
    {
      service: "online service monthly",
      desc: "access to multiplayer games",
      price: 1,
    },
    {
      service: "Larger Storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      service: "Customizable Profile",
      desc: "custom theme on your profile",
      price: 2,
    },
  ];

  const addonYearly = [
    {
      service: "online service yearly",
      desc: "access to multiplayer games",
      price: 10,
    },
    {
      service: "Larger Storage yearly",
      desc: "Extra 1TB of cloud save",
      price: 20,
    },
    {
      service: "Customizable Profile",
      desc: "custom theme on your profile",
      price: 20,
    },
  ];

  const YearlyAddon = addonYearly.map((item, index) => (
    <AddonCard
      key={index}
      service={item.service}
      desc={item.desc}
      price={item.price}
      monthly={monthly}
      onClick={() => HandleCardClick(item)}
    />
  ));

  const MonthlyAddon = addonMonthly.map((item, index) => (
    <AddonCard
      key={index}
      service={item.service}
      desc={item.desc}
      price={item.price}
      monthly={monthly}
      onClick={() => HandleCardClick(item)}
    />
  ));

  return (
    <div className="flex flex-col w-[500px] ">
      <h1 className="text-3xl font-semibold mb-1">Pick Add-ons</h1>
      <p className="text-md font-normal my-3">
        Add-ons help enhance your gaming experience
      </p>

      <div className="flex flex-col mt-3 gap-0 ">
        {monthly ? MonthlyAddon : YearlyAddon}
      </div>
    </div>
  );
}

export default Stepthree;
