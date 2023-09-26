import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'
import { useNavigate } from "react-router-dom";

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let navigate = useNavigate();

    return (
        <>
            <Button className="ModalTriggerBtn" onClick={handleShow}>
                PICK UP NOW
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delivery Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please Select your preferred mode of delivery for your item(s)
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => navigate('/home-delivery')} variant="secondary">
                        Home Delivery
                    </Button>
                    <Button onClick={() => navigate('/pick-up')} variant="primary">
                        Nearest Office
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
