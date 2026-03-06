import { NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FiUser, FiBarChart2, FiFileText } from "react-icons/fi";
import adaptive_icon from "../../assets/adaptive_icon.png";

const Sidebar = ({ className = "", closeSidebar }) => {
  const navigate = useNavigate();

  const links = [
    { to: "/admin", label: "Dashboard", icon: <FaTachometerAlt />, end: true },
    { to: "/admin/users", label: "Users", icon: <FaUsers /> },
    { to: "/admin/analytics", label: "Analytics", icon: <FiFileText /> },
    { to: "/admin/requests", label: "Requests", icon: <FiBarChart2 /> },
    { to: "/admin/settings", label: "Settings", icon: <FaCog /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminStep");
    navigate("/admin/login");
  };

  return (
    <div className={`w-64 bg-gradient-to-b from-blue-600 to-pink-500 text-white flex flex-col h-screen p-6 ${className}`}>
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-white rounded-xl p-2">
          <img src={adaptive_icon} className="h-8 w-6" alt="UTUNE LOGO" />
        </div>
        <div>
          <p className="font-bold text-lg">UTUNE</p>
          <p className="text-xs opacity-80">Admin Panel</p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition ${
                isActive ? "bg-white/30 font-semibold" : "hover:bg-white/20"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/30 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-2 rounded-full">
            <FiUser />
          </div>
          <div>
            <p className="text-sm font-semibold">Shiffy</p>
            <p className="text-xs opacity-80">admin@utune.com</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="cursor-pointer flex items-center gap-2 text-sm bg-white/15 w-full rounded-xl justify-center text-center p-2 hover:text-red-200 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
