import { React } from "react";
import { Form } from "react-router-dom";
import upload from "../images/upload.png";

const Details = () => {
  return (
    // html document goes here

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
          <div className="rub">
            <div className="state">
            <p>State</p>
              <select id="state" name="state">
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>

              <div className="city">
                <p>City</p>
                <input></input>
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
            <div className="rub">
            <div className="state">
            <p>State</p>
              <select id="state" name="state">
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>

              <div className="city">
                <p>City</p>
                <input></input>
              </div>
          </div>
          <div className="address">
            <p>Address</p>
            <textarea rows="6" cols="0"></textarea>
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
          {/* <div className="name">
            <p>Select Category</p>
            <select id="vehicle" name="vehicle">
              <option value="car"></option>
              <option value="truck"></option>
              <option value="motorcycle"></option>
              <option value="boat"></option>
            </select>
          </div> */}
          <div className="phone">
          <p>Name of Item(s)</p>
            <input></input>
          </div>
          <div className="email">
             <div className="state">
              <p>Weight</p>
              <select id="vehicle" name="vehicle">
                <option value="car">0-5kg</option>
                <option value="car">5kg-10kg</option>
                <option value="car">10kg-15kg</option>
                <option value="car">15kg-20kg</option>
                <option value="car">20kg & above</option>
              </select>
            </div>
          </div>
          
          <div className="phone">
          <p>Value</p>
            <input></input>
          </div>
          <div className="phone">
          <p>Quantity</p>
            <input></input>
          </div>
          <div className="phone">
          <p>Amount</p>
            <input></input>
          </div>
        
          <div className="address upload">
        <p>Upload Item</p>
        {/* <textarea rows="" cols="50"></textarea> */}
        <div className="upload-img">
          <div className="img-upload">
            <img className="upload-img" src={upload} alt="Image" />
          </div>
          <p>Upload an Image</p>
          <div className="email">
          <input
            id="file-input"
            type="file"
            accept="image/*" // Allow only image files
            // onChange={(e) => handleImageUpload(e.target.files[0])} // Call a function to handle image upload
          />
          </div>
        </div>
      </div>

        </div>
        <div className="button-footer">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
      <br />
      </div>
  );
};

export default Details;
