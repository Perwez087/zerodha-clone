import React from "react";
import { Link } from "react-router-dom";
import "./Universe.css"; 

function Universe() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col p-5 text-center">
          <p
            className="text-muted"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "10%",
            }}
          >
            Want to know more about our technology stack? Check out the{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              Zerodha.tech
            </Link>{" "}
            blog.
          </p>
          <h2 className="mt-5 text-muted">The Zerodha Universe</h2>
          <p
            className="mt-4 text-muted"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="row p-5">
            <div className="col-lg-4 col-md-6 p-4 text-center">
              <img
                className="universe-image"
                src="media/images/zerodhafundhouse.png"
                alt="zerodhafundhouse"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 p-4 text-center">
              <img
                className="universe-image"
                src="media/images/sensibull.svg"
                alt="sensibull"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 p-4 text-center">
              <img
                className="universe-image"
                src="media/images/tijori.svg"
                alt="tijori"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
          </div>

          {/* Second row of images */}
          <div className="row px-5">
            <div className="col-lg-4 col-md-6 p-4 text-center">
              <img
                className="universe-image"
                src="media/images/streak-logo.png"
                alt="streak-logo"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 p-4 text-center">
              <img
                className="universe-image"
                src="media/images/smallcase-logo.png"
                alt="smallcase-logo"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 p-4 text-center">
              <img
                className="universe-image"
                src="media/images/ditto-logo.png"
                alt="ditto-logo"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>

          {/* Signup Button */}
          <button
            className="p-2 btn btn-primary fs-5 mt-5 universe-btn"
            style={{
              backgroundColor: "#387ed1",
              color: "white",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
