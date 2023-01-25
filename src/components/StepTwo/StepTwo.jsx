import "./stepTwo.scss";
import IconArcade from "../../images/icon-arcade.svg";
import IconAdvanced from "../../images/icon-advanced.svg";
import IconPro from "../../images/icon-pro.svg";
import Toggle from "../ToggleButtn/Toggle";

const items = [
  {
    planImg: IconArcade,
    planName: "Arcade",
    planPrice: 9,
  },
  {
    planImg: IconAdvanced,
    planName: "Advanced",
    planPrice: 12,
  },
  {
    planImg: IconPro,
    planName: "Pro",
    planPrice: 15,
  },
];
export default function StepTwo() {
  return (
    <div className="step-two | flow" style={{ "--flow-space": "1rem" }}>
      <h1 className="form-heading">Select your plan</h1>
      <p className="form-desc">You have the option of monthly or yearly billing.</p>
      <div className="plan-container ">
        <div className="plan-card">
          <img src={IconArcade} alt="" />
          <input type="radio" id="arcade" name="planType" value="huey" />
          <label className="radio-label" htmlFor="arcade">
            <span>Arcade</span>
            <span>$9/mo</span>
            <span>2 months free</span>
          </label>
        </div>

        <div className="plan-card">
          <img src={IconAdvanced} alt="" />
          <input type="radio" id="advanced" name="planType" value="dewey" />
          <label className="radio-label" htmlFor="advanced">
            <span>Advanced</span>
            <span>$12/mo</span>
            <span>2 months free</span>
          </label>
        </div>

        <div className="plan-card">
          <img src={IconPro} alt="" />
          <input type="radio" id="pro" name="planType" value="louie" />
          <label className="radio-label" htmlFor="pro">
            <span>Pro</span>
            <span>$15/mo</span>
            <span>2 months free</span>
          </label>
        </div>
      </div>
      <Toggle />
    </div>
  );
}
