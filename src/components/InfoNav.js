import React, { useState } from 'react';
import './styles/InfoNav.css'; // Optional, if you want to use a separate CSS file

const InfoNav = () => {
  const [language, setLanguage] = useState('AZ'); // Set default language to Azerbaijani

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
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
        return enText;
    }
  };

  return (
    <div className="info-nav">
      {/* Left section: Contact info */}
      <div className="contact-info">
        {getText(
          'Əlavə məlumat üçün | (+99450) 713 81 81',
          'For more information | (+99450) 713 81 81',
          'Для получения дополнительной информации | (+99450) 713 81 81'
        )}
        <a
          href="https://wa.me/994507138181"
          target="_blank"
          rel="noopener noreferrer"
        >
          {getText('Whatsapp əlaqə', 'WhatsApp Contact', 'Связь через WhatsApp')}
        </a>
      </div>

      {/* Right section: Social media and language selector */}
      <div className="social-icons">
        {/* Social media icons */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img className="social-icons"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img
          className="social-icons"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
          />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img
          className="social-icons"
            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
            alt="LinkedIn"
          />
        </a>

        {/* Language selector dropdown */}
     
    
      </div>
    </div> 
  );
};

export default InfoNav;
