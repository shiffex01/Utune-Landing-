import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 items-center justify-center md:items-start md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">U-Tune</h3>
          <p className="text-sm">The future of personalized caller branding.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Features</h4>
          <ul className="space-y-2 text-sm">
            <li>Upload RBT</li>
            <li>Verification</li>
            <li>Advertising</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-white hover:text-blue-300 mx-2">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/help" className="text-white hover:text-blue-300 mx-2">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-white hover:text-blue-300 mx-2">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-white hover:text-blue-300 mx-2">
                Terms of Services
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-8 space-x-2">
        <span>© 2026 U-Tune. All rights reserved.</span>
        <Link
          to="/admins/login"
          className="opacity-40 hover:opacity-100 text-gray-500 hover:text-white"
        >
          Admins
        </Link>
      </div>
    </footer>
  );
};

export default Footer;