import React from 'react';
import './styles/Contact.css';

const contacts = [
  {
    title: 'Mərkəz Ofis',
    name: 'Kimse',
    phone1: '+994 12 404 15 76',
    phone2: '+994 55 959 60 30',
    email: 'info@hunmotors.com',
  },
  {
    title: 'Satış meneceri',
    name: 'Kimse',
    phone1: '+99412 404 15 76 (103)',
    phone2: '+99450 369 98 91',
    email: 'sales@hunmotors.com',
  },
  // Add more contacts here in the same format
];

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Əlaqə</h1>
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <h3>{contact.title}</h3>
            <p>{contact.name}</p>
            <p><strong>Nömrə:</strong> {contact.phone1}</p>
            {contact.phone2 && <p><strong>Nömrə:</strong> {contact.phone2}</p>}
            <p><strong>E-poçt:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
