import { useEffect, useReducer, useState } from "react";

const initialvalue = {
  firstname: null,
  lastname: null,
  email: null,
  phone: null,
};


const reducer = (state, action) => {
  console.log("state :>> ", state);
  console.log("action", action);

  const { type, payload } = action;
  switch (type) {
    case "firstname":
      return { ...state, firstname: payload };
    case "lastname":
      return { ...state, lastname: payload };
    case "email":
      return { ...state, email: payload };
    case "phone":
      return { ...state, phone: payload };
    default:
      return { ...state };
  }
};

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  const [error,setError] = useState({});
  const[showerror,setShowError]  = useState(false);


  console.log('error :>> ', error);

  

  const handlechange = (type, value) => {
    dispatch({ type: type, payload: value });
  };

  const validator = (state) => {
    let errorrrrrr = {};

    if(!(state.email)?.trim()){
      errorrrrrr.email = "email id is important"
    }if(!(state.phone)?.trim()){
      errorrrrrr.phone = "phone number is important"
    }

    setError(errorrrrrr);
  }



  const handlesumbit= (e) =>{
   e.preventDefault()   
   const isError = Object.keys(error).length > 0;

   if (isError){
    setShowError(true)
   }

  }

  useEffect(()=>{

    validator(state)

  },[state]);
  

  return (
    <div className="container ">
      <div className="card bg-secondary text-white mt-5 ">
        <form onSubmit={handlesumbit}>
        
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="firstname"
              value={state.firstname}
              aria-describedby="emailHelp"
              onChange={(e) => handlechange("firstname", e.target.value)}
            />
          </div>
          

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={state.lastname}
              name="lastname"
              onChange={(e) => handlechange("lastname", e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email ID:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={state.email}
              aria-describedby="emailHelp"
              onChange={(e) => handlechange("email", e.target.value)}
            />
          </div>
          <div>
           {showerror && !!error?.email && <p>{error?.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone:
            </label>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={state.password}
              id="exampleInputPassword1"
              onChange={(e) => handlechange("phone", e.target.value)}
            />
          </div>
          <div>
          <div>
           {showerror && !!error?.phone && <p>{error?.phone}</p>}
          </div>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-dark" type="sumbit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      <div>
        
      </div>
     
    </div>
  );
};

export default Signup;
