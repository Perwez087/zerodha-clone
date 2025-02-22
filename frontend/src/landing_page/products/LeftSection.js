// import React from "react";
// import { Link } from "react-router-dom";

// function LeftSection({
//   imageUrl,
//   productName,
//   productDescription,
//   tryDemo,
//   learnMore,
//   googlePlayStore,
//   applePlayStore,
// }) {
//   return (
//     <div className="container p-5">
//       <div className="row">
//         <div className="col-7">
//           <img src={imageUrl} alt="products-kite" />
//         </div>
//         <div className="col-5 mt-5" style={{ paddingLeft: "10%" }}>
//           <h1 className="mb-4 fs-2 text-muted">{productName}</h1>
//           <p style={{ fontSize: "18px" }}>{productDescription}</p>
//           <div className="row">
//             <div className="col d-flex">
//               <Link
//                 to={tryDemo}
//                 style={{
//                   marginRight: "20%",
//                   textDecoration: "none",
//                   fontSize: "18px",
//                 }}
//               >
//                 {tryDemo}{" "}
//                 <i
//                   style={{ fontSize: "12px" }}
//                   class="fa-solid fa-arrow-right-long"
//                 ></i>
//               </Link>
//               <Link
//                 to={learnMore}
//                 style={{ fontSize: "18px", textDecoration: "none" }}
//               >
//                 {learnMore}{" "}
//                 <i
//                   style={{ fontSize: "12px" }}
//                   class="fa-solid fa-arrow-right-long"
//                 ></i>
//               </Link>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col mt-4">
//               <img
//                 style={{
//                   marginRight: "5%",
//                 }}
//                 src={googlePlayStore}
//                 alt="google"
//               />
//               <img src={applePlayStore} alt="apple" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftSection;

import React from "react";
import { Link } from "react-router-dom";
import "./LeftSection.css"; // Import the updated CSS for responsive design

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlayStore,
  applePlayStore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-7 col-12 text-center">
          <img src={imageUrl} alt="products-kite" className="product-image" />
        </div>
        <div className="col-lg-5 col-12 mt-5 content-section">
          <h1 className="mb-4 fs-2 text-muted">{productName}</h1>
          <p className="product-description">{productDescription}</p>
          <div className="row">
            <div className="col d-flex justify-content-between links-section">
              <Link to={tryDemo} className="link-button">
                {tryDemo}{" "}
                <i className="fa-solid fa-arrow-right-long link-icon"></i>
              </Link>
              <Link to={learnMore} className="link-button">
                {learnMore}{" "}
                <i className="fa-solid fa-arrow-right-long link-icon"></i>
              </Link>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col store-icons">
              <img
                src={googlePlayStore}
                alt="google"
                className="store-icon mr-3"
              />
              <img src={applePlayStore} alt="apple" className="store-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
