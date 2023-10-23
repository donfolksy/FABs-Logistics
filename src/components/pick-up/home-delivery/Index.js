import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Image,
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "./index.css";
import HeaderImage from "../assets/home-delivery.svg";
import { Link, useNavigate } from "react-router-dom";

export default function HomeDelivery() {
  // const [formData, setFormData] = useState({})
  const router = useNavigate();
  function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target),
      data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  const [User, setUser] = useState({
    name: "",
    phonenumber: "",
    address: "",
    state: "",
    city: "",
    name_of_items: "",
    trackingid: "",
    amount: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://www.folorunsho.com.ng/fabslogistics/v1/api/homeDelivery.php",
        User
      );
      console.log(response.data);
      console.log("Details Received");
        router("/payment");
    } catch (error) {
      console.error("Error");
    }
  };
  return (
    <div className="HomeDelivery">
      <Row className="HomeDeliveryHeader justify-content-center">
        <div className="HeaderImage">
          {/* <Image className='img-cont' fluid src={HeaderImage} /> */}
          <div className="OverLay">
            <div className="Content">
              <h2>Home Delivery</h2>
              <p>
                We Ensure Our Customers Get Goods Delivered Down To Their
                Choosen Location Instantly
              </p>
            </div>
          </div>
        </div>
      </Row>

      <Row className="HomeDeliveryForm justify-content-center">
        <h4 className="Title">Input Your Details</h4>
        <Col xs="11" md="7" lg="6" className="mb-5 pb-5">
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-4">
              <Form.Label className="FormLabel">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={User.name}
                onChange={handleChange}
                placeholder="Mark Owen"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="FormLabel">Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phonenumber"
                value={User.phonenumber}
                onChange={handleChange}
                placeholder="08012345678"
                
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="FormLabel">Delivery Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={User.address}
                onChange={handleChange}
                placeholder="No13, idi-aba, Ogun State..."
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="FormLabel">State</Form.Label>
              <Form.Control
                type="name"
                name="state"
                value={User.state}
                onChange={handleChange}
                placeholder="State"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="FormLabel">City</Form.Label>
              <Form.Control
                type="name"
                name="city"
                value={User.city}
                onChange={handleChange}
                placeholder="City"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="FormLabel">Name of Item</Form.Label>
              <Form.Control
                type="text"
                value={User.name_of_items}
                onChange={handleChange}
                name="name_of_items"
                placeholder="Name of Item"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="FormLabel">Tracking-ID</Form.Label>
              <Form.Control
                type="text"
                name="trackingid"
                value={User.trackingid}
                onChange={handleChange}
                placeholder="Tracking-ID"
              />
            </Form.Group>

            <Form.Label className="FormLabel">
              Amount For Pickup/Delivery
            </Form.Label>
            <InputGroup className="mb-4">
              <InputGroup.Text>₦</InputGroup.Text>
              <Form.Control
                type="number"
                name="amount"
                value={User.amount}
                onChange={handleChange}
                placeholder="10000"
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <Link>
              {" "}
              <Button
                onClick={handleSubmit}
                className="Submit mt-4"
                variant="primary"
                type="submit"
                //   href="/payment"
              >
                <p style={{ paddingTop: "5px" }}> Proceed</p>
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
