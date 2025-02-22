import React from "react";
import "./Pricing.css"; 
function Pricing() {
  return (
    <div className="container pricing-container">
      <div className="row">
        {/* Pricing Text Section */}
        <div className="col-lg-4 col-md-12 mb-4">
          <h1 className="fs-2 mb-4 text-muted">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="pricing-link">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Pricing Card 1 */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center">
          <img
            className="pricing-img"
            src="media/images/pricing-eq.svg"
            alt="pricing"
          />
          <p className="text-muted pricing-text mt-2">Free account opening</p>
        </div>

        {/* Pricing Card 2 */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center">
          <img
            className="pricing-img"
            src="media/images/pricing-eq.svg"
            alt="pricing"
          />
          <p className="text-muted pricing-text mt-2">
            Free equity delivery and direct mutual funds
          </p>
        </div>

        {/* Pricing Card 3 */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center">
          <img
            className="pricing-img"
            src="media/images/other-trades.svg"
            alt="pricing"
          />
          <p className="text-muted pricing-text mt-2">
            Free equity delivery and direct mutual funds
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
