import visa from "../images/visa.png";
import house from "../images/house.png";
import paypal from "../images/paypal.png";
const Pay = () => {
  return (
    <div className="pay-parent d-flex justify-content-center align-items-center w-100">
      <div className="pay-body row mx-0 justify-content-center align-items-center w-100 ">
        <div className="col-xl-6 col-lg-8 col-11">
          <h2 className="mb-5 text-center">Choose a Payment Method</h2>
          <div className=" payment-style">
            <div className="d-flex mb-3 ps-3 pe-5  pay-1">
              <p >Debit Card</p> <img src={visa}/>
            </div>
            <div className="d-flex  mb-3 ps-3 pe-5  pay-1">
              <p>Bank Method</p>
              <img src={house}></img>
            </div>
            <div className="d-flex mb-3 
             ps-3 pe-5 pay-1">
              <p>Paypal</p> <img src={paypal}></img>
            </div>
            <h5 className="mt-4 mb-4">Total Payment :</h5>
            <button className="btn border w-100">{'Proceed for Checkout >'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pay;
