// demoClinics.js
export const demoClinics = [
  // 1
  {
    id: 1,
    type: "clinic",
    name: "City Clinic",
    logo: "🏥",
    specialization: "Umumiy shifokorlik",
    hours: "09:00 - 18:00",
    rating: 4.8,
    price: "150,000",
    avgPrice: "150,000",
    distance: "2.3 km",
    address: "Tashkent, Amir Temur ko'chasi 12",
    phone: "+998 71 123 45 67",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    description: "City Clinic - Toshkent shahrining eng yirik va zamonaviy tibbiy markazlaridan biri. Bizning klinikamiz 20 yildan ortiq tajribaga ega.",
    services: ["Umumiy tekshiruv", "Laboratoriya tadqiqotlari", "USG", "Rentgen", "Fizioterapiya", "Stomatologiya", "Pediatriya", "Ginekologiya"],
    callCenter: ["1080", "1120", "+998 71 123 45 67"],
    doctors: [
      { id: 101, name: "Dr. Alisher Rahimov", specialization: "Terapevt", rating: 4.9, experience: "12 yil", avatar: "👨‍⚕️", price: "120,000", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" },
      { id: 102, name: "Dr. Zulfiya Karimova", specialization: "Kardiolog", rating: 4.8, experience: "15 yil", avatar: "👩‍⚕️", price: "180,000", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2" },
      { id: 103, name: "Dr. Shohruh To'rayev", specialization: "Nevrolog", rating: 4.7, experience: "10 yil", avatar: "👨‍⚕️", price: "160,000", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7" }
    ],
    reviews: [
      { name: "Ali Valiyev", rating: 5, text: "Ajoyib xizmat! Shifokorlar juda malakali.", date: "2024-03-15" },
      { name: "Dilnoza Xodjayeva", rating: 4, text: "Klinika jihozlari zamonaviy, xodimlar mehmondo'st.", date: "2024-03-10" },
      { name: "Javohir Ismoilov", rating: 5, text: "O'g'limni davolatdik, juda yaxshi natijalar oldik.", date: "2024-03-05" }
    ]
  },

  // 2
  {
    id: 2,
    type: "doctor",
    name: "Dr. Samad Karimov",
    avatar: "👨‍⚕️",
    specialization: "Kardiolog",
    experience: "15 yil",
    rating: 4.9,
    price: "200,000",
    distance: "1.5 km",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    bio: "Samad Karimov - yuqori toifali kardiolog, 15 yillik tajribaga ega.",
    schedule: "Dushanba - Juma / 09:00 – 17:00",
    phone: "+998 90 123 45 67",
    certificates: ["Amerika Kardiologiya Assotsiatsiyasi sertifikati (2018)", "Germaniya Tibbiyot Akademiyasi (2020)"],
    socials: { telegram: "@drsamadkarimov", instagram: "dr_samad_karimov", linkedin: "samad-karimov-md" },
    patients: 2450,
    education: "Toshkent Tibbiyot Akademiyasi, Kardiologiya fakulteti",
    languages: ["O'zbek", "Rus", "Ingliz"],
    reviews: [
      { name: "Olimjon Sobirov", rating: 5, text: "Doktor Samad mening hayotimni saqlab qoldi.", date: "2024-03-18" },
      { name: "Maftuna Abdullayeva", rating: 5, text: "Juda tajribali va sabrli shifokor.", date: "2024-03-12" }
    ],
    clinic: { name: "Heart Center", id: 5 }
  },

  // 3
  {
    id: 3,
    type: "gym",
    name: "FitLife Sport Zali",
    image: "🏋️",
    trainings: ["Fitnes", "Yoga", "Boks"],
    monthlyPrice: "350,000",
    rating: 4.7,
    distance: "3.1 km",
  },

  // 4
  {
    id: 4,
    type: "medicine",
    name: "Paracetamol 500mg",
    image: "💊",
    price: "12,000",
    rating: 4.6,
    stock: true,
  },

  // 5
  {
    id: 5,
    type: "clinic",
    name: "Heart Center",
    logo: "❤️",
    specialization: "Kardiologiya",
    hours: "08:00 - 17:00",
    rating: 4.9,
    price: "250,000",
    avgPrice: "250,000",
    distance: "4.2 km",
    address: "Tashkent, Mustaqillik 45",
    phone: "+998 71 234 56 78",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    description: "Heart Center - O'zbekistondagi eng yirik kardiologiya markazi.",
    services: ["Kardiologik tekshiruv", "EKG", "Ekokardiyografiya", "Stress-test"],
    callCenter: ["1080", "1121", "+998 71 234 56 78"],
    doctors: [
      { id: 2, name: "Dr. Samad Karimov", specialization: "Kardiolog", rating: 4.9, experience: "15 yil", avatar: "👨‍⚕️", price: "200,000", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7" },
      { id: 201, name: "Dr. Nodira Yusupova", specialization: "Kardiologiya jarrohi", rating: 4.8, experience: "18 yil", avatar: "👩‍⚕️", price: "300,000", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2" }
    ],
    reviews: [
      { name: "Ravshan Alimov", rating: 5, text: "Ota-onamning yurak muammolarini muvaffaqiyatli davoladilar.", date: "2024-03-20" }
    ]
  },

  // 6
  {
    id: 6,
    type: "doctor",
    name: "Dr. Maryam Azimova",
    avatar: "👩‍⚕️",
    specialization: "Pediatr",
    experience: "10 yil",
    rating: 5.0,
    price: "180,000",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    bio: "Maryam Azimova - bolalar shifokori, 10 yillik tajribaga ega.",
    schedule: "Dushanba - Shanba / 08:00 – 16:00",
    phone: "+998 90 987 65 43",
    certificates: ["Pediatriya ixtisosligi (2015)", "Bolalar immunologi (2018)"],
    socials: { telegram: "@drmaryamazimova", instagram: "dr_maryam_azimova" },
    patients: 3200,
    reviews: [
      { name: "Sevinch Qodirova", rating: 5, text: "Farzandimni davolatdik, juda yaxshi munosabat.", date: "2024-03-22" }
    ]
  },

  // 7
  {
    id: 7,
    type: "clinic",
    name: "Smile Dental",
    logo: "🦷",
    specialization: "Stomatologiya",
    hours: "10:00 - 19:00",
    rating: 4.5,
    price: "100,000",
    avgPrice: "100,000",
    distance: "3.0 km",
    address: "Tashkent, Shayxontohur ko'chasi 7",
    phone: "+998 71 987 65 43",
    image: "https://images.unsplash.com/photo-1588776814546-1b07a7d8f2b5",
    description: "Smile Dental - Zamonaviy stomatologiya klinikasi.",
    services: ["Tish tozalash", "Plomba qo'yish", "Ortodontiya"],
    callCenter: ["1085", "+998 71 987 65 43"]
  },

  // 8
  {
    id: 8,
    type: "doctor",
    name: "Dr. Nodira Yusupova",
    avatar: "👩‍⚕️",
    specialization: "Kardiologiya jarrohi",
    experience: "18 yil",
    rating: 4.8,
    price: "300,000",
    distance: "4.0 km",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    bio: "Yurak jarrohligi bo'yicha mutaxassis.",
    schedule: "Dushanba - Juma / 09:00 – 17:00",
    phone: "+998 90 654 32 10",
    certificates: ["Kardiologiya jarrohligi (2017)", "Yurak transplantatsiyasi kursi (2021)"],
    patients: 1500
  },

  // 9
  {
    id: 9,
    type: "medicine",
    name: "Ibuprofen 400mg",
    image: "💊",
    price: "18,000",
    rating: 4.7,
    stock: true
  },

  // 10
  {
    id: 10,
    type: "gym",
    name: "PowerGym Zali",
    image: "🏋️",
    trainings: ["Crossfit", "Zumba", "Pilates"],
    monthlyPrice: "400,000",
    rating: 4.8,
    distance: "5.2 km"
  }
];
