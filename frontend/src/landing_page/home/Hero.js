import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        {/* Hero Image */}
        <div className="col-12">
          <img
            src="media/images/landing.png"
            alt="Hero image"
            className="logo-image mb-5"
          />
        </div>

        {/* Heading */}
        <div className="col-12">
          <h1 className="mt-5 text-muted">Invest in everything</h1>
        </div>

        {/* Description */}
        <div className="col-12">
          <p className="text-muted">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="col-12 signup-btn">
          <button className="p-2 btn signup-button">Sign up for free</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
