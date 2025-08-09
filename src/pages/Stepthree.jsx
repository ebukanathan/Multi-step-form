import React from "react";
import AddonCard from "../components/AddonCard";

function Stepthree() {
  const addons = [
    {
      service: "online service",
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
  return (
    <div className="flex flex-col w-[500px] ">
      <h1 className="text-3xl font-semibold mb-1">Pick Add-ons</h1>
      <p className="text-md font-normal my-3">
        Add-ons help enhance your gaming experience
      </p>

      <div className="flex flex-col mt-3 gap-0 ">
        {addons.map((item, index) => (
          <AddonCard
            key={index}
            service={item.service}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Stepthree;
