import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const init = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(init);
  const [error, setError] = useState({});
  const [showError, setShowError] = useState(false);
  const [auth, setAuth] = useState({ email: "admin", password: "admin" });

  const navigate = useNavigate();

  const location = useLocation();

  const handlechange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const validater = (data) => {
    let errorss = {};

    if (!data?.email) {
      errorss.email = "Email is required.";
    }
    if (!data?.password) {
      errorss.password = "password is required.";
    }
    return setError(errorss);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const isError = Object.keys(error).length > 0;
    if (isError) {
      setShowError(true);
    } else {
      const { email, password } = data;
      if (email === auth?.email && password === auth.password) {
        navigate("/");
      } else {
        setShowError(true);
        setError({ ...error, invalid: "Invalid user" });
      }
    }
  };

  useEffect(() => {
    validater(data);
  }, [data]);

  useEffect(() => {
    console.log("location.state", location.state);
    setAuth(prev => ({...prev, password: location?.state?.password}))
  }, [location?.state]);

  return (
    <div className="container ">
      <div className="card bg-info text-white mt-5 ">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={data.email}
              onChange={handlechange}
            />
            {showError && error?.email && (
              <p className="text-danger">{error?.email || null}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              className="form-control"
              id="exampleInputPassword1"
              onChange={handlechange}
            />
            {showError && error?.password && (
              <p className="text-danger">{error?.password || null}</p>
            )}

            <p className="text-end">
              {/* <Link 
              to={{pathname: "/resetpassword", state:   }>? Forget Password</Link> */}
              <Link to="/resetpassword" className="link">
                Forget Password
              </Link>
            </p>
          </div>
          {showError && error?.invalid && (
            <p className="text-danger">{error?.invalid}</p>
          )}

          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-dark" type="sumbit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
