// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav class="px-5 p-3 navbar border-bottom navbar-expand-lg navbar-light bg-white">
//       <Link class="navbar-brand px-5" aria-current="page" to="/">
//         <img style={{ width: "20%" }} src="media/images/logo.svg" alt="logo" />
//       </Link>

//       <form>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item">
//               <Link
//                 class="nav-link active px-4"
//                 id="menu"
//                 aria-current="page"
//                 to="/signup"
//               >
//                 Signup <span class="sr-only">(current)</span>
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link
//                 class="nav-link active px-4"
//                 id="menu"
//                 aria-current="page"
//                 to="/about"
//               >
//                 About
//               </Link>
//             </li>
//             <li class="nav-item ">
//               <Link
//                 class="nav-link active px-4"
//                 id="menu"
//                 aria-current="page"
//                 to="/products"
//               >
//                 Products
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link
//                 class="nav-link active px-4"
//                 id="menu"
//                 aria-current="page"
//                 to="/pricing"
//               >
//                 Pricing
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link
//                 class="nav-link active px-4"
//                 id="menu"
//                 aria-current="page"
//                 to="/support"
//               >
//                 Support
//               </Link>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link active px-4" aria-current="page" href="#">
//                 <i class="fa-solid fa-bars"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </form>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-5 p-3">
      <Link className="navbar-brand " to="/">
        <img src="media/images/logo.png" alt="logo" id="logo-img" />
      </Link>

      {/* Move Navbar Toggler (Hamburger icon) to the right */}
      <button
        className="navbar-toggler ms-auto menu-btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          className="navbar-toggler-icon"
          style={{ fontSize: "1.5rem" }}
        ></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link px-4" id="menu" to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" id="menu" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" id="menu" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" id="menu" to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" id="menu" to="/support">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
