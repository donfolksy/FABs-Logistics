const Login = () => {
  return (
    <div className="login-parent  d-flex justify-content-center align-items-center w-100 h-100" style={{margin: "7rem 0"}}>
      <div className="login-body row mx-0 justify-content-center align-items-center w-100 h-100">
        <form action="" className="col-lg-5 col-11 p-5  login-one" >
            <h5 className="pb-4">Sign in to your account</h5>
        <div>
          <label for="email" className="   d-block">
            Email Address
          </label>
          <input type="text" id="email" name="email" className="form-control" />
        </div>
        <div>
        <label for="password" className="d-block">Password</label>
        <input type="text" id="password" name="password" className="form-control" /></div>
        
        {/* <input type="button" value="Login" className="form-control mt-5"/> */}
        <button className="w-100 mt-4 p-1">Login</button>
        <h6 className="d-flex justify-content-center pt-2">Don’t have an account? <a href="/sign-up"> Sign up</a> </h6>
  
        </form>
      </div>
    </div>
  );
};
export default Login;
