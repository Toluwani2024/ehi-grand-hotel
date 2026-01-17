import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Gallery from "./pages/Gallery.jsx";
import Footer from "./components/common/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from  "./pages/Services.jsx";
import FAQ from "./pages/FAQ.jsx";
import Resort from "./pages/Resort.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resort" element={<Resort />} /> 
        </Routes>
      <Footer/>
     
         </>
  );
}
export default App;
