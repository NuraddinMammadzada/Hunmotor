import React, { useEffect } from 'react';
import InfoNav from './components/InfoNav'; // Adjust path as needed
import Contact from './components/Contacts';
import Banner from './components/Banner';
import NavBar from './components/Navbar';
import BrandList from './components/Brands';
import BrandDetails from './components/BrandDetail';
import Footer from "./components/Footer";
import "./App.css"
import CertificatesPage from './components/CertificatesPage'; // Adjust the path as needed

import HomePage from "./HomePage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    const brands = [
      { id: 1, name: 'DENSO', image: 'https://tesma.ua/assets/img/brand_logo/denso_original.jpg', description: 'DENSO provides advanced automotive solutions.' },
      { id: 2, name: 'BOSCH', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FjcgAf7cNr3feD_rJS_s2hQjEM2Xl8Z6kw&s', description: 'BOSCH is a leading supplier of technology and services.' },
      { id: 3, name: 'Gates', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_esXOLdHv0QNgGJGTYvNn_JeYedW_OgBJQ&s', description: 'Gates offers power transmission and fluid power solutions.' },
      { id: 4, name: 'OSRAM', image: 'https://media.unixauto.hu/TL_IMAGES/12083/120835D5EEL1.UNK', description: 'OSRAM is a leading global high-tech company in lighting.' },
      { id: 5, name: 'Bremi', image: 'https://www.bremi.de/wp-content/uploads/2024/07/BREMI-logo_white.png', description: 'Bremi is a supplier of electrical and ignition components.' },
      { id: 6, name: 'Comline', image: 'https://www.iaaf.co.uk/media/dgib4tp5/comline-logo.png?anchor=center&mode=crop&width=750&height=260&rnd=132381802085270000', description: 'Comline Auto Parts offers reliable automotive components.' },
      // Add more brands following the same format
    ];

    localStorage.setItem('brands', JSON.stringify(brands));
  }, []);
  return (
    //      <Route path ='' element={<></>}/>

    <div>
      <Router>
        <InfoNav />
        <Banner></Banner>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/brands' element={<BrandList />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path='/haqqimizda' element={<></>} />
          <Route path='/elaqe' element={<Contact />} />
          <Route path="/brand/:id" element={<BrandDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
