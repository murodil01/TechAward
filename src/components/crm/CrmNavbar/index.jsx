const CRMNavbar = ({ onHamburgerClick }) => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Hamburger - faqat kichik ekranlarda */}
      <button
        onClick={onHamburgerClick}
        className="md:hidden text-gray-700 text-2xl focus:outline-none"
        aria-label="Open sidebar"
      >
        ☰
      </button>

      {/* Status indicator */}
      <div className="flex items-center gap-2 text-green-600 font-medium">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        TIZIM FAOL
      </div>
    </nav>
  );
};

export default CRMNavbar;
