import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { demoClinics } from "../../components/landing/clinics/demoClinics";
import {
  ArrowLeft,
  Star,
  Briefcase,
  MapPin,
  Phone,
  Clock,
  Award,
  Calendar,
  MessageCircle,
  Users,
  GraduationCap,
  Globe,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const doctor = demoClinics.find(
    (item) => item.id === Number(id) && item.type === "doctor"
  );

  // Max sana hisoblash - useEffect o'rniga oddiy o'zgaruvchi
  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split("T")[0];
  };

  const maxDate = getMaxDate();

  if (!doctor) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-xl text-red-500 font-semibold">
          Shifokor topilmadi ❌
        </p>
      </div>
    );
  }

  const timeSlots = [
    "09:00 - 09:30",
    "09:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
    "14:00 - 14:30",
    "14:30 - 15:00",
    "15:00 - 15:30",
    "16:00 - 16:30",
    "16:30 - 17:00",
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(
        `Qabul muvaffaqiyatli band qilindi!\nSana: ${selectedDate}\nVaqt: ${selectedTime}\nDoktor: ${doctor.name}`
      );
    } else {
      alert("Iltimos, sana va vaqtni tanlang!");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <ArrowLeft /> Orqaga
          </button>
        </div>
      </div>

      {/* HERO - CSS xatosi to'g'irlandi: bg-linear-to-r -> bg-gradient-to-r */}
      <div className="bg-linear-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{doctor.name}</h1>
            <p className="opacity-90 mt-2 text-lg">{doctor.specialization}</p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {doctor.rating} ({doctor.reviews?.length || 0}+ baho)
              </span>
              <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <Briefcase className="w-4 h-4" />
                {doctor.experience}
              </span>
              <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4" />
                {doctor.distance}
              </span>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("booking-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <Calendar className="inline mr-2 w-4 h-4" />
                Qabulga yozilish
              </button>
              <button className="border border-white px-5 py-2 rounded-lg hover:bg-white/10 transition">
                <MessageCircle className="inline mr-2 w-4 h-4" />
                Savol berish
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src={
                doctor.image ||
                "https://images.unsplash.com/photo-1537368910025-700350fe46c7"
              }
              alt={doctor.name}
              className="rounded-xl shadow-2xl w-full h-[280px] object-cover"
            />
            {doctor.clinic && (
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-sm text-gray-600">Ishlaydi:</p>
                <p className="font-semibold text-blue-600">
                  {doctor.clinic.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MAIN CONTENT - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* ABOUT */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-2xl mb-4 text-gray-800">
              Shifokor haqida
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {doctor.bio ||
                "Ushbu shifokor ko'p yillik tajribaga ega, minglab muvaffaqiyatli davolashlar o'tkazgan mutaxassis. Bemor bilan individual ishlash — asosiy tamoyil."}
            </p>

            {/* Education & Languages */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {doctor.education && (
                <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">Ta'lim</p>
                    <p className="text-sm text-gray-600">{doctor.education}</p>
                  </div>
                </div>
              )}

              {doctor.languages && (
                <div className="flex gap-3 items-start p-3 bg-green-50 rounded-lg">
                  <Globe className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">Tillar</p>
                    <p className="text-sm text-gray-600">
                      {doctor.languages.join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CERTIFICATES */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-xl text-gray-800">
                Sertifikatlar
              </h2>
              <button
                aria-label="see all"
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="text-blue-600 text-sm hover:underline flex items-center gap-1"
              >
                {showAllCertificates ? (
                  <>
                    Kamroq ko'rsatish <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Barchasini ko'rish <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="space-y-3">
              {(showAllCertificates
                ? doctor.certificates
                : doctor.certificates?.slice(0, 3)
              )?.map((certificate, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start p-3 border rounded-lg hover:bg-gray-50 transition"
                >
                  <Award className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
                  <p className="text-gray-700">{certificate}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIAL LINKS */}
          {doctor.socials && (
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-xl mb-4 text-gray-800">
                Ijtimoiy tarmoqlar
              </h3>
              <div className="flex flex-wrap gap-4">
                {doctor.socials.telegram && (
                  <a
                    aria-label="telegram"
                    href={`https://t.me/${doctor.socials.telegram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition"
                  >
                    <span className="text-lg">📱</span>
                    <span>Telegram</span>
                  </a>
                )}
                {doctor.socials.instagram && (
                  <a
                    aria-label="instagram"
                    href={`https://instagram.com/${doctor.socials.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-lg hover:bg-pink-100 transition"
                  >
                    <span className="text-lg">📸</span>
                    <span>Instagram</span>
                  </a>
                )}
                {doctor.socials.linkedin && (
                  <a
                    aria-label="linkedin"
                    href={`https://linkedin.com/in/${doctor.socials.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition"
                  >
                    <span className="text-lg">💼</span>
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* PATIENT STATS */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-xl text-gray-800">
                Statistika
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-3xl font-bold text-green-600">
                  {doctor.patients?.toLocaleString() || "2,450"}
                </p>
                <p className="text-gray-600">Xizmat ko'rsatilgan bemorlar</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-3xl font-bold text-blue-600">
                  {doctor.rating}
                </p>
                <p className="text-gray-600">O'rtacha baho</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <p className="text-3xl font-bold text-purple-600">
                  {doctor.experience}
                </p>
                <p className="text-gray-600">Tajriba</p>
              </div>
            </div>
          </div>

          {/* REVIEWS */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-semibold text-xl text-gray-800">
                  Bemorlar fikri va baholashlar
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {doctor.reviews?.length || 0} ta sharh
                </p>
              </div>
              <button
                aria-label="feadback"
                className="text-blue-600 hover:underline text-sm"
              >
                Sharh qoldirish
              </button>
            </div>

            {/* Rating Summary */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">
                  {doctor.rating}
                </div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(doctor.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700">
                  Doktor <span className="font-semibold">{doctor.name}</span>{" "}
                  bemorlar tomonidan {doctor.rating} ball bilan baholangan.
                </p>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {doctor.reviews?.map((review, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 hover:shadow-sm transition"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {review.name}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 ${
                              starIndex < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ONLINE BOOKING */}
          <div id="booking-section" className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-xl mb-6 text-gray-800">
              Online qabulga yozilish
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column - Form */}
              <div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Ism
                  </label>
                  <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Telefon raqam
                  </label>
                  <input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Sana tanlang
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    max={maxDate}
                    className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Right Column - Time Slots */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Vaqt oralig'i
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((timeSlot, index) => (
                    <button
                      aria-label="time"
                      key={index}
                      onClick={() => setSelectedTime(timeSlot)}
                      className={`p-3 border rounded-lg text-center transition ${
                        selectedTime === timeSlot
                          ? "bg-blue-600 text-white border-blue-600"
                          : "hover:bg-blue-50"
                      }`}
                    >
                      {timeSlot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Qo'shimcha ma'lumot (ixtiyoriy)
              </label>
              <textarea
                placeholder="Shikoyatingiz yaxlitroq ma'lumot..."
                rows="3"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              aria-label="select"
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
              className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${
                selectedDate && selectedTime
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {selectedDate && selectedTime
                ? `Qabulni tasdiqlash (${selectedDate} | ${selectedTime})`
                : "Sana va vaqtni tanlang"}
            </button>
          </div>
        </div>

        {/* SIDEBAR - 1/3 width */}
        <div className="space-y-6">
          {/* Contact Card */}
          <div className="bg-white rounded-xl shadow p-6 sticky top-24">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Kontakt ma'lumotlari
            </h3>

            {/* Phone */}
            <div className="flex gap-3 items-center mb-4 p-3 bg-blue-50 rounded-lg">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-800">Telefon</p>
                <p className="text-blue-600 font-semibold">
                  {doctor.phone || "+998 90 000 00 00"}
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex gap-3 items-center mb-6 p-3 bg-green-50 rounded-lg">
              <Clock className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">Qabul vaqti</p>
                <p className="text-sm text-gray-600">
                  {doctor.schedule || "Du - Ju / 09:00 – 17:00"}
                </p>
              </div>
            </div>

            {/* Price Card */}
            <div className="border-t pt-4">
              <div className="text-center mb-2">
                <p className="text-3xl font-bold text-indigo-600">
                  {doctor.price} so'm
                </p>
                <p className="text-sm text-gray-500">Konsultatsiya narxi</p>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Dastlabki konsultatsiya</span>
                  <span className="font-semibold">{doctor.price} so'm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Keyingi konsultatsiyalar
                  </span>
                  <span className="font-semibold">150,000 so'm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Telefon orqali maslahat</span>
                  <span className="font-semibold">50,000 so'm</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <button
              aria-label="booking"
              onClick={() =>
                document
                  .getElementById("booking-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 w-full bg-linear-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
            >
              Online yozilish
            </button>
            <button
              aria-label="call"
              className="mt-3 w-full border border-indigo-600 text-indigo-600 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
            >
              <Phone className="inline mr-2 w-4 h-4" />
              Qo'ng'iroq qilish
            </button>
          </div>

          {/* Clinic Info */}
          {doctor.clinic && (
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-4 text-gray-800">Klinika</h3>
              <div className="flex gap-3 items-center mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🏥</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {doctor.clinic.name}
                  </p>
                  <button
                    aria-label="go to clinic"
                    onClick={() => navigate(`/clinic/${doctor.clinic.id}`)}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Klinika sahifasiga o'tish →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-gray-800">Tezkor amallar</h3>
            <div className="space-y-3">
              <button aria-label="save" className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition">
                <FileText className="w-5 h-5 text-gray-600" />
                <span>Ma'lumotnomani yuklab olish</span>
              </button>
              <button aria-label="calendar" className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition">
                <Calendar className="w-5 h-5 text-gray-600" />
                <span>Kalendarga qo'shish</span>
              </button>
              <button aria-label="send a message" className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition">
                <MessageCircle className="w-5 h-5 text-gray-600" />
                <span>Shaxsiy xabar yuborish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
