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
    if (location.pathname.includes("/profile")) return "profile";
    return "dashboard";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile overlay - faqat mobilda sidebar ochiq bo'lganda ko'rinadi */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - fixed height, no scroll */}
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

      {/* Main Content Area - scrollable */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Navbar - sticky */}
        <CRMNavbar onHamburgerClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content - scrollable area */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="p-3 sm:p-4 md:p-6 lg:p-2">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CRMLayout;
