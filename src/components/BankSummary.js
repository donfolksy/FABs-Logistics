import bank from "../images/bank.png"
import './Bank.css'
const BankSummary = ()=> {
    return(
//         <div className="w-100  ">
//             <div className="">
//         <div className="">
// <img src={bank}></img>
// <p>Bank Transfer</p>
//         </div>
// <div className="row mx-0 ">
//     <p>Summary</p>
//     <div className="d-flex">
//     <p>Amount to pay</p>
//     <button>N7850</button>
//     </div>
//     <div>
//     <button>Back</button>
//     <button>Proceed</button>
//     </div>
// </div>
// </div>
//         </div>
        <div className="bank-1">
            <div className="bank-2">
                <div className="bank-3">
                    <div className="payment">
                        <img src={bank}/>
                        <h4>Payment</h4>
                        <div className="please">
                            <h5>Please make payment of #7850 to the following account</h5>
                        </div>
                      <div className="acct-2">
                      <div className="acct">
                            <div className="name">
                                <p>Account Number</p>
                            </div>
                            <div className="box">
                                <p>0037172202</p>
                            </div>
                            <div className="name">
                                <p>Bank Name</p>
                            </div>
                            <div className="box">
                                <p>Access Bank</p>
                            </div>
                            <div className="name">
                                <p>Beneficiary</p>
                            </div>
                            <div className="box">
                                <p>Fabs Logistics</p>
                            </div>
                        </div>
                      </div>
                        <div className="last-1">
                            <p>Reminder: Use this account only for this transaction and complete the payment before the time specified above expires.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default BankSummary