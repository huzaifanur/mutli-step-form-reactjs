import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidepar/Sidebar";
import StepOne from "./stepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";
import StepFour from "./StepFour/StepFour";
import ThankYou from "./ThankYou/ThankYou";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step <= 4) {
      setStep((step) => step + 1);
    }
  };
  const handleBack = () => {
    if (step >= 2) {
      setStep((step) => step - 1);
    }
  };

  return (
    <div className="container">
      <div className="App">
        <Sidebar step={step} />
        <div className="main-content">
          <div className="form-area">
            {step === 1 ? <StepOne /> : null}
            {step === 2 ? <StepTwo /> : null}
            {step === 3 ? <StepThree /> : null}
            {step === 4 ? <StepFour /> : null}
            {step === 5 ? <ThankYou /> : null}
          </div>
          <Navigation handleNext={handleNext} handleBack={handleBack} step={step} />
        </div>
      </div>
    </div>
  );
}

export default App;
