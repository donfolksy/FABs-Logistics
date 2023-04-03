import React, { useState } from "react";
import Ellipse2 from "../images/Ellipse2.png";
import Ellipse3 from "../images/Ellipse3.png";
import Ellipse4 from "../images/Ellipse4.png";
import Frame56 from "../images/Frame56.png";
import Frame41 from "../images/Frame41.png";
import Frame42 from "../images/Frame42.png";
import Frame43 from "../images/Frame43.png";
import vector from "../images/Vector.png";
import vector1 from "../images/Vector(1).png";
import vector2 from "../images/Vector(2).png";
import star3 from "../images/Star3.png";
import material from "../images/Vector (6).png";
import truck from "../images/mdi_truck-tick.png";
import symbol from "../images/vector(4).png";
import seat from "../images/Frame57.png";
import Group6 from "../images/Group-new-6.png";
import iconone from "../images/Vector (3).png";
import icontwo from "../images/Vector (1).png";
import iconthree from "../images/Vector (2).png";
// import Navbar from "./Navbar";

const Transportation = () => {
  return (
    // html document goes here
    <div>
      {/* <Navbar /> */}
      <header>
        <div className="text-input">
          <h2 className="green-text">Transportation for any event</h2>
          <h1>Travel in style with us</h1>
          <p>
            Transportation for weddings, dinner dates, concerts, sporting
            events, birthdays, anniversaries, business meetings, airport
          </p>
          <p>
            D/O & P/U, night on the town , shopping outings, bachelor &
            bachelorette parties, retirement parties, funerals
          </p>
        </div>
        <div className="input-field">
          <input placeholder="FULL NAME"></input>
          <input placeholder="E-MAIL"></input>
          <input placeholder="PHONE NUMBER"></input>
          <button className="btn-1">Get in Touch</button>
            <select id="vehicle" name="vehicle">
              <option value="select">Select a vehicle</option>
              <option value="car">Car</option>
              <option value="truck">Truck</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="boat">Boat</option>
            </select>
          </div>
      </header>
      <section>
        <div className="purpose-cont">
          <div className="purpose one">
            <div className="img-text">
              <img className="img" src={Ellipse4} alt="Image" />
            </div>
            <div className="small-img">
              <p className="g-text">Airport Transfers</p>
              <p>
                We make you arrive to your event on time and in the best ride
                for you
              </p>
            </div>
          </div>
          <div className="purpose one">
            <div className="img-text">
              <img className="img" src={Ellipse3} alt="Image" />
            </div>
            <div className="small-img">
              <p className="g-text">Business Transfers</p>
              <p>
                We make you arrive to your event on time and in the best ride
                for you
              </p>
            </div>
          </div>
          <div className="purpose">
            <div className="img-text">
              <img className="img" src={Ellipse2} alt="My Image" />
            </div>
            <div className="small-img">
              <p className=" green g-text">Events & Weddings</p>
              <p>
                We make you arrive to your event on time and in the best ride
                for you
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="suv">
        <div className="suv-cont">
          <div className="suv-text">
            <p className="car">Luxury Cars </p>
            <p className="bg-text">for Maximum Satisfaction</p>
            <p>
              We treat you as royalty that you are! We are professional and
              courteous. You will not find a more dependable transportation
              service in Nigeria.
            </p>
            <p> Comfort ! Style! Class! Elegance!</p>
            <button className="btn">Read More</button>
          </div>
          <div className="suv-img">
            <img className="img" src={Frame56} alt="Image" />
          </div>
        </div>
      </div>
      <div className="card-cont">
        <div className="transit">
          <div className="car-img">
            <img className="img-1" src={Frame41} alt="Image" />
          </div>
          <div className="car-text">
            <p>Cadillac Escalade</p>
            <p>
              Cadillac Escalade Insured, leather interior, air conditioning,
              rain sensor, panoramic roof.
            </p>
          </div>
          <div className="car-icon">
            <div className="icon-cont">
              <img className="img-2" src={vector} alt="Image" />
              <p>6 Seats</p>
            </div>
            <div className="icon-cont">
              <img className="img-2" src={vector1} alt="Image" />
              <p>Petrol</p>
            </div>
            <div className="icon-cont">
              <img className="img-2" src={vector2} alt="Image" />
              <p>Auto</p>
            </div>
          </div>
          <div className="rate-star">
            <p>
              <span className="green cash">$2500</span>/ pre hour
            </p>
            <div className="five-star">
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
            </div>
          </div>

          <button className="btn">Book Now</button>
        </div>
        <div className="transit">
          <div className="car-img">
            <img className="img-2" src={Frame42} alt="Image" />
          </div>
          <div className="car-text">
            <p>Chevrolet suburban</p>
            <p>
              Insured, leather interior, air conditioning, rain sensor,
              panoramic roof.
            </p>
          </div>
          <div className="car-icon">
            <div className="icon-cont">
              <img className="img-2" src={vector} alt="Image" />
              <p>6 Seats</p>
            </div>
            <div className="icon-cont">
              <img className="img-2" src={vector1} alt="Image" />
              <p>Petrol</p>
            </div>
            <div className="icon-cont">
              <img className="img-2" src={vector2} alt="Image" />
              <p>Auto</p>
            </div>
          </div>
          <div className="rate-star">
            <p>
              <span className="green cash">$2500</span>/ pre hour
            </p>
            <div className="five-star">
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
            </div>
          </div>

          <button className="btn">Book Now</button>
        </div>
        <div className="transit">
          <div className="car-img">
            <img className="img-3" src={Frame43} alt="Image" />
          </div>
          <div className="car-text">
            <p>Transit van</p>
            <p>
              Insured, leather interior, air conditioning, rain sensor,
              panoramic roof.
            </p>
          </div>
          <div className="car-icon">
            <div className="icon-cont">
              <img className="img-2" src={vector} alt="Image" />
              <p>6 Seats</p>
            </div>
            <div className="icon-cont">
              <img className="img-2" src={vector1} alt="Image" />
              <p>Petrol</p>
            </div>
            <div className="icon-cont">
              <img className="img-2" src={vector2} alt="Image" />
              <p>Auto</p>
            </div>
          </div>
          <div className="rate-star">
            <p>
              <span className="green cash">$2500</span>/ pre hour
            </p>
            <div className="five-star">
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
              <img className="img-2" src={star3} alt="Image" />
            </div>
          </div>

          <button className=" btn">Book Now</button>
        </div>
      </div>
      <div className="chat-cont">
        <div className="chat-text">
          <h1>OUR BENEFITS</h1>
          <p>Luxury Rental Service</p>
        </div>

      </div>
      <div className="emoji-cont">
        <div className="cont-1">
          <div className="emoji">
            <img className="img" src={material} alt="Image" />
          </div>
          <p className="top-text">100% Customer Satisfaction</p>
          <p>
            Our customers are always very satisfied Our customers are always
            very satisfied Our customers are always very satisfied
          </p>
        </div>
        <div className="cont-2">
          <div className="emoji">
            <img className="img special" src={truck} alt="Image" />
          </div>
          <p className="top-text">Your Choice of Any Pickup Location</p>
          <p>
            Our customers are always very satisfied Our customers are always
            very satisfied Our customers are always very satisfied{" "}
          </p>
        </div>
        <div className="cont-3">
          <div className="emoji">
            <img className="img" src={symbol} alt="Image" />
          </div>
          <p className="top-text">We Have the Best Pricing Options</p>
          <p>
            Our customers are always very satisfied Our customers are always
            very satisfied Our customers are always very satisfied{" "}
          </p>
        </div>
      </div>
      <div className="table-image">
        <div className="tb-img">
          <img className="itb" src={seat} alt="Image" />
        </div>
        <div className="text-table">
          <p>
            We make sure that <span className="green">your every trip</span> is
            comfortable
          </p>
          <div className="table">
            <table>
              <tr className="table-1">
                <td>Luxury Limousine Selection</td>
                <td>High Safety and Nurity</td>
                <td>24/7 Order Available</td>
              </tr>
              <tr className="table-2">
                <td>Fixed Price & Bonus System</td>
                <td>Fast Car Delivery Service</td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="empty-input">
        <div className="empty"></div>
        <div className="input-cont">
          <div className="hire">
            <p>Book a Seat</p>
            <p>Hire a Bus</p>
            <p>Booking Stat</p>
          </div>
          <div className="input-sec">
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <div className="flex-input">
              <input></input>
              <input></input>
            </div>
            <button>Reserve Now</button>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <div className="footer-1">
        <div className="footer-cont">
          Be the first to receive the latest Enter email Subscribe news and
          product updates
        </div>
        <div className="input-text">
          <div className="white-line">
            <input placeholder="Enter email"></input>

            <button>Subscribe</button>
          </div>
        </div>
        </div>
        
      </div>
      <footer className="footer-icon">
        <div className="first-logo">
        <img className="logo-img" src={Group6} alt="My Image" />
        </div>
        <div className="first-li">
          <ul>
            <p>Company</p>
            <li>About us</li>
            <li>Team</li>
          </ul>
          <ul>
            <p>Experience</p>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Find a Terminal</li>
            <li>Blogs</li>
          </ul>
          <ul>
            <p>Terms</p>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="second-icon">
          <p>Connect with us</p>
          <div className="socials">
            <img className="icn" src={iconone} alt="Image" />
            <img className="icn" src={icontwo} alt="Image" />
            <img className="icn" src={iconthree} alt="Image" />

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Transportation;
