import React from "react";

function Errormessage(msg) {
  return;
}

function Stepone({ fullname, email, phone, handleChange, err }) {
  const error = err;

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
          name="fullname"
          type="text"
          value={fullname}
          placeholder="e.g. Stephen King"
          className="border-2 w-3/4 rounded-md mb-2 px-3 py-2"
          onChange={handleChange}
        />
        {error.fullname && (
          <div className="text-red-950 font-normal text-sm mb-4">
            {error.fullname}
          </div>
        )}
        <label htmlFor="" className="font-semibold">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="e.g. Stephenking@lorem.com"
          className="border-2 w-3/4 rounded-md mb-2 px-3 py-2"
          onChange={handleChange}
        />
        {error.email && (
          <div className="text-red-950 font-normal text-sm mb-4 ">
            {error.email}
          </div>
        )}
        <label htmlFor="" className="font-semibold">
          Phone Number
        </label>
        <input
          name="phone"
          type="text"
          value={phone}
          placeholder="e.g. +1 234 567 890"
          className="border-2 w-3/4 rounded-md mb-5 px-3 py-2"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Stepone;
