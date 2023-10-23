import axios from "axios";
import { React, useState } from "react";
import { Form } from "react-router-dom";

const Signup = () => {
  const [users, setUsers] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://www.folorunsho.com.ng/fabslogistics/v1/api/register.php",
        users
      );
      console.log(response.data);
      console.log("Login Successfull");
    } catch (error) {
      console.error("Error Login");
    }
  };
  return (
    <div>
      <div class="containers">
        <h1>Create your account</h1>
        <div class="fields">
          <form>
            <div class="conts">
              <div class="ones">
                <label for="FirstName">First Name</label>
                <br></br>
                <div class="fill">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={users.firstname}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div class="twos">
                <label for="LastName">Last Name</label>
                <br></br>
                <div class="fill">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={users.lastname}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div class="ones">
                <label for="email">Email Address</label>
                <br></br>
                <div class="fill">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={users.email}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div class="twos">
                <label for="Phonenumber">Phone Number</label>
                <br></br>
                <div class="fill">
                  <input
                    type="tel"
                    name="phonenumber"
                    id="phonenumber"
                    value={users.phonenumber}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div class="ones">
                <label for="password">Password</label>
                <br></br>
                <div class="fill">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={users.password}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div class="twos">
                <label for="confirmpassword">Confirm Password</label>
                <br></br>
                <div class="fill">
                  <input
                    type="password"
                    name="confpassword"
                    id="password"
                    value={users.confpassword}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
            </div>

            <div class="bt-green">
              <button onClick={handleSubmit} type="submit" id="submit">
                Sign Up
              </button>
            </div>
          </form>
          <div class="last">
            <p>
              Already have an account? <a href="/sign-in">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
