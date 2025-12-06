const modules = [
  { name: "Klinika Marketplace", icon: "🏥", desc: "Klinikalar ro‘yxati, narxlar, yo‘nalishlar, reviews" },
  { name: "Doktor Portfolio & Booking", icon: "👨‍⚕️", desc: "Profil, tajriba, online yozilish" },
  { name: "Bemor & Oila Dashboard", icon: "📊", desc: "Shaxsiy va oilaviy health monitoring" },
  { name: "Dori Analiz & Ogohlantirish (AI)", icon: "💊", desc: "Dorilar xavfi va kombinatsiyasi" },
  { name: "Masofaviy Tibbiyot", icon: "🩺", desc: "Uzoq hududlar uchun onlayn konsultatsiya" },
  { name: "Sog‘lom Turmush Tarzi", icon: "🏃‍♂️", desc: "Sport, treninglar, online a’zolik" },
];

const Modules = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1220px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Platforma Modullari</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <div key={mod.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-4">{mod.icon}</div>
              <h3 className="font-bold text-xl mb-2">{mod.name}</h3>
              <p className="text-gray-600">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
