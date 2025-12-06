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
import CRMLayout from "./components/crm/layout";

// Detail pages
import ClinicDetail from "./pages/clinic-details";
import DoctorDetail from "./pages/doctor-details";

// Scroll Top
import ScrollTop from "./components/scroll-top";

function App() {
  return (
    <div className="font-roboto">
      <ScrollTop />

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
        <Route path="/crm/*" element={<CRMLayout />} />

        {/* DETAIL PAGES */}
        <Route path="/clinic/:id" element={<ClinicDetail />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />

      </Routes>
    </div>
  );
}

export default App;
