import { Lightbulb, AlertCircle, Users, Pill, Clock, Shield, Heart, Bell } from "lucide-react";

const problems = [
  {
    id: 1,
    problem: "Oila a'zolarining real-time holatini bilish qiyin",
    solution: "Dashboard + Keyinchalik smart soatlar va health sensorlar bilan integratsiya",
    details: "Har bir oila a'zosining joylashuvi, sog'liq holati va faoliyatini real vaqtda kuzatish imkoniyati",
    icon: Users,
    color: "blue",
    stats: "24/7 monitoring",
  },
  {
    id: 2,
    problem: "Dorilar mosligini aniqlash qiyin",
    solution: "OpenFDA, DrugBank, MedlinePlus, Local pharmacy datalari orqali AI analiz",
    details: "Sun'iy intellekt yordamida dorilar o'rtasidagi o'zaro ta'sirni avtomatik tekshirish va ogohlantirish",
    icon: Pill,
    color: "red",
    stats: "1M+ dori bazasi",
  },
  {
    id: 3,
    problem: "Dori qabul qilish vaqtini esdan chiqarish",
    solution: "Smart eslatmalar va push notification tizimi",
    details: "Belgilangan vaqtda avtomatik eslatmalar yuborish va qabul qilingan dorilarni tracking qilish",
    icon: Clock,
    color: "amber",
    stats: "99% eslatma aniqlik",
  },
  {
    id: 4,
    problem: "Tibbiy ma'lumotlarning xavfsizligi",
    solution: "End-to-end shifrlash va HIPAA standartlariga muvofiq xavfsizlik",
    details: "Barcha shaxsiy tibbiy ma'lumotlar shifrlanadi va faqat ruxsat etilgan foydalanuvchilar kirishi mumkin",
    icon: Shield,
    color: "green",
    stats: "256-bit shifrlash",
  },
  {
    id: 5,
    problem: "Allergiya va xronik kasalliklar haqida tezkor ma'lumot yo'qligi",
    solution: "Shaxsiy sog'liq profili va tez kirish tizimi",
    details: "Har bir oila a'zosining allergiyalari, xronik kasalliklari va tibbiy tarixini bir joyda saqlash",
    icon: Heart,
    color: "pink",
    stats: "To'liq tibbiy profil",
  },
  {
    id: 6,
    problem: "Favqulodda vaziyatlarda tez yordam chaqirish qiyin",
    solution: "SOS tugmasi va avtomatik emergency kontaktlariga xabar yuborish",
    details: "Bir tugma bosish bilan tez yordam chaqirish va oila a'zolariga joylashuvni yuborish",
    icon: Bell,
    color: "purple",
    stats: "< 3 soniya javob",
  },
];

const colorClasses = {
  blue: {
    border: "border-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badge: "bg-blue-50 text-blue-700",
  },
  red: {
    border: "border-red-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    badge: "bg-red-50 text-red-700",
  },
  amber: {
    border: "border-amber-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    badge: "bg-amber-50 text-amber-700",
  },
  green: {
    border: "border-green-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    badge: "bg-green-50 text-green-700",
  },
  pink: {
    border: "border-pink-500",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    badge: "bg-pink-50 text-pink-700",
  },
  purple: {
    border: "border-purple-500",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    badge: "bg-purple-50 text-purple-700",
  },
};

const Problems = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Muammolar va Yechimlar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oilaviy sog'liqni saqlashda duch keladigan asosiy muammolar va ularning zamonaviy texnologiyalar yordamida yechimlari
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const IconComponent = item.icon;
            const colors = colorClasses[item.color];

            return (
              <div
                key={item.id}
                className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border-l-4 ${colors.border} group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${colors.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                        Muammo
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 leading-tight">
                      {item.problem}
                    </h3>
                  </div>
                </div>

                <div className={`${colors.badge} px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block`}>
                  {item.stats}
                </div>

                <div className="bg-linear-to-br from-gray-50 to-gray-100 p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                      Yechim
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Sog'liq uchun kompleks yechim
          </h3>
          <p className="text-blue-50 text-lg max-w-3xl mx-auto mb-6">
            Bizning platformamiz oila a'zolarining sog'lig'ini bir joyda boshqarish, dorilarni kuzatish va favqulodda vaziyatlarda tezkor yordam berish imkoniyatini taqdim etadi
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Foydalanuvchilar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Dorilar bazasi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Ishonchlilik</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
