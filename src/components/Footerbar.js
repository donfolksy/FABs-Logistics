import {BsFacebook} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
import {FaTwitter} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
const Footerbar = ()=> {
    return(
        <div className=" mx-0  w-100  d-flex justify-content-between  p-4 col-lg-11">
          <div><h5>© 2023 FABS Logistics</h5>
          </div>
          <div>
          <h5>Company</h5>
          <p>Service Portfolio</p>
          <p>About us</p>
          <p>Blog</p>
          <p>Terms and Conditions</p>
          </div>
          <div>
          <h5>Other Services</h5>
          <p>Get a quote</p>
          <p>Schedule a Pickup</p>
          <p>FABS Alpha</p>
          <p>Overseas Shipping</p>
          <p>Report Issues</p>
          </div>
          <div className="">
          <h5>Connect with us</h5>
          <div className="d-flex  justify-content-between">
          <BsFacebook/>
          <FiInstagram/>
          <FaTwitter/>
          <AiFillLinkedin/>
          </div>
          </div>
        </div>
    )
}
export default Footerbar