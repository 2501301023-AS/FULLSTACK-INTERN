// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>ASHISH kUMAR</h1>
//       <p>Mob no.:7496002241</p>
//       <p>Email: AshishKumar@gmail.com</p>
//     </div>
//   )
// }

// export default App
// import React from "react";
// export default function App() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "30px",
//         minHeight: "150vh",
//         background: "#f0f0f0",
//         flexWrap: "wrap",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           width: "480px",
//           height: "320px",
//           background: "#000",
//           color: "#fff",
//           borderRadius: "12px",
//           position: "relative",
//           overflow: "hidden",
//           boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
//         }}
//       >
//         <img
//           src="/2.jpg"
//           alt="Profile"
//           style={{
//             position: "absolute",
//             top: "15px",
//             right: "15px",
//             width: "100px",
//             height: "100px",
//             borderRadius: "50%",
//             objectFit: "cover",
//             border: "3px solid #fff",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
//           }}
//         />

//         <div
//           style={{
//             position: "relative",
//             padding: "25px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             height: "100%",
//           }}
//         >
//           <h1 style={{ margin: 0 }}>ASHISH KUMAR</h1>

//           <h3
//             style={{
//               margin: "5px 0 20px",
//               color: "#ff3333",
//             }}
//           >
//             WEB DEVELOPER
//           </h3>

//           <p style={{ marginTop: 20 }}>📞 +91 7496002241</p>
//           <p style={{ marginTop: 20 }}>✉️ Ashishkumar21@gmail.com</p>
//           <p style={{ marginTop: 20 }}>📍 Panipat, India</p>

//           <a
//             href="https://www.linkedin.com/in/ashishkumar2008/"
//             target="_blank"
//             rel="noreferrer"
//             style={{
//               position: "absolute",
//               // bottom: "25px",
//               right: "25px",
//               color: "#fff",
//               textDecoration: "none",
//               fontWeight: "900",
//               background: "rgba(255,255,255,0.1)",
//               padding: "8px 12px",
//               borderRadius: "999px",
//             }}
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


// it is not globally using component 1,2,3,4 
// import React from 'react'
// import ComponentOne from './Components/ComponentOne'
// const App = () => {
//   return (
//     <div>
//       <ComponentOne/>
//     </div>
//   )
// }

// export default App


// access globally using Navbar.jsx,Profile.jsx,UserContex.jsx

// import React from 'react'
// import UserContext from './Components/UserContex'
// import Navbar from './Components/Navbar'
// const App = () => {
//   const user="Geeta University"
//   return (
//     <div>
//       <UserContext.Provider value={user}>
// <Navbar/>

//       </UserContext.Provider>
//     </div>
//   )
// }

// export default App



// import React from 'react';
// import { ThemeProvider, useTheme } from './Components/ThemeContext';
// import './index.css';


// const MainApp = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="container">
//       <h1>Current Mode: {theme.toUpperCase()}</h1>
//       <button onClick={toggleTheme} className="toggle-btn">
//         Switch to {theme === 'light' ? 'Dark 🌙' : 'Light ☀️'}
//       </button>
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <ThemeProvider>
//       <MainApp />
//     </ThemeProvider>
//   );
// };

// export default App;


// import React from 'react'
// import CounterUsingUseReducer from './Components/CounterUsingUseReducer'
// const App = () => {
//   return (
//     <div>
//       <CounterUsingUseReducer/>
//     </div>
//   )
// }

// export default App
import React, { useReducer, useState } from "react";


import products from './Components/Products';
import { CartReducer, initialState } from './Components/CartReducer'
const App = () => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [coupon, setCoupon] = useState("");
  
  return (
    <div>
      <h1> Shopping Cart</h1>
      <h2> Total : Rs {state.total}</h2>
     <input
  type="number"
  placeholder="Discount %"
  value={coupon}
  onChange={(e) => {
    const value = e.target.value;

    if (Number(value) >= 100) {
      alert("Coupon is not valid!  Enter Valid Coupon")
      
      return;
    }

    setCoupon(value);
  }}
/>

<button
  onClick={() =>
    dispatch({
      type: "APPLY_DISCOUNT",
      payload: Number(coupon),
    })
  }
>
  Apply Coupon
</button>

<button
  onClick={() => dispatch({ type: "CLEAR_CART" })}
>
  Clear Cart
</button>
      {
        products.map((product) => (
          <div key={product.id}
            style={{
              border: "1px solid gray",
              padding: 15,
              marginBottom: 15
            }}
          >

            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => dispatch({
  type: "ADD_ITEM",
  payload: product,
})}>Add to Cart</button>
          </div>
        ))
      }
     
    <h2>Cart</h2>

{state.cart.map((item) => (
  <div
    key={item.id}
    style={{
      border: "1px solid black",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    <h3>{item.name}</h3>

    <p>Price : ₹{item.price}</p>

    <button
      onClick={() =>
        dispatch({
          type: "DECREMENT",
          payload: item.id,
        })
      }
    >
      -
    </button>

    <span style={{ margin: "0 10px" }}>
      {item.quantity}
    </span>

    <button
      onClick={() =>
        dispatch({
          type: "INCREMENT",
          payload: item.id,
        })
      }
    >
      +
    </button>
  </div>
))}

<h3>Discount : {state.discount}%</h3>
<h2>Total : ₹{state.total}</h2>
    </div>
  )
}

export default App
















































































































































































































































































































