import { Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        
        {/* Avatar */}
        <div className="w-16 h-16 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-3xl shrink-0">
          {doctor.avatar}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            {doctor.name}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            {doctor.specialization}
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Tajriba: {doctor.experience}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{doctor.rating}</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span className="font-medium">{doctor.price} so'm</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="w-3.5 h-3.5" />
              <span>{doctor.distance}</span>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate(`/doctor/${doctor.id}`)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors h-fit whitespace-nowrap"
        >
          Batafsil
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
