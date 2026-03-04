import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Features from "./Features";
import Navbar from "./Navbar";
import Usage from "./Usage";
import Review from "./Review";
import LegalPage from "./LegalPage";
import About from "./About";
import HelpCenter from "./HelpCenter";

function App() {
  return (
    <Router>
      <Routes>
        {/* LandingPage acts as the layout wrapper */}
        <Route path="/" element={<LandingPage />}>
          {/* Nested routes will render inside LandingPage */}
          <Route path="features" element={<Features />} />
          <Route path="usage" element={<Usage />} />
          <Route path="reviews" element={<Review />} />
          <Route path="privacy" element={<LegalPage type="privacy" />} />
          <Route path="terms" element={<LegalPage type="terms" />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<HelpCenter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;