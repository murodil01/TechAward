import { Routes, Route } from "react-router-dom";

// Landing
import LandingNavbar from "./components/landing/navbar";
import Hero from "./components/landing/hero";
import Ambulance from "./components/landing/ambulance";
import About from "./components/landing/about";
import Clinics from "./components/landing/clinics";
import Problems from "./components/landing/problems";
import Modules from "./components/landing/modules";
import Footer from "./components/landing/footer";
import Registration from "./components/landing/register";

// CRM
import Sidebar from "./components/crm/sideBar";
import CRMNavbar from "./components/crm/CrmNavbar";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import Reports from "./pages/reports";

// Detail pages
import ClinicDetail from "./pages/clinic-details";
import DoctorDetail from "./pages/doctor-details";

function App() {
  return (
    <div className="font-roboto">

      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <LandingNavbar />
              <Hero />
              <Ambulance />
              <About />
              <Clinics />
              <Problems />
              <Modules />
              <Footer />
            </>
          }
        />

        {/* REGISTRATION */}
        <Route path="/register" element={<Registration />} />

        {/* CRM */}
        <Route
          path="/crm"
          element={
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1">
                <CRMNavbar />
                <Dashboard />
              </div>
            </div>
          }
        />

        <Route path="/crm/users" element={<Users />} />
        <Route path="/crm/reports" element={<Reports />} />

        {/* DETAIL PAGES */}
        <Route path="/clinic/:id" element={<ClinicDetail />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />

      </Routes>

    </div>
  );
}

export default App;
