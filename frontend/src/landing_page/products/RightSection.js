// import React from "react";
// import { Link } from "react-router-dom";

// function RightSection({
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
//         <div className="col-5" style={{ marginTop: "15%" }}>
//           <h1 className="mb-4 fs-2">{productName}</h1>
//           <p style={{ fontSize: "18px", paddingRight: "35px" }}>
//             {productDescription}
//           </p>
//           <div className="row">
//             <div className="col d-flex">
//               <Link
//                 to={learnMore}
//                 style={{ fontSize: "18px", textDecoration: "none" }}
//               >
//                 {tryDemo}{" "}
//                 <i
//                   style={{ fontSize: "12px" }}
//                   class="fa-solid fa-arrow-right-long"
//                 ></i>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-7">
//           <img src={imageUrl} alt="Products Console" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightSection;

import React from "react";
import { Link } from "react-router-dom";
import "./RightSection.css"; // Import the updated CSS for responsive design

function RightSection({
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
        <div className="col-lg-5 col-12 text-center text-lg-left mt-lg-5 content-section">
          <h1 className="mb-4 fs-2">{productName}</h1>
          <p className="product-description">{productDescription}</p>
          <div className="row">
            <div className="col d-flex justify-content-center justify-content-lg-start">
              <Link to={learnMore} className="link-button">
                {tryDemo}{" "}
                <i className="fa-solid fa-arrow-right-long link-icon"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12 text-center">
          <img
            src={imageUrl}
            alt="Products Console"
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
