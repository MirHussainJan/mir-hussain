import React from "react";

const Loader = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9999,
      background: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(5px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src="/loader.gif"
      alt="Loading..."
      style={{
        width: "300px",
        height: "300px",
      }}
    />
  </div>
);

export default Loader;
