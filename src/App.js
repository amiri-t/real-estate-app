import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Buy from "./routes/buy/Buy";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sell from "./routes/sell/Sell";
import Rent from "./routes/rent/Rent";
import HelpPage1 from "./components/help-page1/HelpPage1";
import HelpPage2 from "./components/help-page2/HelpPage2";
import HelpPage3 from "./components/help-page3/HelpPage3";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* //navbar routes */}
        <Route path="/buy-house" element={<Buy />} />
        <Route path="/sell-house" element={<Sell />} />
        <Route path="/rent-house" element={<Rent />} />

        {/* //other routes */}
        <Route path="/how-to-sell" element={<HelpPage1 />} />
        <Route path="/how-much-is-worth" element={<HelpPage2 />} />
        <Route path="/how-to-prepare" element={<HelpPage3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
