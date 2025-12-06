import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1220px] mx-auto flex justify-between items-center py-4 px-6">
        <img src={logo} alt="Logo" className="max-w-[100px] w-full h-auto"/>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-red-600 cursor-pointer transition">Asosiy</li>
          <li className="hover:text-red-600 cursor-pointer transition">Qanday ishlaydi?</li>
          <li className="hover:text-red-600 cursor-pointer transition">AI tizim</li>
          <li className="hover:text-red-600 cursor-pointer transition">Bog‘lanish</li>
        </ul>

        <button
          onClick={handleRegister}
          className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition"
        >
          Ro'yxatdan o'tish
        </button>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-gray-700"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full absolute left-0 top-full">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <li className="hover:text-red-600 cursor-pointer transition">Asosiy</li>
            <li className="hover:text-red-600 cursor-pointer transition">Qanday ishlaydi?</li>
            <li className="hover:text-red-600 cursor-pointer transition">AI tizim</li>
            <li className="hover:text-red-600 cursor-pointer transition">Bog‘lanish</li>
            <button
              onClick={handleRegister}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition mt-2"
            >
              Ro'yxatdan o'tish
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
