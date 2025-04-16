import React from "react";

const ServiceCard = ({ title, description }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "20px",
      margin: "10px",
      flex: "1 1 calc(33% - 20px)",
      boxSizing: "border-box",
    }}
  >
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
