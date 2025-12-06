import { useState } from "react";
import { FaUserMd, FaPhoneAlt, FaBriefcase, FaEnvelope, FaClock } from "react-icons/fa";

const demoDoctors = [
  {
    firstName: "Ali",
    lastName: "Karimov",
    specialization: "General",
    experience: "5 yil",
    phone: "+998 90 123 45 67",
    email: "ali.karimov@example.com",
  },
  {
    firstName: "Zoya",
    lastName: "Rahimova",
    specialization: "Pediatrics",
    experience: "8 yil",
    phone: "+998 90 234 56 78",
    email: "zoya.rahimova@example.com",
  },
  {
    firstName: "Samad",
    lastName: "Nazarov",
    specialization: "Cardiology",
    experience: "10 yil",
    phone: "+998 90 345 67 89",
    email: "samad.nazarov@example.com",
  },
  {
    firstName: "Maryam",
    lastName: "Tursunova",
    specialization: "Neurology",
    experience: "6 yil",
    phone: "+998 90 456 78 90",
    email: "maryam.tursunova@example.com",
  },
  {
    firstName: "John",
    lastName: "Doe",
    specialization: "Dentistry",
    experience: "12 yil",
    phone: "+998 90 567 89 01",
    email: "john.doe@example.com",
  },
];

const Doctors = () => {
  const [showAll, setShowAll] = useState(false);

  const displayDoctors = showAll ? demoDoctors : demoDoctors.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1220px] mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-blue-600">
          Bizning Shifokorlar
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {displayDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-blue-100 text-5xl">
                <FaUserMd />
              </div>

              <h3 className="font-bold text-2xl mb-3 text-gray-800">
                {doc.firstName} {doc.lastName}
              </h3>

              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <FaBriefcase className="text-yellow-500" />
                Mutaxassislik: {doc.specialization}
              </p>

              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <FaClock className="text-green-500" />
                Tajriba: {doc.experience}
              </p>

              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <FaPhoneAlt className="text-purple-500" />
                Telefon: {doc.phone}
              </p>

              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                Email: {doc.email}
              </p>
            </div>
          ))}
        </div>

        {/* Barchasini ko‘rish tugmasi */}
        <div className="flex justify-center mt-12">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all flex items-center gap-2 font-semibold shadow-lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Kamroq ko‘rsatish" : "Barchasini ko‘rish"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
