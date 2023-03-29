const Update = () => {
  return (
    <div className="   row mx-0 w-100 justify-content-center align-items-center">
      <div className="col-lg-10 update-parent col-11 my-5 d-flex justify-content-between p-4 align-items-center">
        <div className=" ">
          <p>Be the first to receive the latest news and product updates</p>
      
        </div>

        <div className="">
          <form className="update-form">
            <input type="email" placeholder="Enter email"></input>{" "}
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Update;
