import booknow from "../images/booknow.png"
import BookNowModal from "../components/pick-up/BookNowModal"
import { useState } from "react"
import success from "../images/image 1.png"
// import { Modal } from "bootstrap"
import { Button, CloseButton, Modal } from "react-bootstrap"
// import (Modal) from "react-bootstrap"


const BookNow = () => {
    const[show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    
    return(
        <>
        <Modal
            className="modal show"
            show={show}
            centered
            onHide={handleClose}
            style={{ display: 'flex', position: 'absolute' }}
        >
            <Modal.Dialog >
                <Modal.Header closeButton>
                    <Modal.Title>Your details have been submitted.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={success} alt=""/>
                   
                </Modal.Body>

                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={CloseButton}>Close</Button> */}
                   
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
        
        <div className="w-100">
                <div className="booknow d-flex justify-content-center align-items-center ">
                    <h3>Book Our Logistic company Get a Fastest Delivery </h3>
                </div>
                <div className="row mx-0 justify-content-center">
                    <div className="col-lg-8 col-11 pt-5 ">    <p className="mb-1">Name</p>
                        <input className="mb-4 form-control form-control-lg " type="text"></input>
                        <p className="mb-1">Email</p>
                        <input className="mb-4 form-control form-control-lg" type="text"></input>
                        <p className="mb-1">Phone Number</p>
                        <input className="mb-4 form-control form-control-lg" type="text"></input>
                        <p className="mb-1">Address</p>
                        <input className=" mb-4 form-control form-control-lg" type="text"></input>
                        <p className="mb-1">Name of Item(s)</p>
                        <input className=" mb-4 form-control form-control-lg" type="text"></input>
                        <p className="mb-1">Item(s) Kg</p>
                        <input className="mb-4 form-control form-control-lg" type="text"></input>

                        <input className="booknow-butt form-control form-control-lg mb-5 mt-5" type="button" value="Submit" onClick={handleShow} />

                    </div>
                </div>
            </div></>
    )
}
export default BookNow