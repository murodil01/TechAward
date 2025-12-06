import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "../sideBar";
import CRMNavbar from "../CrmNavbar";
import Dashboard from "../../../pages/dashboard";
import Users from "../../../pages/users";
import Reports from "../../../pages/reports";
import Profile from "../../../pages/profile";

const CRMLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getActiveSection = () => {
    if (location.pathname.includes("/users")) return "users";
    if (location.pathname.includes("/reports")) return "reports";
    return "dashboard";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 inset-y-0 left-0 w-64 transform 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:shrink-0`}
      >
        <Sidebar
          active={getActiveSection()}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <CRMNavbar onHamburgerClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-4 bg-gray-100 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default CRMLayout;
