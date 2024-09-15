import React from 'react';
import './styles/CertificatesPage.css';

const certificates = [
    // Array of certificate image URLs, all linking to the large certificate image.
    { id: 1, src: 'https://cdn.cisct.net/uploads/arazmotors-b2c/certificates/large/70ca707a4f0e48cf9f667bfe0ad612be.jpg' },
    { id: 2, src: 'https://cdn.cisct.net/uploads/arazmotors-b2c/certificates/large/70ca707a4f0e48cf9f667bfe0ad612be.jpg' },
    { id: 3, src: 'https://cdn.cisct.net/uploads/arazmotors-b2c/certificates/large/70ca707a4f0e48cf9f667bfe0ad612be.jpg' },
    { id: 4, src: 'https://cdn.cisct.net/uploads/arazmotors-b2c/certificates/large/70ca707a4f0e48cf9f667bfe0ad612be.jpg' }, 
     { id: 5, src: 'https://cdn.cisct.net/uploads/arazmotors-b2c/certificates/large/70ca707a4f0e48cf9f667bfe0ad612be.jpg' },
    { id: 6, src: 'https://cdn.cisct.net/uploads/arazmotors-b2c/certificates/large/70ca707a4f0e48cf9f667bfe0ad612be.jpg' },
    // Add more certificates as needed
];

const CertificatesPage = () => {
    return (
        <div className="certificates-page">
            <button className="home-button" onClick={() => window.location.href = '/'}>
                Ana səhifə 
            </button>

            <div className="certificates-grid">
                {certificates.map(cert => (
                    <a key={cert.id} href={cert.src} target="_blank" rel="noopener noreferrer" className="certificate-link">
                        <img src={cert.src} alt={`Certificate ${cert.id}`} className="certificate-img" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CertificatesPage;
