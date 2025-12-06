import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

import ClinicCard from "./clinicCard";
import DoctorCard from "./doctorCard";
import GymCard from "./gymCard";
import MedicineCard from "./medicineCard";

import { demoClinics } from "./demoClinics"; // demo data alohida faylga ajratish tavsiya qilinadi

const Clinics = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("nearest");
  const [showFilter, setShowFilter] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500000]);

  const filtered = demoClinics.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.specialization?.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    const itemPrice = parseInt(
      item.price?.replace(/,/g, "") || item.monthlyPrice?.replace(/,/g, "") || 0
    );
    const matchesPrice = itemPrice >= priceRange[0] && itemPrice <= priceRange[1];
    return matchesSearch && matchesType && matchesPrice;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "nearest") return parseFloat(a.distance || 999) - parseFloat(b.distance || 999);
    if (sortBy === "cheapest") {
      const priceA = parseInt(a.price?.replace(/,/g, "") || a.monthlyPrice?.replace(/,/g, "") || 0);
      const priceB = parseInt(b.price?.replace(/,/g, "") || b.monthlyPrice?.replace(/,/g, "") || 0);
      return priceA - priceB;
    }
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-3 mb-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Klinika, doktor yoki xizmat qidiring..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors flex items-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Filtr</span>
            </button>
          </div>

          {/* Sort Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {["nearest", "cheapest", "rating"].map((type) => (
              <button
                key={type}
                onClick={() => setSortBy(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  sortBy === type ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type === "nearest" ? "Eng yaqin" : type === "cheapest" ? "Eng arzon" : "Reyting bo'yicha"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Sidebar */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilter(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filtrlar</h2>
                <button onClick={() => setShowFilter(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Tur</h3>
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "Barchasi" },
                      { value: "clinic", label: "Klinikalar" },
                      { value: "doctor", label: "Shifokorlar" },
                      { value: "gym", label: "Sport zallari" },
                      { value: "medicine", label: "Dorilar" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          checked={filterType === option.value}
                          onChange={() => setFilterType(option.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Narx oralig'i</h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="text-sm text-gray-600">0 so'm - {priceRange[1].toLocaleString()} so'm</div>
                  </div>
                </div>

                <button
                  onClick={() => setShowFilter(false)}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Filterni qo'llash
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-4">
          <span className="text-gray-600">{sorted.length} ta natija topildi</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sorted.map((item) => {
            if (item.type === "clinic") return <ClinicCard key={item.id} clinic={item} />;
            if (item.type === "doctor") return <DoctorCard key={item.id} doctor={item} />;
            if (item.type === "gym") return <GymCard key={item.id} gym={item} />;
            if (item.type === "medicine") return <MedicineCard key={item.id} medicine={item} />;
            return null;
          })}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Hech narsa topilmadi</p>
            <p className="text-gray-400 text-sm mt-2">Qidiruv so'zini o'zgartiring yoki filtrlarni qayta sozlang</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clinics;
