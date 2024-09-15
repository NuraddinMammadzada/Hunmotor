import InfoNav from './components/InfoNav'; // Adjust path as needed
import Banner from './components/Banner';
import NavBar from './components/Navbar';
import SliderSection from './components/SliderSection';
import InfoSection from './components/Sect3';
import ArrowSections from './components/Sect4';
import Footer from "./components/Footer";
import SliderComponent from './components/Slider';


const HomePage = () => {
    return (<>
   
      <SliderSection />
      <InfoSection/>
      <ArrowSections />

      <SliderComponent/>

    </>);
};

export default HomePage;