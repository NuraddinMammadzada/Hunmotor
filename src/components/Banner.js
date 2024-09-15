import React, { useState } from 'react';
import './styles/Banner.css'; // Importing the CSS file for styling

const Banner = () => {
  const [language, setLanguage] = useState('AZ'); // Default language is Azerbaijani

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const getText = (azText, enText, ruText) => {
    switch (language) {
      case 'AZ':
        return azText;
      case 'EN':
        return enText;
      case 'RU':
        return ruText;
      default:
        return azText;
    }
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          {getText('Tərəfdaş olmaq istəyərsiniz?', 'Do you want to be a partner?', 'Хотите стать партнером?')}
        </div>
        <button className="banner-button">
          {getText('Bizimlə əlaqə saxlayın', 'Contact Us', 'Свяжитесь с нами')}
        </button>
        <div className="language-selector">
 
        </div>
      </div>
    </div>
  );
};

export default Banner;
