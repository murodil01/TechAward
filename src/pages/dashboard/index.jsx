import { useState } from "react";
import {
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  MapPin,
  Phone,
  TrendingUp,
  Calendar,
  Search,
  MoreVertical,
} from "lucide-react";

const Dashboard = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      title: "Yangi chaqiriqlar",
      value: 7,
      icon: AlertCircle,
      color: "red",
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      trend: "+12%",
      trendUp: true,
    },
    {
      title: "Yo'lda bo'lganlar",
      value: 4,
      icon: Activity,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      trend: "-5%",
      trendUp: false,
    },
    {
      title: "Bajarilganlar",
      value: 21,
      icon: CheckCircle,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      trend: "+8%",
      trendUp: true,
    },
  ];

  const emergencyCalls = [
    {
      id: 1,
      name: "Aliyev Aziz",
      age: 45,
      address: "Chilonzor 12, Toshkent",
      status: "Yo'lda",
      priority: "YUQORI",
      time: "5 daqiqa oldin",
      phone: "+998 90 123 45 67",
      complaint: "Yurak og'rig'i",
      statusColor: "blue",
      priorityColor: "red",
    },
    {
      id: 2,
      name: "Karimova Malika",
      age: 32,
      address: "Registon ko'chasi, Samarqand",
      status: "Yangi",
      priority: "O'RTA",
      time: "10 daqiqa oldin",
      phone: "+998 91 234 56 78",
      complaint: "Bosh og'rig'i",
      statusColor: "yellow",
      priorityColor: "yellow",
    },
    {
      id: 3,
      name: "Rahimov Jasur",
      age: 28,
      address: "Mustaqillik 45, Andijon",
      status: "Yo'lda",
      priority: "YUQORI",
      time: "2 daqiqa oldin",
      phone: "+998 93 345 67 89",
      complaint: "Nafas qisilishi",
      statusColor: "blue",
      priorityColor: "red",
    },
    {
      id: 4,
      name: "Yusupova Dilnoza",
      age: 67,
      address: "Navoi ko'chasi, Buxoro",
      status: "Kutilmoqda",
      priority: "PAST",
      time: "25 daqiqa oldin",
      phone: "+998 94 456 78 90",
      complaint: "Bosh aylanishi",
      statusColor: "gray",
      priorityColor: "green",
    },
  ];

  const getStatusBadge = (status, color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
      gray: "bg-gray-100 text-gray-700 border-gray-200",
      green: "bg-green-100 text-green-700 border-green-200",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors[color]}`}
      >
        {status}
      </span>
    );
  };

  const getPriorityBadge = (priority, color) => {
    const colors = {
      red: "bg-red-100 text-red-700 border-red-300",
      yellow: "bg-yellow-100 text-yellow-700 border-yellow-300",
      green: "bg-green-100 text-green-700 border-green-300",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${colors[color]}`}
      >
        {priority}
      </span>
    );
  };

  const filteredCalls = emergencyCalls.filter((call) => {
    const matchesSearch =
      call.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "new" && call.status === "Yangi") ||
      (filter === "active" && call.status === "Yo'lda") ||
      (filter === "waiting" && call.status === "Kutilmoqda");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="flex items-center gap-2 sm:gap-3 md:gap-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                <span className="text-3xl sm:text-4xl md:text-5xl">🚨</span>
                Live Chaqiriqlar Paneli
              </h1>

              <p className="text-gray-600 mt-2 flex items-center gap-2">
                <Calendar size={16} />
                {new Date().toLocaleDateString("uz-UZ", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold">Tizim faol</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-linear-to-r ${stat.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={stat.textColor} size={24} />
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp
                      size={16}
                      className={
                        stat.trendUp
                          ? "text-green-600"
                          : "text-red-600 rotate-180"
                      }
                    />
                    <span
                      className={`text-xs font-semibold ${
                        stat.trendUp ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.trend}
                    </span>
                  </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-2">
                  {stat.title}
                </h3>
                <p className={`text-4xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={12} />
                    Oxirgi yangilanish: Hozir
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Ism yoki manzil bo'yicha qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  filter === "all"
                    ? "bg-linear-to-r from-red-500 to-pink-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Barchasi
              </button>
              <button
                onClick={() => setFilter("new")}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  filter === "new"
                    ? "bg-linear-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Yangi
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  filter === "active"
                    ? "bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Yo'lda
              </button>
              <button
                onClick={() => setFilter("waiting")}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  filter === "waiting"
                    ? "bg-linear-to-r from-gray-500 to-slate-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Kutilmoqda
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Calls List */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-red-600 to-pink-600 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <AlertCircle size={24} />
              Faol Chaqiriqlar ({filteredCalls.length})
            </h2>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Bemor
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Manzil
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Shikoyat
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Holat
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Ustuvorlik
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Vaqt
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Amallar
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCalls.map((call) => (
                  <tr
                    key={call.id}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {call.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {call.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {call.age} yosh
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2">
                        <MapPin
                          size={16}
                          className="text-red-600 mt-1 shrink-0"
                        />
                        <div className="text-sm text-gray-700">
                          {call.address}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {call.complaint}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(call.status, call.statusColor)}
                    </td>
                    <td className="px-6 py-4">
                      {getPriorityBadge(call.priority, call.priorityColor)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock size={14} />
                        {call.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical size={18} className="text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden divide-y divide-gray-200">
            {filteredCalls.map((call) => (
              <div
                key={call.id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {call.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{call.name}</div>
                      <div className="text-sm text-gray-500">
                        {call.age} yosh
                      </div>
                    </div>
                  </div>
                  {getPriorityBadge(call.priority, call.priorityColor)}
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin
                      size={16}
                      className="text-red-600 mt-0.5 shrink-0"
                    />
                    <span>{call.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone size={16} className="text-blue-600 shrink-0" />
                    <span>{call.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <AlertCircle
                      size={16}
                      className="text-orange-600 shrink-0"
                    />
                    <span className="font-medium">{call.complaint}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {getStatusBadge(call.status, call.statusColor)}
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={12} />
                    {call.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCalls.length === 0 && (
            <div className="text-center py-16">
              <AlertCircle size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Hech qanday chaqiriq topilmadi
              </h3>
              <p className="text-gray-500">
                Qidiruv so'rovingizni o'zgartiring yoki filterni qaytadan
                tanlang
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
