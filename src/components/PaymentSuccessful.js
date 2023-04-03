import { React } from "react";
import { Form } from "react-router-dom";
import tick from "../images/image 1.png";

const PaymentSuccessful = () => {
  return (
    <div className="pay-cont">
      <div className="test-pay">
        <p>Congratulation! Payment Successful</p>
        <div className="img-tick">
          <img className="tick" src={tick} alt="Image" />
        </div>
        <p>Here is your tracking and waybill number: </p>
        <input></input>
        <button className="btn">Back</button>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
