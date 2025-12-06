const Navbar = ({ onRegister }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1220px] mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">
          <span className="text-blue-600">AI</span>TezYordam
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-red-600 cursor-pointer transition">Asosiy</li>
            <li className="hover:text-red-600 cursor-pointer transition">Qanday ishlaydi?</li>
            <li className="hover:text-red-600 cursor-pointer transition">AI tizim</li>
            <li className="hover:text-red-600 cursor-pointer transition">Bog‘lanish</li>
          </ul>

          {/* Button */}
          <button
            onClick={onRegister}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition"
          >
            Ro'yxatdan o'tish
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
