import woman from "../../images/woman.png";
import column from "../../images/column.png";
const Testimonial = () => {
  const testimony = [
    {
      head1: "More than 70+ Satisfied ",
      text: "Pivotal to successful social commerce transactions is the ability for the end-user to receive items where and when needed. FABS is the solution to efficient last-mile delivery.",
      img1: woman,
      img2: column,
    },
  ];
  return (
    <div
      className="w-100 row justify-content-center align-items-center testimonial"
      style={{ padding: "4rem 0" }}
    >
      <div className="sub-testimonial col-10 ">
        <div className="row mx-0">
          <div className="test-one col-lg-6">
            <p className="test-one ps-5">Client Testimonial</p>
            <h4 className="test-one">More than 70+ Satistied</h4>
            <h4 className="test-one">Client Testimonial</h4>
          </div>
          <div className="col-lg-6">
            {" "}
            {testimony?.map(({ img1, img2, head1, head2, text }, i) => (
              <div className="test-two d-flex flex-column justify-content-center align-item-center d-flex p-5">
                <p>{text}</p>
                <div className="d-flex justify-content-between">
                  <img src={img1} />
                  <img src={img2} className=""/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
