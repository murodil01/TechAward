import { useParams, useNavigate } from "react-router-dom";
import { demoClinics } from "../../components/landing/clinics/demoClinics";
import {
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Shield,
  HeartPulse,
  Stethoscope,
  Clock,
  Users,
  Award,
  Calendar,
  MessageCircle,
} from "lucide-react";

const ClinicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const clinic = demoClinics.find(
    (item) => item.id === Number(id) && item.type === "clinic"
  );

  if (!clinic) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-xl text-red-500 font-semibold">
          Klinika topilmadi ❌
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
            aria-label="home"
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
            <h1 className="text-3xl md:text-4xl font-bold">{clinic.name}</h1>
            <p className="opacity-90 mt-1 text-lg">{clinic.specialization}</p>
            <div className="flex gap-5 mt-4 text-sm flex-wrap">
              <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {clinic.rating} ({clinic.reviews?.length || 0} baho)
              </span>
              <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4" />
                {clinic.distance}
              </span>
              <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                {clinic.hours}
              </span>
            </div>
            <div className="mt-6 flex gap-4">
              <button
                aria-label="recieve"
                className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <Calendar className="inline mr-2 w-4 h-4" />
                Qabulga yozilish
              </button>
              <button
                aria-label="give a question"
                className="border border-white px-5 py-2 rounded-lg hover:bg-white/10 transition"
              >
                <MessageCircle className="inline mr-2 w-4 h-4" />
                Savol berish
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <img
            src={
              clinic.image ||
              "https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            }
            alt={clinic.name}
            className="rounded-xl shadow-lg w-full h-[260px] object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MAIN CONTENT - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* ABOUT */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-2xl mb-4 text-gray-800">
              Klinika haqida
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {clinic.description ||
                "Ushbu klinika yuqori malakali shifokorlar jamoasi, zamonaviy uskunalar va xalqaro standartlarga mos xizmatlari bilan mashhur. Har bir bemorga individual yondashuv amalga oshiriladi."}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                24/7 xizmat
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Zamonaviy uskunalar
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Parking maydoni
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                Wi-Fi
              </span>
            </div>
          </div>

          {/* SERVICES */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-xl mb-6 text-gray-800">
              Xizmatlar
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {(
                clinic.services || [
                  "Diagnostika",
                  "Operatsiya",
                  "Poliklinika",
                  "Tez yordam",
                  "Reabilitatsiya",
                ]
              ).map((service, i) => (
                <div
                  key={i}
                  className="bg-linear-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center hover:shadow-md transition"
                >
                  <div className="text-2xl mb-2">
                    {i % 3 === 0 ? "🩺" : i % 3 === 1 ? "💉" : "📋"}
                  </div>
                  <p className="font-medium text-gray-800">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ADVANTAGES */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-xl mb-6 text-gray-800">
              Afzalliklar
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3 items-center p-3 bg-green-50 rounded-lg">
                <Shield className="text-green-600 w-6 h-6" />
                <div>
                  <p className="font-semibold">Sertifikatlangan shifokorlar</p>
                  <p className="text-sm text-gray-600">
                    Barcha shifokorlarimiz xalqaro sertifikatlarga ega
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center p-3 bg-red-50 rounded-lg">
                <HeartPulse className="text-red-600 w-6 h-6" />
                <div>
                  <p className="font-semibold">24/7 xizmat</p>
                  <p className="text-sm text-gray-600">
                    Kechayu kundiz tibbiy yordam
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center p-3 bg-blue-50 rounded-lg">
                <Stethoscope className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="font-semibold">Zamonaviy texnologiyalar</p>
                  <p className="text-sm text-gray-600">
                    Eng yangi diagnostika va davolash uskunalari
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* DOCTORS */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-xl text-gray-800">
                Shifokorlarimiz
              </h2>
              <button
                aria-label="see all"
                className="text-blue-600 hover:underline text-sm"
              >
                Barchasini ko'rish →
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {clinic.doctors?.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => navigate(`/doctor/${doc.id}`)}
                  className="flex gap-4 p-4 border rounded-xl hover:shadow-lg cursor-pointer transition hover:border-blue-300"
                >
                  <img
                    loading="loader"
                    src={
                      doc.image ||
                      `https://ui-avatars.com/api/?name=${doc.name}&background=3B82F6&color=fff`
                    }
                    alt={doc.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      {doc.specialization}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {doc.rating}
                      </span>
                      <span className="flex items-center gap-1 text-sm">
                        <Award className="w-4 h-4 text-blue-500" />
                        {doc.experience}
                      </span>
                    </div>
                    <p className="text-blue-600 font-semibold mt-2">
                      {doc.price} so'm
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REVIEWS */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-semibold text-xl text-gray-800">
                  Bemorlarning fikrlari va baholashlar
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  {clinic.reviews?.length || 0} ta sharh
                </p>
              </div>
              <button
                aria-label="feadback"
                className="text-blue-600 hover:underline text-sm"
              >
                Sharh qoldirish
              </button>
            </div>

            {/* Average Rating */}
            <div className="flex items-center gap-6 mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">
                  {clinic.rating}
                </div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(clinic.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">O'rtacha baho</p>
              </div>
              <div className="flex-1">
                <div className="space-y-1">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-2">
                      <span className="text-sm w-8">{star} yulduz</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{
                            width: `${
                              (clinic.reviews?.filter((r) => r.rating === star)
                                .length /
                                clinic.reviews?.length) *
                                100 || 0
                            }%`,
                          }}
                        />
                      </div>
                      <span className="text-sm w-8 text-right">
                        {clinic.reviews?.filter((r) => r.rating === star)
                          .length || 0}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {clinic.reviews?.map((r, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 hover:shadow-sm transition"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-gray-800">{r.name}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 ${
                              starIndex < r.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{r.date}</span>
                  </div>
                  <p className="text-gray-600">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR - 1/3 width */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6 sticky top-24">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Aloqa ma'lumotlari
            </h3>

            {/* Address */}
            <div className="flex gap-3 items-start mb-4 p-3 bg-blue-50 rounded-lg">
              <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">Manzil</p>
                <p className="text-sm text-gray-600">{clinic.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center mb-4 p-3 bg-green-50 rounded-lg">
              <Phone className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">Telefon</p>
                <p className="text-sm text-gray-600">{clinic.phone}</p>
              </div>
            </div>

            {/* Call Center */}
            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <p className="font-semibold text-gray-800">
                  Call Center & Ishonch raqamlar
                </p>
              </div>
              {clinic.callCenter?.map((num, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-blue-600 font-medium">{num}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="border-t pt-4 mt-4">
              <div className="text-center mb-2">
                <p className="text-3xl font-bold text-blue-600">
                  {clinic.avgPrice} so'm
                </p>
                <p className="text-sm text-gray-500">
                  O'rtacha konsultatsiya narxi
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Umumiy tekshiruv</span>
                  <span className="font-semibold">80,000 so'm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">USG tekshiruvi</span>
                  <span className="font-semibold">120,000 so'm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">EKG</span>
                  <span className="font-semibold">50,000 so'm</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <button
              aria-label="booking"
              className="mt-6 w-full bg-linear-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
            >
              Online yozilish
            </button>
            <button className="mt-3 w-full border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
              <Phone className="inline mr-2 w-4 h-4" />
              Qo'ng'iroq qilish
            </button>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-gray-800">
              Manzil xaritada
            </h3>
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <MapPin className="w-8 h-8 text-red-500" />
              <span className="ml-2 text-gray-600">
                Google Xarita integratsiyasi
              </span>
            </div>
            <button
              aria-label="get data"
              className="mt-4 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              Yo'l ko'rsatishni olish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetail;
