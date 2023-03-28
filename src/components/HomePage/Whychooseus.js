import band from "../../images/span.png"

const Whychooseus = () => {
  const choose = [
    {
      heading: "Latest Technology",
      text: "Technology and its application are fundamental at GIGL. We understand the role of technology in providing an exceptional customer experience. For this reason, our processes, products and services are built around modern technology to help us deliver your shipments cheaper, safely and at the speed of light.",
    },
    
    {
      heading: "Social Commerce",
      text: "Pivotal to successful social commerce transactions is the ability for the end-user to receive items where and when needed. FABS is the solution to efficient last-mile delivery. As a merchant, you only have to think about selling your products while FABS delivers to your customers worldwide.",
    },

    {
      heading: "Guaranteed Delivery",
      text: "We are conscious of the relationship between time and money and utilize our resources optimally to meet your delivery needs. Our service commitment to you is hassle-free delivery. We are large enough to efficiently handle deliveries for large corporations yet small enough to deploy innovative delivery solutions that help small businesses.",
    },
  ];
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="sub-whychoose">
        <div className="">
          <h1>WHY CHOOSE US.</h1>
        </div>
        <div className="row mx-0">
          {choose?.map(({ heading, text }, i) => (
            <div className="col-lg-4 postion-absolute">
              <div className="card border-0
               h-100 p-4 position-relative">
                    <div className="band">
                        <img src={band} alt="" />
                    </div>
                <div className="d-flex justify-conent-center">
                  <h1>0{i + 1}</h1>
                  <p>{heading}</p>
                </div>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
