import { Star, ShoppingCart } from "lucide-react";

const MedicineCard = ({ medicine }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-32 bg-linear-to-br from-purple-100 to-purple-200 flex items-center justify-center text-5xl">
      {medicine.image}
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-base text-gray-900 mb-2">{medicine.name}</h3>
      <div className="flex items-center gap-1 mb-3">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">{medicine.rating}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">{medicine.price} so'm</span>
        <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default MedicineCard;
