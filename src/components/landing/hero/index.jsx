import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  // Google Maps API orqali manzil olish
  const fetchAddress = async (lat, lng) => {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Sizning API kalitingiz
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        return data.results[0].formatted_address;
      } else {
        return "Manzil topilmadi";
      }
    } catch (err) {
      console.error(err);
      return "Xato yuz berdi";
    }
  };

  // 📍 Lokatsiyani olish
  const getLocation = () => {
    if (!navigator.geolocation) {
      toast.error("GPS qurilmangizda mavjud emas");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        const address = await fetchAddress(lat, lng);

        setLocation({ lat, lng, address });
        toast.success(`Lokatsiya olindi ✅ ${address}`);
        setLoading(false);
      },
      () => {
        toast.error("Lokatsiyani aniqlab bo'lmadi");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // 🚑 Tez yordam chaqirish
  const callAmbulance = async () => {
    if (!location) {
      toast.error("Avval lokatsiyani yuboring");
      return;
    }

    setLoading(true);

    try {
      await axios.post("https://your-api.com/ambulance", {
        location,
        time: new Date(),
      });

      toast.success("🚑 Tez yordam muvaffaqiyatli yuborildi!");
    } catch {
      toast.error("Server bilan aloqa yo'q. Qayta urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-linear-to-b from-white to-gray-50">
      <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row items-center py-20 px-6 gap-10">
        {/* Left side: Text and Buttons */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6 leading-tight">
            Tez yordam <span className="text-blue-600">bir tugmada</span>
          </h1>

          <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
            AI va GPS asosida ishlaydigan tizim. Siz bosasiz – biz joylashuvingizni
            aniqlaymiz va eng yaqin tez yordam brigadasini yuboramiz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={callAmbulance}
              disabled={loading}
              className="relative bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <span className="loader mr-2"></span>}
              🚑 Tez yordam chaqirish
            </button>

            <button
              onClick={getLocation}
              disabled={loading}
              className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <span className="loader mr-2"></span>}
              📍 Lokatsiya yuborish
            </button>
          </div>

          {/* Lokatsiya ma'lumotini ko‘rsatish */}
          {location && (
            <p className="mt-4 text-green-600 text-sm font-medium">
              ✅ Lokatsiya tayyor:{" "}
              <span className="font-mono">{location.address}</span> <br />
              ({location.lat}, {location.lng})
            </p>
          )}
        </div>

        {/* Right side: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <img
              src="https://uzreport.news/fotobank/image/510b2ba31d0746309f4a01fce54051b9.jpeg"
              alt="Ambulance AI"
              className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full font-semibold shadow-md text-sm animate-pulse">
              AI + GPS tizimi
            </div>
          </div>
        </div>
      </div>

      {/* Loader CSS */}
      <style>
        {`
          .loader {
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
