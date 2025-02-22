import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [buyOrders, setBuyOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("https://zerodha-clone-gtro.onrender.com/buyOrders")
      .then((response) => {
        setBuyOrders(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the buy orders!", error);
      });
  };

  const handleDelete = (orderId) => {
    axios
      .delete(`https://zerodha-clone-gtro.onrender.com/deleteOrder/${orderId}`)
      .then((response) => {
        alert(response.data.message);
        fetchOrders(); // Refresh orders after deletion
      })
      .catch((error) => {
        console.error("There was an error deleting the order!", error);
      });
  };

  return (
    <div className="orders">
      <h3 className="title">Orders({buyOrders.length})</h3>
      {buyOrders.length > 0 ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {buyOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      style={{ border: "none" }}
                      className="btn btn-danger"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-orders">
          <p>No buy orders placed yet.</p>
          <Link to={"/"} className="btn">
            Place an Order
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Orders = () => {
//   const [buyOrders, setBuyOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = () => {
//     axios
//       .get("https://zerodha-clone-gtro.onrender.com/buyOrders")
//       .then((response) => {
//         setBuyOrders(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the buy orders!", error);
//       });
//   };

//   const handleDelete = (orderId) => {
//     axios
//       .delete(`https://zerodha-clone-gtro.onrender.com/deleteOrder/${orderId}`)
//       .then((response) => {
//         alert(response.data.message);
//         fetchOrders(); // Refresh orders after deletion
//       })
//       .catch((error) => {
//         console.error("There was an error deleting the order!", error);
//       });
//   };

//   return (
//     <div className="orders">
//       <h3 className="title">Orders({buyOrders.length})</h3>
//       {buyOrders.length > 0 ? (
//         <div className="order-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {buyOrders.map((order, index) => (
//                 <tr key={index}>
//                   <td>{order.name}</td>
//                   <td>{order.qty}</td>
//                   <td>{order.price}</td>
//                   <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//                   <td>
//                     <button
//                       style={{ border: "none" }}
//                       className="btn btn-danger"
//                       onClick={() => handleDelete(order._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="no-orders">
//           <p>No buy orders placed yet.</p>
//           <Link to={"/"} className="btn">
//             Place an Order
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;
