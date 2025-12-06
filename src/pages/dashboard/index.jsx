const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-red-600 mb-6">
        🚨 Live chaqiriqlar paneli
      </h1>

      {/* Stat Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Yangi chaqiriqlar</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">7</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Yo'lda bo‘lganlar</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">4</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-gray-600">Bajarilganlar</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">21</p>
        </div>

      </div>

      {/* Emergency List */}
      <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
        <h2 className="text-lg font-bold p-4 bg-red-600 text-white">
          Faol chaqiriqlar
        </h2>

        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Ism</th>
              <th className="p-3">Manzil</th>
              <th className="p-3">Holat</th>
              <th className="p-3">Ustuvorlik</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">Aliyev A.</td>
              <td className="p-3">Chilonzor, Toshkent</td>
              <td className="p-3">Yo‘lda</td>
              <td className="p-3 text-red-600 font-bold">YUQORI</td>
            </tr>
            <tr>
              <td className="p-3">Karimova M.</td>
              <td className="p-3">Samarqand</td>
              <td className="p-3">Yangi</td>
              <td className="p-3 text-yellow-600 font-bold">O'RTA</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
