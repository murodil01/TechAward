const Users = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-red-600 mb-6">
        👤 Bemorlar bazasi
      </h1>

      <div className="bg-white shadow rounded-lg overflow-hidden">

        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Ism</th>
              <th className="p-3">Yoshi</th>
              <th className="p-3">Kasallik</th>
              <th className="p-3">Oxirgi chaqiriq</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">Aliyev A.</td>
              <td className="p-3">54</td>
              <td className="p-3">Yurak xuruji</td>
              <td className="p-3">Bugun</td>
            </tr>
            <tr>
              <td className="p-3">Karimova M.</td>
              <td className="p-3">32</td>
              <td className="p-3">Nafas yetishmovchiligi</td>
              <td className="p-3">Kecha</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Users;
