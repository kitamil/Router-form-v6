import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const init = {
  password: "",
  confirmpassword: "",
};

const Resetpassword = () => {
 
  const navigate = useNavigate();

  const [pass, setPass] = useState(init);
  const [error, setError] = useState({});
  const [showError, setShowError] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setPass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (pass) => {
    let errorss = {};

    if (!pass?.password) {
      errorss.password = "Please enter the password";
    }
    if (!pass?.confirmpassword) {
      errorss.confirmpassword = "Please enter the confirmpassword";
    }
    if (pass.confirmpassword !== pass.password) {
      errorss.invalid = "New password should match with confirm password";
    }
    return setError(errorss);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const isError = Object.keys(error).length > 0;

    if (isError) {
      setShowError(true);
    } else {
      navigate('/login', { state: { password: pass.confirmpassword } })
    }
  };

  useEffect(() => {
    validate(pass);
  }, [pass]);

  return (
    <div className="container ">
      <div className="card bg-info text-white mt-5 ">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="password"
              value={pass.password}
              onChange={handlechange}
            />
          </div>
          <div>{showError && error?.password && <p>{error.password}</p>}</div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="confirmpassword"
              value={pass.confirmpassword}
              onChange={handlechange}
            />
          </div>
          <div>
            {showError && error?.confirmpassword && (
              <p>{error.confirmpassword}</p>
            )}
          </div>
          <div>
            {showError && !error?.confirmpassword && error?.invalid && (
              <p>{error.invalid}</p>
            )}
          </div>

          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-dark" type="sumbit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
