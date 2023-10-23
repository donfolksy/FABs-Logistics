import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [Users, setUsers] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...Users, [name]: value });
  };
  // use Navigate
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://www.folorunsho.com.ng/fabslogistics/v1/api/login.php",
        Users
      );

      //   console.log(response.data);
      //   console.log("Login Successfull");
      // } catch (error) {
      //   console.error("Error Login");
      // }
      console.log(response.data.data);
      if (response.data.status === true) {
        setLoading(false);
        console.log("Login Successfull");
        localStorage.setItem("userEmail", response.data.data.email);
        localStorage.setItem("userFirstname", response.data.data.firstname);
        // Redirect to the homepage
        navigate("/transportation");
      } else {
        console.error("Login Failed");
      }
    } catch (error) {
      console.error("Error Login");
    }
  };
  return (
    <div
      className="login-parent  d-flex justify-content-center align-items-center w-100 h-100"
      style={{ margin: "7rem 0" }}
    >
      <div className="login-body row mx-0 justify-content-center align-items-center w-100 h-100">
        <form action="" className="col-lg-5 col-11 p-5  login-one">
          <h5 className="pb-4">Sign in to your account</h5>
          <div>
            <label for="email" className="   d-block">
              Email Address
            </label>
            <input
              type="text"
              value={Users.email}
              onChange={handleChange}
              id="email"
              name="email"
              className="form-control"
            />
          </div>
          <div>
            <label for="password" className="d-block">
              Password
            </label>
            <input
              type="text"
              id="password"
              value={Users.password}
              onChange={handleChange}
              name="password"
              className="form-control"
            />
          </div>

          {/* <input type="button" value="Login" className="form-control mt-5"/> */}
          <button onClick={handleSubmit} className="w-100 mt-4 p-1">
            {loading ? "Loading..." : "Login"}{" "}
          </button>
          <h6 className="d-flex justify-content-center pt-2">
            Don’t have an account? <a href="/sign-up"> Sign up</a>{" "}
          </h6>
        </form>
      </div>
    </div>
  );
};
export default Login;
