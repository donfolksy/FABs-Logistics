import { React, useState } from "react";
import { Form } from "react-router-dom";
import upload from "../images/upload.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [user, setuser] = useState({
    s_name: "",
    s_phone: "",
    s_email: "",
    s_state: "",
    s_city: "",
    s_address: "",
    r_name: "",
    r_phone: "",
    r_email: "",
    r_state: "",
    r_city: "",
    r_address: "",
    item_name: "",
    weight: "",
    value: "",
    quantity: "",
    amount: "",
    img_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://www.folorunsho.com.ng/fabslogistics/v1/api/senderDetails.php",
        user
      );
      console.log(response.data);
      console.log("Details received");

      // Fetch the tracking number and update the state
      const trackingResponse = await axios.post(
        "https://www.folorunsho.com.ng/fabslogistics/v1/api/generateTrackingID.php"
      );
      setTrackingNumber(trackingResponse.data.trackingID);

      setIsSubmitted(true);

      // Show a success notification
      toast.success("Tracking information generated successfully", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
    
      console.error("Error details:", error); // Display the error
    }
  };
  return (
    <div className="first-section">
      <div className="senders-details">
        <button className="send">Senders details</button>
        <div className="phone">
          <p>Name</p>
          <input
            type="text"
            name="s_name"
            value={user.s_name}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="phone">
          <p>Phone Numbers</p>
          <input
            type="phone"
            name="s_phone"
            value={user.s_phone}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="email">
          <p>Email</p>
          <input
            type="email"
            name="s_email"
            value={user.s_email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="rub">
          <div className="state">
            <p>State</p>
            <select
              id="state"
              type="text"
              name="s_state"
              value={user.s_state}
              onChange={handleChange}
              required
            >
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
              <input
                type="text"
                name="s_city"
                value={user.s_city}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="address">
            <p>Address</p>
            <textarea
              rows="6"
              cols="0"
              type="text"
              name="s_address"
              value={user.s_address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className=" dark">
          <div className="senders-details second">
            <button className="send">Receivers details</button>
            <div className="name">
              <p>Name</p>
              <input
                type="text"
                name="r_name"
                value={user.r_name}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="phone">
              <p>Phone Numbers</p>
              <input
                type="phone"
                name="r_phone"
                value={user.r_phone}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="email">
              <p>Email</p>
              <input
                type="email"
                name="r_email"
                value={user.r_email}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="rub">
              <div className="state">
                <p>State</p>
                <select
                  id="state"
                  type="text"
                  name="r_state"
                  value={user.r_state}
                  onChange={handleChange}
                  required
                >
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
                  <input
                    type="text"
                    name="r_city"
                    value={user.r_city}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="address">
                <p>Address</p>
                <textarea
                  rows="6"
                  cols="0"
                  type="text"
                  name="r_address"
                  value={user.r_address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="senders-details">
          <button className="send">Item Details</button>

          <div className="phone">
            <p>Name of Item(s)</p>
            <input
              type="text"
              name="item_name"
              value={user.item_name}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="email">
            <div className="state">
              <p>Weight</p>
              <select
                id="vehicle"
                type="text"
                name="weight"
                value={user.weight}
                onChange={handleChange}
                required
              >
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
            <input
              type="text"
              name="value"
              value={user.value}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="phone">
            <p>Quantity</p>
            <input
              type="text"
              name="quantity"
              value={user.quantity}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="phone">
            <p>Amount</p>
            <input
              type="text"
              name="amount"
              value={user.amount}
              onChange={handleChange}
              required
            ></input>
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
                  accept="image/*"
                  type="text"
                  name="img_name"
                  value={user.img_name}
                  onChange={handleChange}
                  required
                  // Allow only image files
                  // onChange={(e) => handleImageUpload(e.target.files[0])} // Call a function to handle image upload
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-footer">
          {/* <button>Back</button> */}
          <button onClick={handleSubmit} type="submit">
            Next
          </button>
          {isSubmitted && (
            <div className="tracking-info">
              <h2>Tracking Number</h2>
              <p>{trackingNumber}</p>
            </div>
          )}

          <ToastContainer />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Details;
