import { useParams, useNavigate } from "react-router-dom";
import { demoClinics } from "../../components/landing/clinics/demoClinics";
import {
  MapPin,
  Phone,
  Star,
  Clock,
  ArrowLeft,
  Shield,
  HeartPulse,
  Stethoscope
} from "lucide-react";

const ClinicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const clinic = demoClinics.find((item) => item.id === Number(id));

  if (!clinic) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-xl text-red-500 font-semibold">Klinika topilmadi ❌</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER TOP BAR */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <ArrowLeft /> Bosh sahifa
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6 items-center px-6 py-12">

          <div>
            <h1 className="text-3xl font-bold">{clinic.name}</h1>
            <p className="opacity-90 mt-1">{clinic.specialization}</p>

            <div className="flex gap-5 mt-4 text-sm flex-wrap">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {clinic.rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {clinic.hours}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {clinic.distance}
              </span>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
                Qabulga yozilish
              </button>
              <button className="border border-white px-5 py-2 rounded-lg hover:bg-white/10">
                Savol berish
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <img
            src={clinic.image || "https://images.unsplash.com/photo-1586773860418-d37222d8fce3"}
            alt={clinic.name}
            className="rounded-xl shadow-lg w-full h-[260px] object-cover"
          />

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* MAIN */}
        <div className="md:col-span-2 space-y-6">

          {/* ABOUT */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-xl mb-3">Klinika haqida</h2>
            <p className="text-gray-700 leading-relaxed">
              {clinic.description ||
                "Ushbu klinika yuqori malakali shifokorlar jamoasi, zamonaviy uskunalar va xalqaro standartlarga mos xizmatlari bilan mashhur. Har bir bemorga individual yondashuv amalga oshiriladi."}
            </p>
          </div>

          {/* SERVICES */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">Xizmatlar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {(clinic.services || ["Diagnostika", "Operatsiya", "Poliklinika", "Tez yordam", "Reabilitatsiya"]).map(
                (service, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 p-3 rounded-lg text-center text-sm font-medium"
                  >
                    {service}
                  </div>
                )
              )}
            </div>
          </div>

          {/* ADVANTAGES */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">Afzalliklar</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2 items-center"><Shield className="text-green-500" /> Sertifikatlangan shifokorlar</li>
              <li className="flex gap-2 items-center"><HeartPulse className="text-red-500" /> 24/7 xizmat</li>
              <li className="flex gap-2 items-center"><Stethoscope className="text-blue-500" /> Zamonaviy texnologiyalar</li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="bg-white rounded-xl shadow p-6 sticky top-24 h-fit">

          <h3 className="font-semibold text-lg mb-4">Aloqa</h3>

          <p className="flex gap-2 items-center mb-3 text-sm text-gray-700">
            <MapPin className="w-4 h-4" /> {clinic.address}
          </p>

          <p className="flex gap-2 items-center mb-4 text-sm text-gray-700">
            <Phone className="w-4 h-4" /> {clinic.phone}
          </p>

          <div className="border-t pt-4">
            <p className="text-xl font-bold text-blue-600">
              {clinic.price} so'm
            </p>
            <p className="text-xs text-gray-500">Konsultatsiya narxi</p>
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
            Online yozilish
          </button>

        </div>

      </div>
    </div>
  );
};

export default ClinicDetail;
