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
import React from "react";
export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        minHeight: "150vh",
        background: "#f0f0f0",
        flexWrap: "wrap",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "480px",
          height: "320px",
          background: "#000",
          color: "#fff",
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src="/2.jpg"
          alt="Profile"
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        />

        <div
          style={{
            position: "relative",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h1 style={{ margin: 0 }}>ASHISH KUMAR</h1>

          <h3
            style={{
              margin: "5px 0 20px",
              color: "#ff3333",
            }}
          >
            WEB DEVELOPER
          </h3>

          <p style={{ marginTop: 20 }}>📞 +91 7496002241</p>
          <p style={{ marginTop: 20 }}>✉️ Ashishkumar21@gmail.com</p>
          <p style={{ marginTop: 20 }}>📍 Panipat, India</p>

          <a
            href="https://www.linkedin.com/in/ashishkumar2008/"
            target="_blank"
            rel="noreferrer"
            style={{
              position: "absolute",
              // bottom: "25px",
              right: "25px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "900",
              background: "rgba(255,255,255,0.1)",
              padding: "8px 12px",
              borderRadius: "999px",
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}