import React from "react";

function Stepone() {
  return (
    <div className="w-full bg-white flex flex-col p-3">
      <h2 className="text-3xl font-semibold mb-4">Personal info</h2>
      <p className="text-md">
        Please Provide your name,email address and phone number.
      </p>
      <form action="" className="flex flex-col mt-8 ">
        <label htmlFor="" className="font-semibold">
          Name
        </label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          className="border-2 w-3/4 rounded-md mb-5 px-3 py-2"
        />
        <label htmlFor="" className="font-semibold">
          Email Address
        </label>
        <input
          type="email"
          placeholder="e.g. Stephenking@lorem.com"
          className="border-2 w-3/4 rounded-md mb-5 px-3 py-2"
        />
        <label htmlFor="" className="font-semibold">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          className="border-2 w-3/4 rounded-md mb-5 px-3 py-2"
        />
      </form>
    </div>
  );
}

export default Stepone;
