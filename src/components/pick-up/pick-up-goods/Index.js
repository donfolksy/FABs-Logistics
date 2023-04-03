import { Container, Row, Col, Button, Form, InputGroup, Image } from 'react-bootstrap';
import { useState } from 'react';

import './index.css'
import HeaderImage from '../assets/pick-up-goods.svg'

export default function PickUpGoods() {

    function onFormSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target),
            data = Object.fromEntries(formData.entries())
        console.log(data)
    }

    return (
        <div className='PickUpGoods'>
            <Row className="PickUpGoodsHeader justify-content-center">
                <div className='HeaderImage'>

                    <Image fluid src={HeaderImage} />
                    <div className='OverLay'>
                        <div className='Content'>
                            <h2>Pick Up Goods</h2>
                            <p>
                                Pickup Goods At Your Nearest Office
                            </p>
                        </div>
                    </div>
                </div>
            </Row>

            <Row className="PickUpGoodsForm justify-content-center">
                <h4 className='Title'>Choose Your Nearest Office</h4>
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
                            <Form.Label className="FormLabel">Input Nearest Office</Form.Label>
                            <Form.Select name="office">
                                <option>Iwo-Road Office</option>
                                <option>Ojoo Office</option>
                                <option>Orogun Office</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="FormLabel">Name of Item</Form.Label>
                            <Form.Control type="text" name="item_name" placeholder="Next-Level Director Office Table" />
                        </Form.Group>

                        <Button className="Submit mt-4" variant="primary" type="submit">
                            Proceed
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}