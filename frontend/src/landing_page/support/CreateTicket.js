import React from "react";
import "./CreateTicket.css"; 

function CreateTicket() {
  return (
    <div className="container mb-5 p-5">
      <div className="row">
        <div className="col">
          <h4 className="text-muted" style={{ fontWeight: "400" }}>
            To create a ticket, select a relevant topic
          </h4>
        </div>
      </div>
      <div className="row">
        {/* Column for Account Opening */}
        <div className="col-lg-4 col-md-6 mt-5">
          <h4 className="text-muted" style={{ fontWeight: "400" }}>
            <i style={{ fontSize: "18px" }} className="fa-solid fa-plus"></i>{" "}
            Account Opening
          </h4>
          <div className="px-4 text-primary">
            <p>Getting started</p>
            <p>Online</p>
            <p>Offline</p>
            <p>Charges</p>
            <p>Company, Partnership and HUF</p>
            <p>Non Resident Indian (NRI)</p>
          </div>
        </div>

        {/* Column for Your Zerodha Account */}
        <div className="col-lg-4 col-md-6 mt-5">
          <h4 className="text-muted" style={{ fontWeight: "400" }}>
            <i style={{ fontSize: "18px" }} className="fa-regular fa-user"></i>{" "}
            Your Zerodha Account
          </h4>
          <div className="px-4 text-primary">
            <p>Login credentials</p>
            <p>Your Profile</p>
            <p>Account modification and segment addition</p>
            <p>CMR & DP ID</p>
            <p>Nomination</p>
            <p>Transfer and conversion of shares</p>
          </div>
        </div>

        {/* Column for Trading and Markets */}
        <div className="col-lg-4 col-md-6 mt-5">
          <h4 className="text-muted" style={{ fontWeight: "400" }}>
            <i
              style={{ fontSize: "18px" }}
              className="fa-solid fa-chart-line"
            ></i>{" "}
            Trading and Markets
          </h4>
          <div className="px-4 text-primary">
            <p>Trading FAQs</p>
            <p>Kite</p>
            <p>Margins</p>
            <p>Product and order types</p>
            <p>Corporate actions</p>
            <p>Kite features</p>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Column for Funds */}
        <div className="col-lg-4 col-md-6 mt-5">
          <h4 className="text-muted" style={{ fontWeight: "400" }}>
            <i style={{ fontSize: "18px" }} className="fa-solid fa-wallet"></i>{" "}
            Funds
          </h4>
          <div className="px-4 text-primary">
            <p>Fund withdrawal</p>
            <p>Adding funds</p>
            <p>Adding bank accounts</p>
            <p>eMandates</p>
          </div>
        </div>

        {/* Column for Your Console */}
        <div className="col-lg-4 col-md-6 mt-5">
          <h4 className="text-muted" style={{ fontWeight: "400" }}>
            <i
              style={{ fontSize: "18px" }}
              className="fa-regular fa-copyright"
            ></i>{" "}
            Your Console
          </h4>
          <div className="px-4 text-primary">
            <p>IPO</p>
            <p>Portfolio</p>
            <p>Funds statement</p>
            <p>Profile</p>
            <p>Reports</p>
            <p>Referral program</p>
          </div>
        </div>

        {/* Column for Coin */}
        <div className="col-lg-4 col-md-6 mt-5">
          <h4 className="text-muted" style={{ fontWeight: "400" }}>
            <i style={{ fontSize: "18px" }} className="fa-solid fa-coins"></i>{" "}
            Coin
          </h4>
          <div className="px-4 text-primary">
            <p>Understanding mutual funds and Coin</p>
            <p>Coin app</p>
            <p>Coin web</p>
            <p>Transactions and reports</p>
            <p>National Pension Scheme (NPS)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
