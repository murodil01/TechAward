import React, { useState } from "react";
import { 
  User, Search, Filter, Calendar, Phone, Mail, 
  MapPin, Activity, Heart, Clock, Plus, Edit2, 
  Trash2, Eye, Download, Upload, MoreVertical,
  AlertCircle, CheckCircle2, XCircle, FileText
} from "lucide-react";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid"); // grid or table

  const patients = [
    {
      id: 1,
      name: "Aliyev Aziz",
      age: 54,
      gender: "Erkak",
      phone: "+998 90 123 45 67",
      email: "aliyev@example.com",
      address: "Chilonzor 12, Toshkent",
      disease: "Yurak xurujlari",
      status: "Faol",
      lastCall: "Bugun, 14:30",
      totalCalls: 8,
      bloodType: "A+",
      allergies: "Penitsiliinga",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      name: "Karimova Malika",
      age: 32,
      gender: "Ayol",
      phone: "+998 91 234 56 78",
      email: "karimova@example.com",
      address: "Registon, Samarqand",
      disease: "Nafas yetishmovchiligi",
      status: "Davolanmoqda",
      lastCall: "Kecha, 09:15",
      totalCalls: 3,
      bloodType: "O+",
      allergies: "Yo'q",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      name: "Rahimov Jasur",
      age: 28,
      gender: "Erkak",
      phone: "+998 93 345 67 89",
      email: "rahimov@example.com",
      address: "Mustaqillik 45, Andijon",
      disease: "Qandli diabet",
      status: "Faol",
      lastCall: "3 kun oldin",
      totalCalls: 12,
      bloodType: "B+",
      allergies: "Aspirin",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: 4,
      name: "Yusupova Dilnoza",
      age: 67,
      gender: "Ayol",
      phone: "+998 94 456 78 90",
      email: "yusupova@example.com",
      address: "Navoi ko'chasi, Buxoro",
      disease: "Gipertoniya",
      status: "Nazoratda",
      lastCall: "1 hafta oldin",
      totalCalls: 15,
      bloodType: "AB+",
      allergies: "Yo'q",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      id: 5,
      name: "Salimov Bobur",
      age: 45,
      gender: "Erkak",
      phone: "+998 95 567 89 01",
      email: "salimov@example.com",
      address: "Amir Temur, Namangan",
      disease: "Astma",
      status: "Faol",
      lastCall: "Bugun, 11:00",
      totalCalls: 6,
      bloodType: "A-",
      allergies: "Chang, gul",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    {
      id: 6,
      name: "Normatova Gulnora",
      age: 39,
      gender: "Ayol",
      phone: "+998 97 678 90 12",
      email: "normatova@example.com",
      address: "Yunusobod, Toshkent",
      disease: "Migren",
      status: "Davolanmoqda",
      lastCall: "2 kun oldin",
      totalCalls: 4,
      bloodType: "O-",
      allergies: "Yo'q",
      avatar: "https://i.pravatar.cc/150?img=10"
    }
  ];

  const getStatusBadge = (status) => {
    const styles = {
      "Faol": "bg-green-100 text-green-700 border-green-300",
      "Davolanmoqda": "bg-blue-100 text-blue-700 border-blue-300",
      "Nazoratda": "bg-yellow-100 text-yellow-700 border-yellow-300",
      "Nofaol": "bg-gray-100 text-gray-700 border-gray-300"
    };
    const icons = {
      "Faol": CheckCircle2,
      "Davolanmoqda": Activity,
      "Nazoratda": AlertCircle,
      "Nofaol": XCircle
    };
    const Icon = icons[status];
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 flex items-center gap-1 ${styles[status]}`}>
        <Icon size={14} />
        {status}
      </span>
    );
  };

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = 
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.disease.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      filterStatus === "all" || patient.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const sortedPatients = [...filteredPatients].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "age") return a.age - b.age;
    if (sortBy === "calls") return b.totalCalls - a.totalCalls;
    return 0;
  });

  const stats = [
    { label: "Jami bemorlar", value: patients.length, color: "blue", icon: User },
    { label: "Faol bemorlar", value: patients.filter(p => p.status === "Faol").length, color: "green", icon: CheckCircle2 },
    { label: "Davolanayotganlar", value: patients.filter(p => p.status === "Davolanmoqda").length, color: "yellow", icon: Activity },
    { label: "Bugungi chaqiriqlar", value: patients.filter(p => p.lastCall.includes("Bugun")).length, color: "red", icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-4xl">👤</span>
                Bemorlar Bazasi
              </h1>
              <p className="text-gray-600 mt-2">Barcha bemorlarning to'liq ma'lumotlari</p>
            </div>
            <button className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200">
              <Plus size={20} />
              Yangi bemor
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => {
            const colorClasses = {
              blue: "from-blue-500 to-cyan-500 bg-blue-50 text-blue-600",
              green: "from-green-500 to-emerald-500 bg-green-50 text-green-600",
              yellow: "from-yellow-500 to-orange-500 bg-yellow-50 text-yellow-600",
              red: "from-red-500 to-pink-500 bg-red-50 text-red-600"
            };
            const [gradient, bgColor, textColor] = colorClasses[stat.color].split(' ');
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-linear-to-r ${gradient}`}></div>
                <div className="p-5">
                  <div className={`p-3 rounded-xl ${bgColor} w-fit mb-3`}>
                    <stat.icon className={textColor} size={24} />
                  </div>
                  <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
                  <p className={`text-3xl font-bold ${textColor}`}>{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Bemor qidirish (ism, kasallik, manzil)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none bg-white"
              >
                <option value="all">Barcha statuslar</option>
                <option value="Faol">Faol</option>
                <option value="Davolanmoqda">Davolanmoqda</option>
                <option value="Nazoratda">Nazoratda</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none bg-white"
              >
                <option value="name">Ism bo'yicha</option>
                <option value="age">Yosh bo'yicha</option>
                <option value="calls">Chaqiriqlar soni</option>
              </select>

              <div className="flex gap-2 border-2 border-gray-200 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1 rounded-lg transition-colors ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-3 py-1 rounded-lg transition-colors ${viewMode === "table" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  Table
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{sortedPatients.length}</span> ta bemor topildi
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                <Download size={16} />
                Export
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                <Upload size={16} />
                Import
              </button>
            </div>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPatients.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="bg-linear-to-r from-blue-500 to-purple-600 p-6 relative">
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg backdrop-blur-sm transition-all">
                      <MoreVertical size={18} className="text-white" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{patient.name}</h3>
                      <p className="text-blue-100 text-sm">{patient.age} yosh • {patient.gender}</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Status */}
                  <div className="flex items-center justify-between">
                    {getStatusBadge(patient.status)}
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Phone size={14} className="text-blue-600" />
                      {patient.totalCalls} chaqiriq
                    </span>
                  </div>

                  {/* Disease */}
                  <div className="p-3 bg-red-50 rounded-xl border border-red-200">
                    <div className="flex items-center gap-2 text-red-700">
                      <Heart size={16} />
                      <span className="font-semibold text-sm">{patient.disease}</span>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={14} className="text-blue-600" />
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin size={14} className="text-red-600 mt-0.5 shrink-0" />
                      <span>{patient.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={14} className="text-green-600" />
                      <span>Oxirgi: {patient.lastCall}</span>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <div className="flex-1 bg-gray-50 rounded-lg p-2 text-center">
                      <p className="text-xs text-gray-500">Qon guruhi</p>
                      <p className="text-sm font-bold text-gray-900">{patient.bloodType}</p>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-2 text-center">
                      <p className="text-xs text-gray-500">Allergiya</p>
                      <p className="text-sm font-bold text-gray-900">{patient.allergies}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all">
                      <Eye size={16} />
                      Ko'rish
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-all">
                      <Edit2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === "table" && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-linear-to-r from-blue-500 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase">Bemor</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase">Yoshi</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase">Kasallik</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase">Oxirgi chaqiriq</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase">Chaqiriqlar</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase">Amallar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedPatients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={patient.avatar}
                            alt={patient.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{patient.name}</p>
                            <p className="text-sm text-gray-500">{patient.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{patient.age} yosh</td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-red-700 bg-red-50 px-3 py-1 rounded-full">
                          {patient.disease}
                        </span>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(patient.status)}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{patient.lastCall}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {patient.totalCalls}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors">
                            <Eye size={16} />
                          </button>
                          <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors">
                            <Edit2 size={16} />
                          </button>
                          <button className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards in Table View */}
            <div className="lg:hidden divide-y divide-gray-200">
              {sortedPatients.map((patient) => (
                <div key={patient.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{patient.name}</h3>
                      <p className="text-sm text-gray-500">{patient.age} yosh • {patient.gender}</p>
                      <p className="text-sm text-gray-600 mt-1">{patient.disease}</p>
                    </div>
                    {getStatusBadge(patient.status)}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {patient.lastCall}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                      {patient.totalCalls} chaqiriq
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                      <Eye size={16} />
                      Ko'rish
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
                      <Edit2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {sortedPatients.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <User size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Bemorlar topilmadi
            </h3>
            <p className="text-gray-500 mb-6">
              Qidiruv so'rovingizni o'zgartiring yoki filterni qayta sozlang
            </p>
            <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Yangi bemor qo'shish
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Users;