import React, { useState } from "react";
import SideComponents from "./components/SideComponents";
// import SideBg from "./components/SideBg";
import Stepone from "./pages/Stepone.jsx";
import Steptwo from "./pages/Steptwo.jsx";
import Stepthree from "./pages/Stepthree.jsx";
import Stepfour from "./pages/stepfour.jsx";

function Indicator({ num, step }) {
  return (
    <>
      <div
        className={`w-[50px] h-[50px]  rounded-[100px] border-2 border-white text-white bg-transparent flex justify-center items-center ${
          step == num ? "bg-white text-black" : "bg-transparent"
        }`}
      >
        {num}
      </div>
    </>
  );
}

function App() {
  const [step, setStep] = useState(1);
  const [mainsub, setMainsub] = useState([]);

  const HandleNextstep = () => {
    if (step == 4) {
      return;
    }
    setStep((s) => s + 1);
  };
  const HandleGoBack = () => {
    if (step == 1) {
      return;
    }
    setStep((s) => s - 1);
  };

  const HandleStep = (n) => {
    setStep(n);
  };

  // const HandAddtomain = (item) => {
  //   setMainsub({ ...mainsub, item });
  // };

  const sideContent = [
    { id: 1, step: "STEP 1", description: "YOUR INFO" },
    { id: 2, step: "STEP 2", description: "SELECT PLAN" },
    { id: 3, step: "STEP 3", description: "ADD-ONS" },
    { id: 4, step: "STEP 4", description: "SUMMARY" },
  ];

  return (
    <>
      <div className="w-[inherit] bg-slate-300  mx-auto h-[90vh] grid grid-cols-1  mt-0 md:w-2/3 md:min-h-[80vh] md:grid-cols-3 md:p-3 md:mx-auto md:my-8 md:bg-white rounded-lg border-2">
        {/* desktop sidebar */}
        <div className=" hidden md:block w-3/4   rounded-md  col-start-1 col-end-2 bg-cover bg-center sidebar">
          {sideContent.map((item) => (
            <SideComponents
              key={item.id}
              no={item.id}
              sub={item.step}
              desc={item.description}
              onClick={() => HandleStep(item.id)}
              step={step}
            />
          ))}
        </div>
        {/* mobile sidebar */}
        <div className="w-[100vw] h-[30vh] sidebar rounded-none flex justify-center gap-4 pt-10 bg-no-repeat bg-cover bg-bottom md:hidden">
          {sideContent.map((item, index) => (
            <Indicator key={index} num={item.id} step={step} />
          ))}
        </div>
        <div className="step flex flex-col justify-start items-center h-[60%] p-3 bg-white w-[80%] mx-auto rounded-xl md:h-[100%] md:col-start-2 md:col-end-4 md:w-[100%] md:pt-3 md:relative">
          <h1>{step}</h1>
          {/* <h2> 
          
          </h2> */}
          <div className="">
            {step === 1 && <Stepone />}
            {step === 2 && (
              <Steptwo setMainsub={setMainsub} mainsub={mainsub} />
            )}
            {step === 3 && <Stepthree />}
            {step === 4 && <Stepfour />}
          </div>
          <div className="hidden w-3/4  md:flex justify-between absolute bottom-5">
            <button onClick={HandleGoBack} className="p-2 text-slate-950  ">
              Go back
            </button>
            <button
              onClick={HandleNextstep}
              className="p-2 bg-slate-950 text-slate-100 rounded-md  "
            >
              Next Step
            </button>
          </div>
        </div>

        {/* mobilenavbutton */}
        <div className=" w-full mx-auto bg-white py-10 px-20  flex justify-between absolute bottom-0 md:hidden">
          <button onClick={HandleGoBack} className="p-2 text-slate-950  ">
            Go back
          </button>
          <button
            onClick={HandleNextstep}
            className="p-2 bg-slate-950 text-slate-100 rounded-md  "
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
