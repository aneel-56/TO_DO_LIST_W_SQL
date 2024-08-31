import React, { Component } from "react";

const Header = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "blue", padding: "15px 0", color: "#fafafa" }}
      ></div>
      <div className="container">
        <h5 style={{ color: "#fafafa" }}>TO DO LIST</h5>
      </div>
    </>
  );
};

export default Header;
