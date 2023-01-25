import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="step">
          <h2 className="rounded-number">1</h2>
          <div className="step-desc | hide-on-mobile">
            <span>Step 1</span> <p>Your info</p>
          </div>
        </div>

        <div className="step">
          <h2 className="rounded-number">2</h2>
          <div className="step-desc | hide-on-mobile">
            <span>Step 2</span> <p>Select plan</p>
          </div>
        </div>
        <div className="step">
          <h2 className="rounded-number">3</h2>
          <div className="step-desc | hide-on-mobile">
            <span>Step 3</span> <p>Add-ons</p>
          </div>
        </div>
        <div className="step">
          <h2 className="rounded-number">4</h2>
          <div className="step-desc | hide-on-mobile">
            <span>Step 4</span> <p> Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
