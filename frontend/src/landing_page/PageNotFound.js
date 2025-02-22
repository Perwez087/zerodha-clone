import React from "react";

function PageNotFound() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <div className="col mt-5">
          <h1 className="mt-5 mb-4 text-muted">404 Not Found</h1>
          <p className="text-muted">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
