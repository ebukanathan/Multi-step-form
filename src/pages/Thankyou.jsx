import React from "react";

function Thankyou() {
  return (
    <div className="w-2/3  h-[60vh] mx-auto flex flex-col justify-center items-center gap-3">
      <img src="/imgs/icon-thank-you.svg" alt="" />
      <div className="font-bold text-2xl text-center">Thank you!</div>
      <div className="text-sm text-center font-semibold">
        Thanks for confirming your subscription! We hope you have fun using our
        platform.If you ever need support, please feel free to email us at
        support@loremgaming.com
      </div>
    </div>
  );
}

export default Thankyou;
