import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ClinicCard from "./clinicCard";
import DoctorCard from "./doctorCard";
import GymCard from "./gymCard";
import MedicineCard from "./medicineCard";

import { demoClinics } from "./demoClinics";

const categoryOptions = [
  { value: "all", label: "Barchasi" },
  { value: "clinic", label: "Klinikalar" },
  { value: "doctor", label: "Shifokorlar" },
  { value: "gym", label: "Sport zallari" },
  { value: "medicine", label: "Dorilar" },
];

const Clinics = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState("nearest");
  const [priceRange, setPriceRange] = useState([0, 500000]);

  // Filtrlash logikasi
  const filtered = demoClinics.filter((item) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(searchLower) ||
      item.specialization?.toLowerCase().includes(searchLower);

    const matchesCategory =
      selectedCategory === "all" || item.type === selectedCategory;

    const itemPrice = parseInt(
      item.price?.replace(/,/g, "") || item.monthlyPrice?.replace(/,/g, "") || 0
    );
    const matchesPrice =
      itemPrice >= priceRange[0] && itemPrice <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Saralash logikasi
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "nearest") {
      return parseFloat(a.distance || 999) - parseFloat(b.distance || 999);
    }
    if (sortBy === "cheapest") {
      const priceA = parseInt(
        a.price?.replace(/,/g, "") || a.monthlyPrice?.replace(/,/g, "") || 0
      );
      const priceB = parseInt(
        b.price?.replace(/,/g, "") || b.monthlyPrice?.replace(/,/g, "") || 0
      );
      return priceA - priceB;
    }
    if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

  // Card render qilish
  const renderCard = (item) => {
    const cardComponents = {
      clinic: <ClinicCard key={item.id} clinic={item} />,
      doctor: <DoctorCard key={item.id} doctor={item} />,
      gym: <GymCard key={item.id} gym={item} />,
      medicine: <MedicineCard key={item.id} medicine={item} />,
    };
    return cardComponents[item.type] || null;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Search Input */}
          <div className="relative mb-5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Klinika yoki shifokor nomi, ixtisoslik..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-center justify-between">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 mb-3">
              {categoryOptions.map((option) => (
                <button
                  aria-label="label"
                  key={option.value}
                  onClick={() => setSelectedCategory(option.value)}
                  className={`px-5 py-4 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === option.value
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Filter Button */}
            <div className="flex justify-end">
              <button
                aria-label="filter"
                onClick={() => setShowFilter(!showFilter)}
                className={`px-5 py-4 rounded-lg transition-all flex items-center gap-2 ${
                  showFilter
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">
                  Filter
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Sidebar */}
      {showFilter && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setShowFilter(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filtrlar</h2>
                <button
                  aria-label="close"
                  onClick={() => setShowFilter(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Sort Buttons */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Saralash</h3>
                  <div className="flex flex-col gap-2">
                    {[
                      { value: "nearest", label: "Eng yaqin" },
                      { value: "cheapest", label: "Eng arzon" },
                      { value: "rating", label: "Reyting bo'yicha" },
                    ].map((option) => (
                      <button
                        aria-label="label"
                        key={option.value}
                        onClick={() => setSortBy(option.value)}
                        className={`px-4 py-3 rounded-lg text-left font-medium transition-all ${
                          sortBy === option.value
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">
                    Narx oralig'i
                  </h3>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-600">0 so'm</span>
                    <span className="text-sm font-semibold text-blue-600">
                      {priceRange[1].toLocaleString()} so'm
                    </span>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  aria-label="filter"
                  onClick={() => setShowFilter(false)}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
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
        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-600 font-medium">
            {sorted.length} ta natija topildi
          </span>
          {(selectedCategory !== "all" || priceRange[1] < 500000 || search) && (
            <button
              aria-label="clean"
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange([0, 500000]);
                setSearch("");
              }}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              Tozalash
            </button>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sorted.map(renderCard)}
        </div>

        {/* Empty State */}
        {sorted.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg font-medium mb-2">
              Hech narsa topilmadi
            </p>
            <p className="text-gray-400 text-sm">
              Qidiruv so'zini o'zgartiring yoki filtrlarni qayta sozlang
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clinics;
