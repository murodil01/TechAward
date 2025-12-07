import { Star } from "lucide-react";

const GymCard = ({ gym }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-32 bg-linear-to-br from-orange-100 to-orange-200 flex items-center justify-center text-6xl">
      {gym.image}
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-900 mb-2">{gym.name}</h3>
      <div className="flex gap-2 mb-3 flex-wrap">
        {gym.trainings.map((t, i) => (
          <span key={i} className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs font-medium">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{gym.rating}</span>
        </div>
        <div className="text-sm text-gray-500">{gym.distance}</div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">{gym.monthlyPrice} so'm/oy</span>
        <button aria-label="join" className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
          A'zo bo'lish
        </button>
      </div>
    </div>
  </div>
);

export default GymCard;
