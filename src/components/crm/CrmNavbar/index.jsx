const CRMNavbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-red-600">
        🚑 AI Tez Yordam Paneli
      </h1>

      <div className="flex items-center gap-2 text-green-600 font-medium">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        TIZIM FAOL
      </div>

    </nav>
  );
};

export default CRMNavbar;
