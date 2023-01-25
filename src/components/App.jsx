import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidepar/Sidebar";
import StepOne from "./stepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";
import StepFour from "./StepFour/StepFour";
import ThankYou from "./ThankYou/ThankYou";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <div className="form-area">
            {/* <StepOne /> */}
            {/* <StepTwo /> */}
            {/* <StepThree /> */}
            <StepFour />
            {/* <ThankYou /> */}
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default App;
