import React from "react";
import "./OpenAccount.css";

function OpenAccount() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <div className="col">
          <h1 className="mt-5 mb-4 text-muted fs-2">Open a Zerodha account</h1>
          <p className="text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          {/* Call to Action Button */}
          <div className="col-12 signup-btn">
            <button className="p-2 btn signup-button">Sign up for free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
