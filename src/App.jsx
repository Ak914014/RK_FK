import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Footer from "./components/Footer";
import Pricing from "./components/Pricing"; // Create this new component
import Navbar from './components/Navbar';
import HeroBanner from './components/Layouts/HeroBanner';

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
            <LandingPage />
            <Footer />
          </>
        } />
        <Route path="/mba" element={
          <>
            <LandingPage />
            <Footer />
          </>
        } />
        <Route path="/medical" element={
          <>
            <LandingPage />
            <Footer />
          </>
        } />

      </Routes>
    </Router>
  )
}

export default App;