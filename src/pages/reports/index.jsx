import React, { useState } from "react";
import { 
  Brain, TrendingUp, Clock, MapPin, Activity, 
  AlertTriangle, Zap, Calendar, BarChart3, 
  PieChart, Users, Heart, Download, RefreshCw,
  ArrowUp, ArrowDown, ChevronRight, Sparkles,
  Target, Shield, Bell, Filter
} from "lucide-react";

const Reports = () => {
  const [timeRange, setTimeRange] = useState("week");
  // const [selectedMetric, setSelectedMetric] = useState("all");

  const mainStats = [
    {
      title: "Eng xavfli hudud",
      value: "Toshkent, Yakkasaroy",
      subValue: "127 chaqiriq",
      change: "+23%",
      isUp: true,
      icon: MapPin,
      color: "red",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Eng ko'p chaqiriladigan vaqt",
      value: "18:00 - 22:00",
      subValue: "Kechki soatlar",
      change: "+15%",
      isUp: true,
      icon: Clock,
      color: "orange",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      title: "O'rtacha kelish vaqti",
      value: "8 daqiqa",
      subValue: "Target: 10 daq",
      change: "-12%",
      isUp: false,
      icon: Zap,
      color: "green",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const aiInsights = [
    {
      title: "Yurak xurujlari ko'paydi",
      description: "Oxirgi 7 kunda yurak bilan bog'liq chaqiriqlar 18% oshdi",
      severity: "high",
      icon: Heart,
      recommendation: "Kardiologlarni ko'paytirish tavsiya etiladi",
      trend: "+18%"
    },
    {
      title: "Kechki soatlarda yuklama yuqori",
      description: "18:00-22:00 oralig'ida brigada yetishmayapti",
      severity: "medium",
      icon: Clock,
      recommendation: "Navbatchi brigadalar sonini oshirish kerak",
      trend: "+23%"
    },
    {
      title: "Yakkasaroy tumani risk zonasi",
      description: "Bu hududda chaqiriqlar boshqa hududlarga nisbatan 40% ko'p",
      severity: "high",
      icon: AlertTriangle,
      recommendation: "Doimiy brigada joylashtirish tavsiya etiladi",
      trend: "+40%"
    }
  ];

  const topDiseases = [
    { name: "Yurak xurujlari", count: 45, percentage: 32, color: "bg-red-500" },
    { name: "Qandli diabet", count: 38, percentage: 27, color: "bg-orange-500" },
    { name: "Astma", count: 25, percentage: 18, color: "bg-blue-500" },
    { name: "Gipertoniya", count: 20, percentage: 14, color: "bg-purple-500" },
    { name: "Boshqalar", count: 12, percentage: 9, color: "bg-gray-500" }
  ];

  const responseTimeData = [
    { time: "00-04", value: 65, label: "Tun" },
    { time: "04-08", value: 45, label: "Erta tong" },
    { time: "08-12", value: 75, label: "Tong" },
    { time: "12-16", value: 85, label: "Kunduzi" },
    { time: "16-20", value: 95, label: "Kech" },
    { time: "20-24", value: 80, label: "Kechqurun" }
  ];

  const regionalStats = [
    { region: "Yakkasaroy", calls: 127, avgTime: "8 min", status: "critical" },
    { region: "Chilonzor", calls: 98, avgTime: "7 min", status: "warning" },
    { region: "Yunusobod", calls: 85, avgTime: "9 min", status: "normal" },
    { region: "Mirzo Ulug'bek", calls: 76, avgTime: "6 min", status: "good" },
    { region: "Shayxontohur", calls: 64, avgTime: "8 min", status: "normal" }
  ];

  const getSeverityColor = (severity) => {
    const colors = {
      high: "bg-red-100 text-red-700 border-red-300",
      medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
      low: "bg-green-100 text-green-700 border-green-300"
    };
    return colors[severity];
  };

  const getStatusColor = (status) => {
    const colors = {
      critical: "bg-red-500",
      warning: "bg-yellow-500",
      normal: "bg-blue-500",
      good: "bg-green-500"
    };
    return colors[status];
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
                <span className="text-4xl">🤖</span>
                AI Tahlil Markazi
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-2">
                <Sparkles size={16} className="text-purple-600" />
                Sun'iy intellekt asosida chuqur tahlil va prognozlar
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none bg-white font-medium"
              >
                <option value="today">Bugun</option>
                <option value="week">Bu hafta</option>
                <option value="month">Bu oy</option>
                <option value="year">Bu yil</option>
              </select>
              
              <button className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                <Download size={18} />
                Hisobot yuklab olish
              </button>
            </div>
          </div>
        </div>

        {/* AI Status Banner */}
        <div className="bg-linear-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl shadow-2xl p-6 mb-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                <Brain size={32} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Tizim Faol</h3>
                <p className="text-purple-100 text-sm mt-1">
                  Real-time tahlil va prognozlash davom etmoqda
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-xl backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">98.7% aniqlik</span>
            </div>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {mainStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-linear-to-r ${stat.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                    <stat.icon className={`text-${stat.color}-600`} size={24} />
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                    stat.isUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    {stat.isUp ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-2">{stat.title}</h3>
                <p className={`text-3xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.subValue}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* AI Insights */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Brain className="text-purple-600" size={28} />
                  AI Tavsiyalar
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <RefreshCw size={18} className="text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        insight.severity === "high" ? "bg-red-100" :
                        insight.severity === "medium" ? "bg-yellow-100" : "bg-green-100"
                      }`}>
                        <insight.icon className={
                          insight.severity === "high" ? "text-red-600" :
                          insight.severity === "medium" ? "text-yellow-600" : "text-green-600"
                        } size={24} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{insight.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getSeverityColor(insight.severity)}`}>
                            {insight.trend}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{insight.description}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Target size={14} className="text-purple-600" />
                          <span className="text-purple-700 font-medium">{insight.recommendation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Diseases */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <PieChart className="text-red-600" size={24} />
                Eng ko'p kasalliklar
              </h2>

              <div className="space-y-4">
                {topDiseases.map((disease, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">{disease.name}</span>
                      <span className="font-bold text-gray-900">{disease.count}</span>
                    </div>
                    <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`absolute left-0 top-0 h-full ${disease.color} rounded-full transition-all duration-500`}
                        style={{ width: `${disease.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{disease.percentage}% jami chaqiriqlardan</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-linear-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                  <BarChart3 size={18} />
                  To'liq statistika
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Response Time Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Activity className="text-blue-600" size={24} />
              Kun davomida yuklama
            </h2>

            <div className="space-y-4">
              {responseTimeData.map((data, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-20 text-sm font-semibold text-gray-700">
                    {data.time}
                  </div>
                  <div className="flex-1">
                    <div className="relative w-full h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg transition-all duration-500 flex items-center justify-end pr-3"
                        style={{ width: `${data.value}%` }}
                      >
                        <span className="text-white text-xs font-bold">{data.value}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-24 text-sm text-gray-600">
                    {data.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>AI Tavsiya:</strong> 16:00-20:00 oralig'ida brigada sonini 30% oshirish kerak
              </p>
            </div>
          </div>

          {/* Regional Stats */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="text-red-600" size={24} />
              Hududlar bo'yicha tahlil
            </h2>

            <div className="space-y-3">
              {regionalStats.map((stat, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(stat.status)}`}></div>
                      <h3 className="font-bold text-gray-900">{stat.region}</h3>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stat.calls}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">O'rtacha vaqt:</span>
                    <span className={`font-bold ${
                      parseInt(stat.avgTime) <= 7 ? "text-green-600" :
                      parseInt(stat.avgTime) <= 9 ? "text-yellow-600" : "text-red-600"
                    }`}>
                      {stat.avgTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="flex items-start gap-3">
                <Shield className="text-purple-600 shrink-0 mt-1" size={20} />
                <p className="text-sm text-purple-800">
                  <strong>Xavfsizlik tavsiyasi:</strong> Yakkasaroy va Chilonzor tumanlari uchun qo'shimcha resurslar ajratish zarur
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Features Banner */}
        <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                <Sparkles size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Yangi AI funksiyalar tez orada</h3>
                <p className="text-purple-100">
                  Heatmap visualizatsiyasi, real-time prognozlash, va ko'proq tahlil vositalari
                </p>
              </div>
            </div>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg whitespace-nowrap">
              Batafsil ma'lumot
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reports;