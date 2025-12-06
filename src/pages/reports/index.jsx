const Reports = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 sm:mb-5 md:mb-6">
        📊 AI Tahlil Markazi
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Eng xavfli hudud</h3>
          <p className="text-xl font-bold mt-2">Toshkent, Yakkasaroy</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Eng ko‘p chaqiriladigan vaqt</h3>
          <p className="text-xl font-bold mt-2">18:00 - 22:00</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">O‘rtacha kelish vaqti</h3>
          <p className="text-2xl font-bold mt-2 text-green-600">8 daqiqa</p>
        </div>
      </div>

      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <p className="text-gray-700">
          AI foydalanuvchi simptomlari va lokatsiya asosida tibbiy ustuvorlikni
          hisoblaydi. Kelajakda bu yerda grafiklar, heatmap va prognozlar
          bo‘ladi.
        </p>
      </div>
    </div>
  );
};

export default Reports;
