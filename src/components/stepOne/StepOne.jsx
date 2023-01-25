import "./stepOne.scss";

export default function StepOne() {
  return (
    <div className="step-one | flow">
      <h1 className="form-heading">Personal info</h1>
      <p className="form-desc">Please provide your name, email, adress and phone number</p>
      <div>
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input id="name" type="text" placeholder="eg. Stephen King" required />
      </div>
      <div>
        <label className="form-label" htmlFor="email">
          Email Adress
        </label>
        <input
          id="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          required
        />
      </div>
      <div>
        <label className="form-label" htmlFor="phone-number">
          Phone Number
        </label>
        <input id="phone-number" type="tel" placeholder="e.g. +123 456 7890" required />
      </div>
    </div>
  );
}
