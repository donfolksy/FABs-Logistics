import {BsFacebook} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
import {FaTwitter} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
const Footerbar = ()=> {
    return(
        <div className=" footerbar mx-0 mt-5 w-100  row justify-content-between  p-5 ms-5 col-lg-11">
          <div className="  col-lg-3 col-md-6">
            <h5 className="">© 2023 FABS Logistics</h5>
          </div>
          <div className="col-lg-3 col-md-6">
          <h5 className="pb-3">Company</h5>
          <p>Service Portfolio</p>
          <p>About us</p>
          <p>Blog</p>
          <p>Terms and Conditions</p>
          </div>
          <div className="col-lg-3 col-md-6">
          <h5 className="pb-2">Other Services</h5>
          <p>Get a quote</p>
          <p>Schedule a Pickup</p>
          <p>FABS Alpha</p>
          <p>Overseas Shipping</p>
          <p>Report Issues</p>
          </div>
          <div className="col-lg-3 col-md-6">
          <h5 className="pb-2">Connect with us</h5>
          <div className="d-flex">
          <BsFacebook className="me-4"/>
          <FiInstagram className="me-4"/>
          <FaTwitter className="me-4"/>
          <AiFillLinkedin className="me-4"/>
          </div>
          </div>
        </div>
    )
}
export default Footerbar