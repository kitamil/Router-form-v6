import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
   return (
    <div className="container">
      <div>
      <nav className="navbar navbar-expand-lg text-primary bg-dark">
        <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="nav-item ">
            <Link to="/" className="nav-link text-white">Credo</Link>
            
          </li>
          <div className="d-flex">
          <li className="nav-item  ">
            <Link to="/login" className="nav-link text-white ">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link text-white">SignUp</Link>
          </li>
          </div>
        </ul>
        </div>     
      </nav>
      </div>
      <div className="image mt-5">
      <img src="https://www.credo.health/wp-content/uploads/2022/05/cropped-Credo_logo_with-tagline-1-1.png" className="img-thumbnail" alt="credo"/>

      </div>
      <div className="text-center mt-5 fw-bolder">
        <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
        </p>
      </div>

      
      
    </div>
  );
};

export default Home;
