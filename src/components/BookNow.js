import booknow from "../images/booknow.png";
import BookNowModal from "../components/pick-up/BookNowModal";
import { useState } from "react";
import success from "../images/image 1.png";
import { Button, CloseButton, Modal } from "react-bootstrap";
import axios from "axios";

const BookNow = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [User, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    address: "",
    itemName: "",
    itemWeight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://www.folorunsho.com.ng/fabslogistics/v1/api/bookNow.php",
        User
      );
      console.log(response.data);
      console.log("booked");
    } catch (error) {
      console.error("in correct details");
    }
  };
  return (
    <>
      <Modal
        className="modal show"
        show={show}
        centered
        onHide={handleClose}
        style={{ display: "flex", position: "absolute" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Your details have been submitted.</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={success} alt="" />
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>

      <div className="w-100">
        <div className="booknow d-flex justify-content-center align-items-center ">
          <h3>Book Our Logistic company Get a Fastest Delivery </h3>
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col-lg-8 col-11 pt-5 ">
            {" "}
            <p className="mb-1">Name</p>
            <input
              className="mb-4 form-control form-control-lg "
              name="name"
              type="text"
              value={User.name}
              onChange={handleChange}
            ></input>
            <p className="mb-1">Email</p>
            <input
              className="mb-4 form-control form-control-lg"
              name="email"
              type="text"
              value={User.email}
              onChange={handleChange}
            ></input>
            <p className="mb-1">Phone Number</p>
            <input
              className="mb-4 form-control form-control-lg"
              name="phone"
              type="text"
              value={User.phone}
              onChange={handleChange}
            ></input>
            <p className="mb-1">State</p>
            <input
              className="mb-4 form-control form-control-lg"
              name="state"
              type="text"
              value={User.state}
              onChange={handleChange}
            ></input>
            <p className="mb-1">City</p>
            <input
              className="mb-4 form-control form-control-lg"
              name="city"
              type="text"
              value={User.city}
              onChange={handleChange}
            ></input>
            <p className="mb-1">Address</p>
            <input
              className=" mb-4 form-control form-control-lg"
              name="address"
              type="text"
              value={User.address}
              onChange={handleChange}
            ></input>
            <p className="mb-1">Name of Item(s)</p>
            <input
              className=" mb-4 form-control form-control-lg"
              name="itemName"
              type="text"
              value={User.itemName}
              onChange={handleChange}
            ></input>
            <p className="mb-1">Item(s) Kg</p>
            <input
              className="mb-4 form-control form-control-lg"
              name="itemWeight"
              type="text"
              value={User.itemWeight}
              onChange={handleChange}
            ></input>
            <button
              className="booknow-butt form-control form-control-lg mb-5 mt-5"
              type="button"
              value="Submit"
              onClick={() => {
                handleSubmit();
                handleShow();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookNow;
