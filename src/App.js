import NavBar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Used from "./Pages/Used";
import New from "./Pages/New";
import FeaturedYacht from "./Pages/FeaturedYacht";
import Sell from "./Pages/Sell";
import Tradein from "./Pages/Tradein";
import VirtualTours from "./Pages/VirtualTours";
import BoatShow from "./Pages/BoatShow";
import Contact from "./Pages/Contact";
import Financing from "./Pages/Financing";
import Hurricane from "./Pages/Hurricane";
import Charter from "./Pages/Charter";
import Insurance from "./Pages/Insurance";
import Transportation from "./Pages/Transportation";
import Footer from "./Components/Footer";
import Dev from "./Pages/Dev";
import NoMatch from "./Pages/NoMatch";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import MarketingPolicy from "./Pages/MarketingPolicy";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/yacht-sales/new" element={<New />} />
          <Route path="/yacht-sales/used" element={<Used />} />
          <Route path="/yacht-sales/featured" element={<FeaturedYacht />} />
          <Route path="/yacht-broker/sell" element={<Sell />} />
          <Route path="/yacht-broker/trade-in" element={<Tradein />} />
          <Route path="/services/insurance" element={<Insurance />} />
          <Route path="/services/financing" element={<Financing />} />
          <Route path="/services/hurricane-storage" element={<Hurricane />} />
          <Route path="/services/transportation" element={<Transportation />} />
          <Route path="/services/charter" element={<Charter />} />
          <Route path="/media/virtual-tours" element={<VirtualTours />} />
          <Route path="/events/boat-show" element={<BoatShow />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/marketing-policy" element={<MarketingPolicy />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
