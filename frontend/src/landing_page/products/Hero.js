// import React from "react";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <div className="container p-5 border-bottom">
//       <div className="row text-center pb-5">
//         <h1 style={{ fontSize: "45px" }} className="mt-5 text-muted">
//           Technology
//         </h1>
//         <p
//           style={{ fontSize: "22px", fontWeight: "400" }}
//           className="text-muted"
//         >
//           Sleek, modern, and intuitive trading platforms
//         </p>
//         <p
//           style={{ fontSize: "17px", fontWeight: "400" }}
//           className="text-muted mt-2"
//         >
//           Check out our{" "}
//           <Link to="/" style={{ textDecoration: "none" }}>
//             {" "}
//             investment offerings{" "}
//             <i
//               style={{ fontSize: "12px" }}
//               class="fa-solid fa-arrow-right-long"
//             ></i>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Import the updated CSS

function Hero() {
  return (
    <div className="container p-5 border-bottom">
      <div className="row text-center pb-5">
        <h1 className="mt-5 text-muted hero-title">Technology</h1>
        <p className="text-muted hero-subtitle">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="text-muted hero-text mt-2">
          Check out our{" "}
          <Link to="/" className="hero-link">
            {" "}
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
