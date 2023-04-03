import courier from "../../images/courier.png"
const Herosection = ()=> {
    return(
        <div className="herosection row mx-0 justify-content-center align-items-center pb-5">
            <div className="hero-body col-lg-6 col-11 text-center text-lg-start ">
        <h3>DISCOVER WITH OUR INTEGRATED LOGISTICS.</h3>
        <p>The Faster, easiest way to book and manage your international shipments. We continue to act as bridge in export and import</p>
        <div className="hero mt-5">
            <p>Here is the fastest way to check the status of your shipment.No need to call customer service,  our online tracking solution gives you a real time detailed progress of your shipment.</p>
        <form className="hero-form">
            <input className="ps-3 " type="email " placeholder="Tracking ID"></input>{" "}
            <button className="ps-3 pe-3 ">Track</button>
          </form>
         <p className="pt-2">See the tracking Id on shipping document. Help</p>
        </div>
            </div>

        </div>
    )
} 
export default Herosection