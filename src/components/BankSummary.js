import bank from "../images/bank.png"
const BankSummary = ()=> {
    return(
        <div className="w-100  ">
            <div className="">
        <div className="">
<img src={bank}></img>
<p>Bank Transfer</p>
        </div>
<div className="row mx-0 ">
    <p>Summary</p>
    <div className="d-flex">
    <p>Amount to pay</p>
    <button>N7850</button>
    </div>
    <div>
    <button>Back</button>
    <button>Proceed</button>
    </div>
</div>
</div>
        </div>
    )
}
export default BankSummary