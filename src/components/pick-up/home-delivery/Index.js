import { Container, Row, Col, Button, Form, InputGroup, Image } from 'react-bootstrap';
import { useState } from 'react';

import './index.css'
import HeaderImage from '../assets/home-delivery.svg'
import { Link } from 'react-router-dom';

export default function HomeDelivery() {
    // const [formData, setFormData] = useState({})

    function onFormSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target),
            data = Object.fromEntries(formData.entries())
        console.log(data)
    }

    return (
        <div className='HomeDelivery'>
            <Row className="HomeDeliveryHeader justify-content-center">
                <div className='HeaderImage'>

                    {/* <Image className='img-cont' fluid src={HeaderImage} /> */}
                    <div className='OverLay'>
                        <div className='Content'>
                            <h2>Home Delivery</h2>
                            <p>
                                We Ensure Our Customers Get Goods Delivered Down To Their Choosen  Location Instantly
                            </p>
                        </div>
                    </div>
                </div>
            </Row>

            <Row className="HomeDeliveryForm justify-content-center">
                <h4 className='Title'>Input Your Details</h4>
                <Col xs="11" md="7" lg="6" className='mb-5 pb-5'>
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group className="mb-4">
                            <Form.Label className="FormLabel">Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Mark Owen" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="FormLabel">Phone Number</Form.Label>
                            <Form.Control type="number" name="phone_no" placeholder="08009876543" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="FormLabel">Delivery Address</Form.Label>
                            <Form.Control type="text" name="address" placeholder="No13, idi-aba, Ogun State..." />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="FormLabel">State</Form.Label>
                            <Form.Control type="name" name="State" placeholder="State" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="FormLabel">City</Form.Label>
                            <Form.Control type="name" name="City" placeholder="City" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="FormLabel">Name of Item</Form.Label>
                            <Form.Control type="text" name="item_name" placeholder="Name of Item" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="FormLabel">Tracking-ID</Form.Label>
                            <Form.Control type="text" name="item_name" placeholder="Tracking-ID" />
                        </Form.Group>
                        


                        <Form.Label className="FormLabel">Amount For Pickup/Delivery</Form.Label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text>₦</InputGroup.Text>
                            <Form.Control type="number" name="pickup_amount" placeholder="10000" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <Button className="Submit mt-4" variant="primary" type="submit" href='/payment'>
                           <p style={{paddingTop:'5px'}}> Proceed</p>
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}