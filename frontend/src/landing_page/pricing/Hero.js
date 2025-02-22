import React from "react";
import "./Hero.css"; 

function Hero() {
  return (
    <div className="container text-center">
      <div className="row border-bottom">
        <div className="col" style={{ marginBottom: "8%", marginTop: "8%" }}>
          <h1 className="text-muted hero-title">Pricing</h1>
          <p className="text-muted hero-subtitle">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>
      </div>
      <div className="row border-bottom hero-content">
        <div className="col-md-4 col-12 mb-4">
          <img
            className="hero-img"
            src="media/images/pricing-eq.svg"
            alt="pricing"
          />
          <h2 className="text-muted">Free equity delivery</h2>
          <p className="text-muted mt-4 hero-text">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </div>
        <div className="col-md-4 col-12 mb-4">
          <img
            className="hero-img"
            src="media/images/other-trades.svg"
            alt="pricing"
          />
          <h2 className="text-muted">Intraday and F&O trades</h2>
          <p className="text-muted mt-4 hero-text">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-md-4 col-12 mb-4">
          <img
            className="hero-img"
            src="media/images/pricing-eq.svg"
            alt="pricing"
          />
          <h2 className="text-muted">Free direct MF</h2>
          <p className="text-muted mt-4 hero-text">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
