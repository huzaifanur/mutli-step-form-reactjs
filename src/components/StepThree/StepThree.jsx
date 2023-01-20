import "./stepThree.scss";

export default function StepThree() {
  return (
    <div className="step-three | flow" style={{ "--flow-space": "1rem" }}>
      <h1 className="form-heading">Pick add-ons</h1>
      <p className="form-desc">Add-ons help enhance your gaming experience</p>

      <div className="addon-card">
        <input type="checkbox" id="online-service" name="online-service" />
        <label className="addon-label" htmlFor="online-service">
          <span>Online service</span>
          <span>Access to multiplayer games</span>
        </label>
        <span className="addon-price">+1$/mo</span>
      </div>
      <div className="addon-card">
        <input type="checkbox" id="large-storage" name="large-storage" />
        <label className="addon-label" htmlFor="large-storage">
          <span>Larger storage</span>
          <span>Extra 1TB of cloud save</span>
        </label>
        <span className="addon-price">+2$/mo</span>
      </div>
      <div className="addon-card">
        <input type="checkbox" id="customize-prifle" name="customize-prifle" />
        <label className="addon-label" htmlFor="customize-prifle">
          <span>Customizable profile</span>
          <span>Custom theme on your profile</span>
        </label>
        <span className="addon-price">+2$/mo</span>
      </div>
    </div>
  );
}
