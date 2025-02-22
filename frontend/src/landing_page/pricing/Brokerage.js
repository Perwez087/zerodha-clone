import React from "react";
import { Link } from "react-router-dom";
function Brokerage() {
  return (
    <div className="container mt-5" style={{ marginBottom: "8%" }}>
      <div className="row">
        <div
          className="col p-5 mx-5 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <h2 style={{ color: "#387ed1", fontWeight: "400" }} className="fs-4">
            <Link style={{ textDecoration: "none" }} to="/">
              Brokerage calculator
            </Link>
          </h2>
          <h2 style={{ color: "#387ed1", fontWeight: "400" }} className="fs-4">
            <Link style={{ textDecoration: "none" }} to="/">
              List of charges
            </Link>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <p style={{ fontSize: "13px" }}>
              <li>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>
            </p>

            <p style={{ fontSize: "13px" }}>
              <li>Digital contract notes will be sent via e-mail.</li>
            </p>

            <p style={{ fontSize: "13px" }}>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
            </p>

            <p style={{ fontSize: "13px" }}>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
            </p>

            <p style={{ fontSize: "13px" }}>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
            </p>

            <p style={{ fontSize: "13px" }}>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
