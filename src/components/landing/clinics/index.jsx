import { useState } from "react";
import { FaHospital, FaUserMd, FaStethoscope, FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

const demoClinics = [
  {
    name: "City Clinic",
    doctors: ["Dr. Ali", "Dr. Zoya"],
    specialization: "General",
    address: "Tashkent, Amir Temur ko'chasi 12",
    hours: "09:00 - 18:00",
    phone: "+998 71 123 45 67"
  },
  {
    name: "Heart Center",
    doctors: ["Dr. Samad"],
    specialization: "Cardiology",
    address: "Tashkent, Mustaqillik 45",
    hours: "08:00 - 17:00",
    phone: "+998 71 234 56 78"
  },
  {
    name: "Kids Health",
    doctors: ["Dr. Maryam"],
    specialization: "Pediatrics",
    address: "Tashkent, Shayxontohur tumani 23",
    hours: "09:00 - 16:00",
    phone: "+998 71 345 67 89"
  },
  {
    name: "Dental Care",
    doctors: ["Dr. John"],
    specialization: "Dentistry",
    address: "Tashkent, Yunusobod 5",
    hours: "10:00 - 19:00",
    phone: "+998 71 456 78 90"
  },
  {
    name: "Neuro Clinic",
    doctors: ["Dr. Nina"],
    specialization: "Neurology",
    address: "Tashkent, Chilonzor 32",
    hours: "09:00 - 17:30",
    phone: "+998 71 567 89 01"
  },
];

const Clinics = () => {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = demoClinics.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.specialization.toLowerCase().includes(search.toLowerCase()) ||
      c.doctors.some((d) => d.toLowerCase().includes(search.toLowerCase()))
  );

  const displayClinics = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-100">
      <div className="max-w-[1220px] mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-red-600">
          Klinikalar va Shifokorlar
        </h2>

        {/* Search va toggle button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center sm:justify-between items-center">
          <input
            type="text"
            placeholder="Klinika, yo‘nalish yoki doktor qidirish..."
            className="border border-gray-300 p-3 rounded-full shadow-md w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700 font-medium transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all flex items-center gap-2 justify-center font-semibold shadow-lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Kamroq ko‘rsatish" : "Barchasini ko‘rish"}
          </button>
        </div>

        {/* Klinikalar ro‘yxati */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayClinics.length > 0 ? (
            displayClinics.map((clinic, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Klinik Icon */}
                <div className="absolute top-4 right-4 text-red-100 text-5xl">
                  <FaHospital />
                </div>

                <h3 className="font-bold text-2xl mb-4 flex items-center gap-3 text-gray-800">
                  <FaStethoscope className="text-red-600 text-xl" />
                  {clinic.name}
                </h3>

                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <FaUserMd className="text-blue-500" />
                  Yo‘nalish: {clinic.specialization}
                </p>

                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-green-500" />
                  Manzil: {clinic.address}
                </p>

                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <FaClock className="text-yellow-500" />
                  Ish vaqti: {clinic.hours}
                </p>

                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <FaPhoneAlt className="text-purple-500" />
                  Telefon: {clinic.phone}
                </p>

                <p className="font-semibold mb-2 text-gray-700">Doktorlar:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {clinic.doctors.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Klinikalar topilmadi
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clinics;
