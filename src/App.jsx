import { useState } from "react";
import LandingNavbar from "./components/landing/navbar";
import Hero from "./components/landing/hero";
import Ambulance from "./components/landing/ambulance"
import About from "./components/landing/about";
import Footer from "./components/landing/footer";
import Registration from "./components/landing/register";
import Sidebar from "./components/crm/sideBar";
import CRMNavbar from "./components/crm/CrmNavbar";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import Reports from "./pages/reports";
import Clinics from "./components/landing/clinics";
import Problems from "./components/landing/problems";
import Modules from "./components/landing/modules";

function App() {
  const [page, setPage] = useState("landing"); // landing, registration, crm
  const [currentCRMPage, setCurrentCRMPage] = useState("Dashboard"); // Dashboard, Users, Reports

  const handleLogout = () => {
    localStorage.removeItem("user");
    setPage("landing");
  };

  return (
    <div className="font-roboto">
      {page === "landing" && (
        <>
          <LandingNavbar onRegister={() => setPage("registration")} />
          <Hero />
          <Ambulance/>
          <About />
          <Clinics />
          <Problems />
          <Modules />
          <Footer />
        </>
      )}

      {page === "registration" && (
        <Registration onSubmit={() => setPage("crm")} />
      )}

      {page === "crm" && (
        <div className="flex min-h-screen">
          <Sidebar
            onLogout={handleLogout}
            onSelectSection={setCurrentCRMPage}
          />
          <div className="flex-1">
            <CRMNavbar />
            {currentCRMPage === "Dashboard" && <Dashboard />}
            {currentCRMPage === "Users" && <Users />}
            {currentCRMPage === "Reports" && <Reports />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
