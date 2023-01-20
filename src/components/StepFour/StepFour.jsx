import "./stepFour.scss";

export default function StepThree() {
  return (
    <div className="step-four | flow" style={{ "--flow-space": "1rem" }}>
      <h1 className="form-heading">Finishing up</h1>
      <p className="form-desc">Double-check everything looks OK before confirming</p>

      <div className="summary-wrapper | flow" style={{ "--flow-space": "1rem" }}>
        <div className="two-columns">
          <div>
            <p className="summary-header">Arcade(Monthly)</p>
            <button className="btn-change-plan">Change</button>
          </div>
          <p className="plan-price-basic">$90/yr</p>
        </div>
        <hr className="hr-in-summary" style={{ "--flow-space": ".5rem" }} />
        <div className="two-columns">
          <p addon="detail">Online service</p>
          <p addon="price"> +$10/yr</p>
        </div>
        <div className="two-columns">
          <p addon="detail">Larger storage</p>
          <p addon="price">+$20/yr</p>
        </div>
      </div>

      <div className="two-columns | invoice-total">
        <p>Total(per year)</p>
        <p>$120/yr</p>
      </div>
    </div>
  );
}
