import React from "react";
import bicycle from "../../images/bicycle.png"
import car from "../../images/car.png"
import box from "../../images/box.png"
import { Link } from "react-router-dom";
import PickUpModal from '../pick-up/PickUpModal'
import ProtectedRoute from "../Auth/ProtectedRoute";

const HomeService = () => {

  const service = [
    {
      icons: bicycle,
      heading: "Book a company representative",
      text: "At FABs Logistics, technology is more than a tool-it's the core of our operations. W e recognise its pivotal role in ensuring an unparalleled customer journey. To this end, our processes, solutions and services are meticulously crafted around cutting-edge technology. This enables us to provide you with cost-effective, secure and lightning-fast shipment deliveries, exemplifying our commitment to excellence.",
      button: "Book Now",
      link: "book-now"
    },

    {
      icons: car,
      heading: "Transportation Services",
      text: "Embracing innovation is a cornerstone of our transport services. At FABs logistics, we grasp the pivotal role technology plays in enhancing the transport experience. Thus, we've seamlessly intergrated modern technology into our operations. From streamlined booking processes to real-time tracking, our solutions ensure your cargo arrives swiftly,securely and with optimal efficiency. Elevate your transport experience with us and witness the power of technology in motion.",
      button: "HIRE A CAR",
      link: "transportation"
    },

    {
      icons: box,
      heading: "Pickup an Item",
      text: "Simplify your logistics experience wit us. Choose between two hassle-free options: opt for home delivery or conveniently pick up your items at our nearest office. We understand your preferences and our flexible approach ensures your convenience. Whether it's doorstep delivery or a quick visit to out nearby office, we've got you covered. The choice is yours, and your satisfsction is our priority.",
      button:  null,
      modal: <PickUpModal />
    },

    
  ];
  return (
    <div className="d-flex flex-column justify-content-center w-100 parent-service ">
      <div className="text-start mb-5">
        <h1 className="p-2" id="change">OUR SERVICES</h1>
      </div>

      <div className="w-100 d-flex justify-content-center ">
        <div className="row justify-content-center align-items-center mx-0 services">
          {service?.map(({ icons, heading, text, button, link, modal }, i) => (
            <div className="col-lg-4 col-md-4 col-sm-6 text-center align-items-center pb-3" key={i}>
              <div className="card border-0 text-center h-100  p-4 align-items-center ">
                <img src={icons} alt="" className="pb-5" />
                <h6 className="service-h pb-3">{heading}</h6>
                <p className="service-p pb-4">{text}</p>
                {
                  !button ?
                    modal :
                   
                    <Link to={`/${link}`} className="services-btn p-2">{button}</Link>
                    
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
