// import styles from './check.module.css';
import { React } from "react";
import { Form } from "react-router-dom";

const Checkout = () => {
    return (
        <div>
            <div class="container-2">
                <h1>Checkout</h1>
                {/* <!-- THE FORMS --> */}
                <div class="field-2">
                    <form action="GET">
                        <div className="conts-cont">
                            <div className="conts-2">
                                <label for="Credit Card Number" id="label-2">Credit Card Number</label><br></br>
                                <input type="text" name="" id="Credit Card Number" required placeholder="xxxx xxxx xxxx xxxx"></input>
                            </div>
                            <div className="conts-2-1">
                                <label for="Credit Card Number" id="label-2">Cardholder’s Name as on the Card</label><br></br>
                                <input type="text" name="" id="Cardholder’s Name as on the Card" required placeholder="e.g John Wick"></input>
                            </div>
                            <div className="cont-2-2">
                                <div className="one-1">
                                    <label for="Expiry Date">Expiry Date</label> <br></br>
                                    <input type="number" name="month" id="input-2" placeholder="MM" required></input>
                                    <input type="number" name="" id="input-3" placeholder="YY" required></input>
                                </div>
                                <div className="two-2">
                                    <label for="CVV">CVV</label> <br></br>
                                    <input type="number" name="month" id="input-3" placeholder="xxx" required></input>
                                </div>
                            </div>
                            
                            {/* <!-- THE WORDS --> */}
                            <div className="word">
                                <h6>Remember this card for the next time.</h6>
                                <p>We care a lot about your privacy. That’s why we do not keep any of your information unless you ask for it.</p>
                            </div>

                            <div className="word-2">
                                <h2>
                                    Total Payment:
                                </h2>
                            </div>
                            <div className="last-2">
                                <button type="button" value="Pay" id="button">Pay</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Checkout;