import { Clock, Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ClinicCard = ({ clinic }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-3xl shrink-0">
          {clinic.logo}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            {clinic.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{clinic.specialization}</p>

          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{clinic.hours}</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{clinic.rating}</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span className="font-medium">{clinic.price} so'm</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="w-3.5 h-3.5" />
              <span>{clinic.distance}</span>
            </div>
          </div>
        </div>

        <button
          aria-label="More information"
          onClick={() => navigate(`/clinic/${clinic.id}`)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors h-fit"
        >
          Ko'rish
        </button>
      </div>
    </div>
  );
};

export default ClinicCard;
