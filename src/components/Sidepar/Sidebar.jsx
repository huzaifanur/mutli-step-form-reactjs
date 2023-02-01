import "./sidebar.scss";

const steps = [
  {
    number: 1,
    title: "step 1",
    info: "Your info",
  },
  {
    number: 2,
    title: "step 2",
    info: "Select plan",
  },
  {
    number: 3,
    title: "step 3",
    info: "Add-ons",
  },
  {
    number: 4,
    title: "step 4",
    info: "Summary",
  },
];

export default function Sidebar({ step }) {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        {steps.map((s) => (
          <div className="step">
            <h2 className={s.number === step ? "rounded-number | selected" : "rounded-number"}>{s.number}</h2>
            <div className="step-desc | hide-on-mobile">
              <span>{s.title}</span> <p>{s.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
