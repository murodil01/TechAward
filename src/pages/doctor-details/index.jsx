import { useParams, useNavigate } from "react-router-dom";
import { demoClinics } from "../../components/landing/clinics/demoClinics";
import {
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Briefcase,
  Clock,
  Award,
  UserCheck
} from "lucide-react";

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = demoClinics.find(
    (item) => item.id === Number(id) && item.type === "doctor"
  );

  if (!doctor) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-xl text-red-500 font-semibold">
          Shifokor topilmadi ❌
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER */}
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
      <div className="bg-linear-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6 items-center px-6 py-12">

          <div>
            <h1 className="text-3xl font-bold">{doctor.name}</h1>
            <p className="opacity-90 mt-1">{doctor.specialization}</p>

            <div className="flex gap-5 mt-4 text-sm flex-wrap">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {doctor.rating}
              </span>

              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {doctor.experience}
              </span>

              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {doctor.distance}
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

          {/* AVATAR */}
          <img
            src={
              doctor.image ||
              "https://images.unsplash.com/photo-1537368910025-700350fe46c7"
            }
            alt={doctor.name}
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
            <h2 className="font-bold text-xl mb-3">Shifokor haqida</h2>
            <p className="text-gray-700 leading-relaxed">
              {doctor.bio ||
                "Ushbu shifokor ko‘p yillik tajribaga ega, minglab muvaffaqiyatli davolashlar o‘tkazgan mutaxassis. Bemor bilan individual ishlash — asosiy tamoyil."}
            </p>
          </div>

          {/* EDUCATION */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">Ta'lim</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {(doctor.education || [
                "Toshkent Tibbiyot Akademiyasi",
                "Kardiologiya rezidenturasi",
                "Xalqaro malaka oshirish"
              ]).map((edu, i) => (
                <li key={i}>{edu}</li>
              ))}
            </ul>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">Yutuqlar</h2>
            <ul className="space-y-2">
              {(doctor.achievements || [
                "1000+ baxtli bemor",
                "Top Doctor 2023 mukofoti",
                "Xalqaro seminar ishtirokchisi"
              ]).map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <Award className="text-yellow-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="bg-white rounded-xl shadow p-6 sticky top-24 h-fit">

          <h3 className="font-semibold text-lg mb-4">Kontakt</h3>

          <p className="flex gap-2 items-center mb-3 text-sm text-gray-700">
            <Phone className="w-4 h-4" /> {doctor.phone || "+998 90 000 00 00"}
          </p>

          <p className="flex gap-2 items-center mb-4 text-sm text-gray-700">
            <Clock className="w-4 h-4" /> Qabul vaqti:
            {doctor.schedule || "Du - Ju / 09:00 – 17:00"}
          </p>

          <div className="border-t pt-4">
            <p className="text-xl font-bold text-indigo-600">
              {doctor.price} so'm
            </p>
            <p className="text-xs text-gray-500">Konsultatsiya narxi</p>
          </div>

          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700">
            Online yozilish
          </button>

        </div>

      </div>
    </div>
  );
};

export default DoctorDetail;
