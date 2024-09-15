import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "./styles/BrandDetail.css";

const BrandDetails = () => {
  const { id } = useParams();
  const brands = JSON.parse(localStorage.getItem('brands'));
  const brand = brands.find((b) => b.id === parseInt(id));

  return (
    <div className="brand-details-page">
      {/* Page Navigation Buttons */}
      <div className="page-buttons">
        <Link to="/" className="home-btn">Go to Home</Link>
        <span className="info-btn">Brand Detail Page</span>
      </div>

      <div className="brand-details">
        <img src={brand.image} alt={brand.name} />
        <h2>{brand.name}</h2>
        
        <p>{brand.description}</p>
        <a href={brand.website} target="_blank" rel="noopener noreferrer">Visit   Website</a>
      </div>
    </div>
  );
};

export default BrandDetails;
