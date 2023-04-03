import { React } from "react";
import { Form } from "react-router-dom";
import upload from "../images/upload.png";

const Details = () => {
  return (
    // html document goes here
    <div>
      <div className="first-section">
        <div className="senders-details">
          <button className="send">Senders details</button>
          <div className="name">
            <p>Name</p>
            <input></input>
          </div>
          <div className="phone">
            <p>Phone Numbers</p>
            <input></input>
          </div>
          <div className="email">
            <p>Email</p>
            <input></input>
          </div>
          <div className="dropdown">
            <div className="state">
              <p>State</p>
              <select id="vehicle" name="vehicle">
                <option value="car"></option>
                <option value="truck"></option>
                <option value="motorcycle"></option>
                <option value="boat"></option>
              </select>
            </div>
            <div className="city">
              <p>City</p>
              <select id="vehicle" name="vehicle">
                <option value="car"></option>
                <option value="truck"></option>
                <option value="motorcycle"></option>
                <option value="boat"></option>
              </select>
            </div>
          </div>
          <div className="address">
            <p>Address</p>
            <textarea rows="6" cols="0"></textarea>
          </div>
        </div>
        <div className=" dark">
          <div className="senders-details second">
            <button className="send">Receivers details</button>
            <div className="name">
              <p>Name</p>
              <input></input>
            </div>
            <div className="phone">
              <p>Phone Numbers</p>
              <input></input>
            </div>
            <div className="email">
              <p>Email</p>
              <input></input>
            </div>
            <div className="dropdown">
              <div className="state">
                <p>State</p>
                <select id="vehicle" name="vehicle">
                  <option value="car"></option>
                  <option value="truck"></option>
                  <option value="motorcycle"></option>
                  <option value="boat"></option>
                </select>
              </div>
              <div className="city">
                <p>City</p>
                <select id="vehicle" name="vehicle">
                  <option value="car"></option>
                  <option value="truck"></option>
                  <option value="motorcycle"></option>
                  <option value="boat"></option>
                </select>
              </div>
            </div>
            <div className="address">
              <p>Address</p>
              <textarea rows="" cols="50"></textarea>
            </div>
          </div>
        </div>

        <div className="senders-details">
          <button className="send">Item Details</button>
          <div className="name">
            <p>Select Category</p>
            <select id="vehicle" name="vehicle">
              <option value="car"></option>
              <option value="truck"></option>
              <option value="motorcycle"></option>
              <option value="boat"></option>
            </select>
          </div>
          <div className="phone">
            <p>Select Item</p>
            <select id="vehicle" name="vehicle">
              <option value="car"></option>
              <option value="truck"></option>
              <option value="motorcycle"></option>
              <option value="boat"></option>
            </select>
          </div>
          <div className="email">
            <p>Select Weight</p>
            <input></input>
          </div>
          <div className="dropdown">
            <div className="state">
              <p>Quantity</p>
              <select id="vehicle" name="vehicle">
                <option value="car"></option>
                <option value="truck"></option>
                <option value="motorcycle"></option>
                <option value="boat"></option>
              </select>
            </div>
            <div className="city">
              <p>Value</p>
              <select id="vehicle" name="vehicle">
                <option value="car"></option>
                <option value="truck"></option>
                <option value="motorcycle"></option>
                <option value="boat"></option>
              </select>
            </div>
          </div>
          <div className="address upload">
            <p>Upload Item</p>
            {/* <textarea rows="" cols="50"></textarea> */}
            <div className="upload-img">
              <div className="img-upload">
                <img className="upload-img" src={upload} alt="Image" />
              </div>
              <p>Upload an Image</p>
              <button>Choose a file</button>
            </div>
          </div>
        </div>
        <div className="button-footer">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
