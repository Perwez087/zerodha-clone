import React from "react";
import { Link } from "react-router-dom";
import "./Education.css"; // External CSS for cleaner code

function Education() {
  return (
    <div className="container">
      <div className="row">
        {/* Image Section */}
        <div className="col-lg-6 col-md-12">
          <img
            className="education-image img-fluid"
            src="media/images/index-education.svg"
            alt="education"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
          <h3 className="mt-5 mb-4">Free and open market education</h3>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Link to="/" className="education-link">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <Link to="/" className="education-link">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;
