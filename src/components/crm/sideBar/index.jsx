import { Link, useNavigate } from "react-router-dom";
import { X, LogOut } from "lucide-react";
import logo from "../../../assets/images/logo.png";

const Sidebar = ({ active, onClose }) => {
  const navigate = useNavigate();

  const sections = [
    { key: "dashboard", label: "🚨 Live Chaqiriqlar", path: "/crm" },
    { key: "users", label: "👤 Bemorlar", path: "/crm/users" },
    { key: "reports", label: "📊 AI Tahlil", path: "/crm/reports" },
    { key: "profile", label: "📕 Shaxsiy kabinet", path: "/crm/profile" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <aside className="w-64 bg-linear-to-b from-blue-600 to-red-700 text-white h-screen flex flex-col shadow-xl">
      {/* Header */}
      <div className="p-4 border-b border-blue-500 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt=""
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center "
          />

          <div>
            <h2 className="font-bold text-sm leading-tight">Clinic Go</h2>
            <p className="text-xs text-red-200">Admin Panel</p>
          </div>
        </div>

        {/* Close button - faqat mobilda ko'rinadi */}
        <button
          onClick={onClose}
          className="md:hidden p-2 hover:bg-red-500 rounded-lg transition-colors"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {sections.map((sec) => (
            <li key={sec.key}>
              <Link
                to={sec.path}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200 font-medium
                  ${
                    active === sec.key
                      ? "bg-white text-red-600 shadow-lg transform scale-105"
                      : "hover:bg-red-500 hover:shadow-md"
                  }
                `}
              >
                <span className="text-xl">{sec.label.split(" ")[0]}</span>
                <span className="text-sm">
                  {sec.label.split(" ").slice(1).join(" ")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer - Logout */}
      <div className="p-4 border-t border-red-500">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-br from-blue-800 to-red-600 hover:from-red-700 hover:to-red-900 rounded-lg transition-colors font-medium text-sm shadow-lg"
        >
          <LogOut size={18} />
          Chiqish
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
