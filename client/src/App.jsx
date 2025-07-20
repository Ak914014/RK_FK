import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Footer from "./components/Footer";
import Pricing from "./components/Pricing"; // Create this new component
import Navbar from './components/Navbar';
import HeroBanner from './components/Layouts/HeroBanner';
import AppointmentForm from './components/AppointmentForm';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
         <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <Footer />
          </>
        } />
        <Route path="/pricing" element={
          <>
            <Pricing showPricing={true} />
            <Footer />
          </>
        } />
         <Route path="/college" element={
          <>
            <HeroBanner />
            <Footer />
          </>
        } />
         <Route path="/graduate" element={
          <>
            <HeroBanner />
            <Footer />
          </>
        } />
        <Route path="/mba" element={
          <>
           <HeroBanner />
            <Footer />
          </>
        } />
        <Route path="/appointmentForm" element={
          <>
           <AppointmentForm />
            <Footer />
          </>
        } />
           <Route path="/about" element={
          <>
           <AboutPage />
            <Footer />
          </>
        } />
        <Route path="/medical" element={
          <>
           <HeroBanner />
            <Footer />
          </>
        } />

      </Routes>
    </Router>
  )
}

export default App;