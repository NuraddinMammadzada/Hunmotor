import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Brands.css";

const BrandList = () => {
  const brands = JSON.parse(localStorage.getItem('brands'));

  return (
    <div className="brand-list-page">
      {/* Page Navigation Buttons */}
      <div className="page-buttons">
        <Link to="/" className="home-btn">Go to Home</Link>
        <span className="info-btn">Brands Page</span>
      </div>

      <div className="brand-list">
        {brands.map((brand) => (
          <div className="brand-card" key={brand.id}>
            <Link to={`/brand/${brand.id}`}>
              <img src={brand.image} alt={brand.name} className="brand-image" />
              <h3 className="brand-name">{brand.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
