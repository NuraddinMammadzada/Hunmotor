import React from "react";
import "./styles/Sect4.css";

const MapSection = () => {
  return (
    <section
      className="bg-map d-flex align-items-center"
      style={{
        backgroundImage: "url('https://arazmotors.com/assets/landing/img/xerite.svg?v=0178842cdd83ec06976dbd3b112b8b704b')",
      }}
    >
      <div className="container-fluid">
        <div className="line-bg-map">
          <div className="card-bg-map">
            <img
              src="https://arazmotors.com/assets/landing/img/green-icon-az.svg?v=0178842cdd83ec06976dbd3b112b8b704b"
              alt="green icon"
            />
          </div>
          <div className="card-bg-map">
            <img
              src="https://arazmotors.com/assets/landing/img/lightgreen-icon-az.svg?v=0178842cdd83ec06976dbd3b112b8b704b"
              alt="light green icon"
            />
          </div>
          <div className="card-bg-map">
            <img
              src="https://arazmotors.com/assets/landing/img/yellow-icon-az.svg?v=0178842cdd83ec06976dbd3b112b8b704b"
              alt="yellow icon"
            />
          </div>
          <div className="card-bg-map">
            <img
              src="https://arazmotors.com/assets/landing/img/to%20parts.svg?v=0178842cdd83ec06976dbd3b112b8b704b"
              alt="To Parts logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
