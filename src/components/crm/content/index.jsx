const CRMContent = ({ activePage }) => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* Sahifa Sarlavhasi */}
      <h1 className="text-3xl font-bold mb-6">
        {activePage === "Dashboard" && "🚨 Faol chaqiriqlar"}
        {activePage === "Users" && "👤 Bemorlar ro'yxati"}
        {activePage === "Reports" && "📊 AI tahlil markazi"}
      </h1>

      {/* Dashboard */}
      {activePage === "Dashboard" && (
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="font-bold text-red-600">Yangi chaqiriqlar</h3>
            <p className="text-3xl mt-2 font-bold">5</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="font-bold text-blue-600">Yo‘lda bo‘lganlar</h3>
            <p className="text-3xl mt-2 font-bold">3</p>
          </div>

          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="font-bold text-green-600">Hal qilingan</h3>
            <p className="text-3xl mt-2 font-bold">12</p>
          </div>

        </div>
      )}

      {/* Users */}
      {activePage === "Users" && (
        <div className="bg-white shadow rounded-lg p-6">
          <p>Bemorlar ro'yxati bu yerda chiqadi (API ulanadi)</p>
        </div>
      )}

      {/* Reports */}
      {activePage === "Reports" && (
        <div className="bg-white shadow rounded-lg p-6">
          <p>AI analiz jadvali, risk baholash, statistika shu yerda.</p>
        </div>
      )}

    </div>
  );
};

export default CRMContent;
