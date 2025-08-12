import React, { useState } from "react";
import SideComponents from "./components/SideComponents";
// import SideBg from "./components/SideBg";
import Stepone from "./pages/Stepone.jsx";
import Steptwo from "./pages/Steptwo.jsx";
import Stepthree from "./pages/Stepthree.jsx";
import Stepfour from "./pages/Stepfour.jsx";
import Thankyou from "./pages/Thankyou.jsx";

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
  const [err, setError] = useState({});

  const [monthly, setMonthly] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    plan: {},
    addon: [],
  });

  console.log(formData);

  const validateInput = () => {
    const err = {};
    if (!formData.fullname) {
      err.fullname = "Name is required";
    }

    if (!formData.email) {
      err.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "invalid email";
    }

    setError(err);
    return Object.keys(err).length === 0;
  };

  const HandleNextstep = () => {
    if (step == 5) {
      return;
    }
    if (validateInput()) setStep((s) => s + 1);
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSwitch = () => {
    setMonthly((s) => !s);
  };

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
          {/* <h2> 
          
          </h2> */}
          <div className="">
            {step === 1 && (
              <Stepone
                fullname={formData.fullname}
                email={formData.email}
                phone={formData.phone}
                err={err}
                handleChange={handleChange}
              />
            )}
            {step === 2 && (
              <Steptwo
                formData={formData}
                setFormData={setFormData}
                monthly={monthly}
                HandleSwitch={HandleSwitch}
              />
            )}
            {step === 3 && (
              <Stepthree
                formData={formData}
                setFormData={setFormData}
                monthly={monthly}
              />
            )}
            {step === 4 && <Stepfour formData={formData} setStep={setStep} />}

            {step === 5 && <Thankyou />}
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
