import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Syringe,
  Hospital,
  Smartphone,
  Ambulance,
  Stethoscope,
  TestTube,
  Clock,
  Star,
  ArrowRight,
  Shield,
  Award,
  Users,
} from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Bepul emlash kampaniyasi",
    description:
      "Toshkent shahrida 50 yoshdan oshgan fuqarolar uchun gripp va COVID-19 emlashlari mutlaqo bepul. Ro'yxatdan o'tish 5 daqiqa!",
    image: "💉",
    icon: Syringe,
    button: "Ro'yxatdan o'tish",
    bgColor: "from-emerald-500 to-teal-600",
    stats: "10,000+ kishi emlandi",
    badge: "Yangi",
  },
  {
    id: 2,
    title: "AI shifokor maslahatchi",
    description:
      "Sun'iy intellekt yordamida bir necha soniyada alomatlaringizni tahlil qiling va eng yaxshi shifokorni toping.",
    image: "🤖",
    icon: Stethoscope,
    button: "Sinab ko'rish",
    bgColor: "from-blue-500 to-indigo-600",
    stats: "95% aniqlik",
    badge: "Mashhur",
  },
  {
    id: 3,
    title: "24/7 onlayn konsultatsiya",
    description:
      "Istalgan vaqtda shifokor bilan video suhbat. Uydan chiqmasdan professional maslahat oling.",
    image: "📱",
    icon: Smartphone,
    button: "Boshlash",
    bgColor: "from-purple-500 to-pink-600",
    stats: "1000+ shifokor onlayn",
    badge: "TOP",
  },
  {
    id: 4,
    title: "Tezkor tez yordam",
    description:
      "GPS orqali eng yaqin tez yordam mashinasini 3 daqiqada chaqiring. Jonli kuzatuv va holat ma'lumoti.",
    image: "🚑",
    icon: Ambulance,
    button: "Hozir chaqarish",
    bgColor: "from-red-500 to-orange-600",
    stats: "O'rtacha 8 daqiqada",
    badge: "Tez",
  },
  {
    id: 5,
    title: "Premium shifokorlar",
    description:
      "15+ yillik tajribaga ega eng yaxshi mutaxassislar. Shaxsiy reja va individual yondashuv.",
    image: "⭐",
    icon: Award,
    button: "Ko'rish",
    bgColor: "from-amber-500 to-yellow-600",
    stats: "4.9★ o'rtacha reyting",
    badge: "Premium",
  },
  {
    id: 6,
    title: "Uyda laboratoriya",
    description:
      "Hamshira uyingizga kelib tahlil oladi. Natija 24 soatda onlayn kabinetingizda tayyor bo'ladi.",
    image: "🧪",
    icon: TestTube,
    button: "Buyurtma berish",
    bgColor: "from-cyan-500 to-blue-600",
    stats: "50+ turdagi tahlil",
    badge: "Qulay",
  },
];

const features = [
  { icon: Shield, text: "100% xavfsiz", color: "text-green-600" },
  { icon: Clock, text: "Tez xizmat", color: "text-blue-600" },
  { icon: Award, text: "Sertifikatlangan", color: "text-purple-600" },
  { icon: Users, text: "50,000+ mijoz", color: "text-orange-600" },
];

const AnnouncementCard = ({ announcement, isActive }) => {
  const Icon = announcement.icon;

  return (
    <div
      className={`relative group transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"
      }`}
    >
      <div
        className={`relative bg-linear-to-br ${announcement.bgColor} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
      >
        {/* Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full shadow-lg">
            {announcement.badge}
          </span>
        </div>

        {/* Content */}
        <div className="relative p-8">
          {/* Icon */}
          <div className="mb-6 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
              <div className="relative w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                {announcement.image}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 text-center">
            {announcement.title}
          </h3>

          {/* Description */}
          <p className="text-white/90 text-sm leading-relaxed mb-4 text-center min-h-[60px]">
            {announcement.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Icon className="w-4 h-4 text-white/80" />
            <span className="text-xs font-medium text-white/80">
              {announcement.stats}
            </span>
          </div>

          {/* Button */}
          <button className="w-full py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg">
            {announcement.button}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(announcements.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setIsAutoPlaying(false);
  };

  const currentAnnouncements = announcements.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="relative py-16 bg-linear-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Clinic Go platformasi</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Sog'ligingiz uchun
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              eng yaxshi{" "}
            </span>
            xizmatlar
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Zamonaviy texnologiyalar va professional shifokorlar bir joyda
          </p>
        </div>

        {/* Features Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
              >
                <FeatureIcon className={`w-5 h-5 ${feature.color}`} />
                <span className="text-sm font-medium text-gray-700">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === totalPages - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {currentAnnouncements.map((item) => (
              <AnnouncementCard
                key={item.id}
                announcement={item}
                isActive={true}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-2 bg-linear-to-r from-blue-600 to-purple-600"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Hoziroq boshlang va sog'lig'ingizga g'amxo'rlik qiling
          </p>
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            Bepul konsultatsiya olish
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
