import toast from "react-hot-toast";

const Sidebar = ({ onLogout, onSelectSection, active }) => {
  const sections = [
    { key: "Dashboard", label: "🚨 Live Chaqiriqlar" },
    { key: "Users", label: "👤 Bemorlar" },
    { key: "Reports", label: "📊 AI Tahlil" },
  ];

  const handleLogout = () => {
    toast.success("Tizimdan chiqdingiz!");
    onLogout();
  };

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col justify-between">

      <div className="p-4">
        <h2 className="text-xl font-bold text-red-500 mb-8">AI Tez Yordam</h2>

        <ul className="space-y-2">
          {sections.map((sec) => (
            <li
              key={sec.key}
              onClick={() => onSelectSection(sec.key)}
              className={`py-2 px-3 rounded cursor-pointer transition
                ${active === sec.key ? "bg-red-600" : "hover:bg-gray-700"}
              `}
            >
              {sec.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded transition font-semibold"
        >
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
