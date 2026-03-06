import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Features from "./Features";
import Navbar from "./Navbar";
import Usage from "./Usage";
import Review from "./Review";
import LegalPage from "./LegalPage";
import About from "./About";
import HelpCenter from "./HelpCenter";
import ScrollToTop from "./ScrollToTop";

// Admin imports
import AdminLayout from "./admin/layout/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import LoginPage from "./admin/pages/LoginPage";
import VerifyPage from "./admin/pages/VerifyPage";
import Users from "./admin/pages/Users";
import Analytics from "./admin/pages/Analytics";
import TuneActivationRequests from "./admin/pages/TuneActivationRequests";
import Settings from "./admin/pages/Settings";
import ProtectedRoute from "./admin/components/ProtectedRoute";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* Landing page routes (with Navbar) */}
        <Route path="/" element={<><Navbar/><LandingPage /></>}/>
        <Route path="/features" element={<><Navbar/><Features /></>} />
        <Route path="/usage" element={<><Navbar/><Usage /></>} />
        <Route path="/reviews" element={<><Navbar/><Review /></>} />
        <Route path="/privacy" element={<><Navbar/><LegalPage type="privacy" /></>} />
        <Route path="/terms" element={<><Navbar/><LegalPage type="terms" /></>} />
        <Route path="/about" element={<><Navbar/><About /></>} />
        <Route path="/help" element={<><Navbar/><HelpCenter /></>} />

        {/* Admin auth routes (no Navbar) */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/verify" element={<VerifyPage />} />

        {/* Admin protected routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="requests" element={<TuneActivationRequests />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
