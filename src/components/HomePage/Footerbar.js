import {BsFacebook} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
import {FaTwitter} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import { Link, link } from "react-router-dom";
const Footerbar = ()=> {
    return(
        <div className=" footerbar mx-0 mt-5 w-100 row justify-content-between  p-5  col-lg-11">
          <div className="  col-lg-3 col-md-6">
            <h5 className="ms-5">© 2023 FABS Logistics</h5>
          </div>
          <div className="col-lg-3 col-md-6">
          <h5 className="">Company</h5>
          <ul className=" p-3">
          <li>Service Portfolio</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Terms and Conditions</li>
          </ul>
          </div>
          <div className="col-lg-3 col-md-6">
          <h5 className="">Other Services</h5>
          <ul className="p-3">
          <li>Get a quote</li>
          <li><Link to="/pick-up">Schedule a Pickup</Link></li>
          <li>FABS Alpha</li>
          <li>Overseas Shipping</li>
          <a href="mailto:fablogistics@gmail.com"><li> Report Issues</li></a>
          </ul>
          </div>
          <div className="col-lg-3 col-md-6">
          <h5 className="">Connect with us</h5>
          <div className="d-flex p-2">
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