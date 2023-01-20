import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidepar/Sidebar";
import StepOne from "./stepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";
import StepFour from "./StepFour/StepFour";
import ThankYou from "./ThankYou/ThankYou";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="main-content">
        <div className="content-wrapper">
          {/* <StepOne /> */}
          {/* <StepTwo /> */}
          {/* <StepThree/> */}
          {/* <StepFour /> */}
          <ThankYou />
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
