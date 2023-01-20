import "./thankYou.scss";
import IconCheckMark from "../../images/icon-thank-you.svg";
export default function ThankYou() {
  return (
    <div className="thank-you">
      <img src={IconCheckMark} alt="" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to
        email us at support@loremgaming.com.
      </p>
    </div>
  );
}
