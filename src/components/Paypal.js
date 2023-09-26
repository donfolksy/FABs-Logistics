import paypal from "../images/paypal.png";
import './Paypal.css'

const Paypal = () => {
  return (
    <div className="paypal-1">
      <div className="paypal-2">
        <div className="paypal-3">
          <div className="paypal-5">
            <div className="pay-start">
              <img src={paypal} alt="Paypal" />
              <p>Enter your card details to pay</p>
            </div>
            <div className="pay-start-1">
              <form action="">
                <label htmlFor="Credit Card Number">Credit Card Number</label><br />
                <input type="number" placeholder="xxxx xxxx xxxx xxxx" required /><br /><br />
                <label htmlFor="Cardholder’s Name as on the Card">Cardholder’s Name as on the Card</label><br />
                <input type="number" placeholder="John Doe" required /><br /><br />
                <div className="expiry">
                  <div className="expiry-2">
                    <label htmlFor="Expiry Date">Expiry Date</label><br />
                    <input type="text" minLength="2" maxLength="2" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required placeholder="MM" />
                    <input type="text" minLength="5" maxLength="5" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required placeholder="YY/YY" id="two"/>
                  </div>
                  <div className="expiry-3">
                    <label htmlFor="Expiry Date">CVV</label><br />
                    <input type="text" minLength="3" maxLength="3" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required placeholder="CVV"/>
                  </div>
                </div>
                <div className="rem">
                    <h1>Remember this card for the next time.</h1>
                    <p>we care a lot about your privacy. That’s why we do not keep
                        any of your information unless you ask for it.</p>

                    <h2>Total Payment</h2>
                    <button>Pay NGN2500.00</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paypal;
