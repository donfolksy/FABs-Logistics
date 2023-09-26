import React from "react";
import Modal from "react-modal";
import './Books.css'
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "100px", 
  },
};

const Books = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/payment");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Booking Information Modal"
    >
      <div className="mode">
      <div className="modal-header">
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
      </div>
      </div>
      <div className="modal-content-2">
        <h2>Booking Information</h2>
        <p>Please fill in the details to book your ride:</p>
          <form action="">
          <select name="" id="">
                  <option value="">price/per day</option>
                  <option value="">$500/per day</option>
                  <option value="">$1000/2 days</option>
                  <option value="">$1500/3 days</option>
                  <option value="">$2000/4 days</option>
                  <option value="">$2500/5 days</option>
                  <option value="">$3000/6 days</option>
                  <option value="">$3500/7 days</option>
                  <option value="">$4000/8 days</option>
                  <option value="">$4500/9 days</option>
                  <option value="">$5000/10 days</option>
              </select>
              <br />
              <br />
            <label htmlFor="Name">Name:</label> <br />
            <input type="text" placeholder="Name" required/><br />
            <label htmlFor="Name">Phone number:</label> <br />
            <input type="text" placeholder="xxx xxx xxx xx" required/><br />
            <label htmlFor="Email">Email:</label> <br />
            <input type="text" placeholder="fab@gmail.com" required/><br />
            <br />
          <button onClick={handleProceed}>Proceed</button>
          </form>
        
      </div>
    </Modal>
  );
};

export default Books;
