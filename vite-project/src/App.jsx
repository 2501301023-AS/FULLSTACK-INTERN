// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>ASHISH kUMAR</h1>
// //       <p>Mob no.:7496002241</p>
// //       <p>Email: AshishKumar@gmail.com</p>
// //     </div>
// //   )
// // }

// // export default App
// // import React from "react";
// // export default function App() {
// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         gap: "30px",
// //         minHeight: "150vh",
// //         background: "#f0f0f0",
// //         flexWrap: "wrap",
// //         fontFamily: "Arial, sans-serif",
// //       }}
// //     >
// //       <div
// //         style={{
// //           width: "480px",
// //           height: "320px",
// //           background: "#000",
// //           color: "#fff",
// //           borderRadius: "12px",
// //           position: "relative",
// //           overflow: "hidden",
// //           boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
// //         }}
// //       >
// //         <img
// //           src="/2.jpg"
// //           alt="Profile"
// //           style={{
// //             position: "absolute",
// //             top: "15px",
// //             right: "15px",
// //             width: "100px",
// //             height: "100px",
// //             borderRadius: "50%",
// //             objectFit: "cover",
// //             border: "3px solid #fff",
// //             boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
// //           }}
// //         />

// //         <div
// //           style={{
// //             position: "relative",
// //             padding: "25px",
// //             display: "flex",
// //             flexDirection: "column",
// //             justifyContent: "center",
// //             height: "100%",
// //           }}
// //         >
// //           <h1 style={{ margin: 0 }}>ASHISH KUMAR</h1>

// //           <h3
// //             style={{
// //               margin: "5px 0 20px",
// //               color: "#ff3333",
// //             }}
// //           >
// //             WEB DEVELOPER
// //           </h3>

// //           <p style={{ marginTop: 20 }}>📞 +91 7496002241</p>
// //           <p style={{ marginTop: 20 }}>✉️ Ashishkumar21@gmail.com</p>
// //           <p style={{ marginTop: 20 }}>📍 Panipat, India</p>

// //           <a
// //             href="https://www.linkedin.com/in/ashishkumar2008/"
// //             target="_blank"
// //             rel="noreferrer"
// //             style={{
// //               position: "absolute",
// //               // bottom: "25px",
// //               right: "25px",
// //               color: "#fff",
// //               textDecoration: "none",
// //               fontWeight: "900",
// //               background: "rgba(255,255,255,0.1)",
// //               padding: "8px 12px",
// //               borderRadius: "999px",
// //             }}
// //           >
// //             LinkedIn
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // it is not globally using component 1,2,3,4 
// // import React from 'react'
// // import ComponentOne from './Components/ComponentOne'
// // const App = () => {
// //   return (
// //     <div>
// //       <ComponentOne/>
// //     </div>
// //   )
// // }

// // export default App


// // access globally using Navbar.jsx,Profile.jsx,UserContex.jsx

// // import React from 'react'
// // import UserContext from './Components/UserContex'
// // import Navbar from './Components/Navbar'
// // const App = () => {
// //   const user="Geeta University"
// //   return (
// //     <div>
// //       <UserContext.Provider value={user}>
// // <Navbar/>

// //       </UserContext.Provider>
// //     </div>
// //   )
// // }

// // export default App



// // import React from 'react';
// // import { ThemeProvider, useTheme } from './Components/ThemeContext';
// // import './index.css';


// // const MainApp = () => {
// //   const { theme, toggleTheme } = useTheme();

// //   return (
// //     <div className="container">
// //       <h1>Current Mode: {theme.toUpperCase()}</h1>
// //       <button onClick={toggleTheme} className="toggle-btn">
// //         Switch to {theme === 'light' ? 'Dark 🌙' : 'Light ☀️'}
// //       </button>
// //     </div>
// //   );
// // };
// // const App = () => {
// //   return (
// //     <ThemeProvider>
// //       <MainApp />
// //     </ThemeProvider>
// //   );
// // };

// // export default App;

// import React, { useReducer, useState } from "react";
// import products from './Components/Products';
// import { CartReducer, initialState } from './Components/CartReducer';

// const App = () => {
//   const [state, dispatch] = useReducer(CartReducer, initialState);
//   const [coupon, setCoupon] = useState("");
  
 
//   const [sortOrder, setSortOrder] = useState("");

//   const getSortedProducts = () => {
//     const productsCopy = [...products];

//     if (sortOrder === "lowToHigh") {
//       return productsCopy.sort((a, b) => Number(a.price) - Number(b.price));
//     }
//     if (sortOrder === "highToLow") {
//       return productsCopy.sort((a, b) => Number(b.price) - Number(a.price));
//     }
    
//     return productsCopy; 
//   };

//   return (
//     <div>
//       <h1> Shopping Cart</h1>
//       <h2> Total : Rs {state.total}</h2>
      
//       <input
//         type="number"
//         placeholder="Discount %"
//         value={coupon}
//         onChange={(e) => {
//           const value = e.target.value;
//           if (Number(value) >= 100) {
//             alert("Coupon is not valid! Enter Valid Coupon");
//             return;
//           }
//           setCoupon(value);
//         }}
//       />

//       <button
//         onClick={() =>
//           dispatch({
//             type: "APPLY_DISCOUNT",
//             payload: Number(coupon),
//           })
//         }
//       >
//         Apply Coupon
//       </button>

//       <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
//         Clear Cart
//       </button>

//       <hr style={{ margin: "20px 0" }} />

//       <div style={{ marginBottom: 20 }}>
//         <label htmlFor="sort" style={{ marginRight: 10, fontWeight: "bold" }}>
//           Sort by Price:
//         </label>
//         <select 
//           id="sort" 
//           value={sortOrder} 
//           onChange={(e) => setSortOrder(e.target.value)}
//           style={{ padding: "5px 10px", borderRadius: "4px" }}
//         >
//           <option value="">Select Option</option>
//           <option value="lowToHigh">Price: Low to High</option>
//           <option value="highToLow">Price: High to Low</option>
//         </select>
//       </div>

    
//       {getSortedProducts().map((product) => (
//         <div key={product.id}
//           style={{
//             border: "1px solid gray",
//             padding: 15,
//             marginBottom: 15
//           }}
//         >
//           <h3>{product.name}</h3>
//           <p>₹{product.price}</p>
//           <button onClick={() => dispatch({
//             type: "ADD_ITEM",
//             payload: product,
//           })}>
//             Add to Cart
//           </button>
//         </div>
//       ))}
       
//       <h2>Cart</h2>

//       {state.cart.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             border: "1px solid black",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <h3>{item.name}</h3>
//           <p>Price : ₹{item.price}</p>

//           <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>
//             -
//           </button>

//           <span style={{ margin: "0 10px" }}>
//             {item.quantity}
//           </span>

//           <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}>
//             +
//           </button>
//         </div>
//       ))}

//       <h3>Discount : {state.discount}%</h3>
//       <h2>Total : ₹{state.total}</h2>
//     </div>
//   );
// };

// export default App;


// // import React from 'react'
// // import UseCallbackUseMemo from './Components/UseCallbackUseMemo'
// // const App = () => {
// //   return (
// //     <div>
// //       <UseCallbackUseMemo/>
// //     </div>
// //   )
// // }

// // export default App

// // import React from 'react'
// // import UseMemoExample from './Components/UseMemoExample'
// // const App = () => {
// //   return (
// //     <div>
// //       <UseMemoExample/>
// //     </div>
// //   )
// // }

// // export default App


// import React from 'react'
// import UseCallbackxample from './Components/UseCallbackxample'
// import Child from './Components/Child'
// const App = () => {
//   return (
//     <div>
//       <h1 className='text-3xl text-red-50'>Hello</h1>
//       <UseCallbackxample/>
// <Child/>
//     </div>
//   )
// }

// export default App









import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Cartitems from './Component/Cartitems';

const App = () => {
  const [view, setView] = useState('shop');
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'shop' ? (
          <div>
            <h2 className="text-xl font-black tracking-wide uppercase text-gray-900 mb-6">Catalog</h2>
            <ProductList />
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black uppercase tracking-wide text-gray-900">Your Cart Selection</h2>
              <button 
                onClick={() => setView('shop')} 
                className="text-black font-black italic text-xs uppercase hover:underline"
              >
                ← Continue Shopping
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 font-bold text-sm">Your cart is currently empty.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    {cartItems.map((item) => (
                      <Cartitems key={item.id} item={item} />
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase">Total Cost</p>
                      <p className="text-2xl font-black text-emerald-600">Rs {totalPrice}</p>
                    </div>
                    <button className="bg-black text-white font-black italic text-sm tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-zinc-800 transition">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;




































































































