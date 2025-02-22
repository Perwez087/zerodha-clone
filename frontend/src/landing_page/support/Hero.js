import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; 

function Hero() {
  return (
    <div style={{ background: "#387ED1" }}>
      <div className="container p-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-8 col-md-12">
            <h4 className="mb-5 text-white">Support Portal</h4>
            <h3 className="mb-5 fs-3 text-white" style={{ fontWeight: "400" }}>
              Search for an answer or browse help topics to create a ticket
            </h3>

            {/* Search Input Section */}
            <div className="row mb-5">
              <div
                className="col d-flex search-container"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  className="search-input"
                  type="text"
                  name="search"
                  placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                />
                <i
                  className="fa-solid fa-magnifying-glass search-icon"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>

            {/* Links Section */}
            <div className="row">
              <div className="col d-flex flex-wrap">
                <p className="hero-link">
                  <Link className="text-white" to="/">
                    Track account opening
                  </Link>
                </p>
                <p className="hero-link">
                  <Link className="text-white" to="/">
                    Track segment activation
                  </Link>
                </p>
                <p className="hero-link">
                  <Link className="text-white" to="/">
                    Intraday margins
                  </Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="hero-link">
                  <Link className="text-white" to="/">
                    Kite user manual
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
            <p
              className="hero-link text-right"
              style={{
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              <Link className="text-white" to="/">
                Track tickets
              </Link>
            </p>
            <h4 className="fs-4 text-white">Featured</h4>
            <div className="col px-4 pt-2">
              <p className="hero-link">
                1.{" "}
                <Link className="text-white" to="/">
                  Current Buybacks - August 2024
                </Link>
              </p>
              <p className="hero-link">
                2.{" "}
                <Link className="text-white" to="/">
                  Offer for sale (OFS) - August 2024
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
