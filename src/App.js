import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/index';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Wonders from './components/Wonders';
import HolyPlaces from './components/HolyPlaces';
import HowToVisit from './components/HowToVisit';
import Mundan from './components/Mundan';
import TripPlanning from './components/TripPlanning';
import Precautions from './components/Precautions';
import Prasadam from './components/Prasadam';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#060403] flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/wonders" element={<Wonders />} />
            <Route path="/holy-places" element={<HolyPlaces />} />
            <Route path="/how-to-visit" element={<HowToVisit />} />
            <Route path="/mundan" element={<Mundan />} />
            <Route path="/trip-planning" element={<TripPlanning />} />
            <Route path="/precautions" element={<Precautions />} />
            <Route path="/prasadam" element={<Prasadam />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}