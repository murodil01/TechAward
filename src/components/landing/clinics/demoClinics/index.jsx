// demoClinics.js
export const demoClinics = [
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
    description: "City Clinic - Toshkent shahrining eng yirik va zamonaviy tibbiy markazlaridan biri. Bizning klinikamiz 20 yildan ortiq tajribaga ega bo'lib, bemorlarga yuqori sifatli tibbiy xizmatlarni taqdim etadi. 200 dan ortiq malakali shifokorlar, zamonaviy diagnostika uskunalari va qulay sharoitlar.",
    services: ["Umumiy tekshiruv", "Laboratoriya tadqiqotlari", "USG", "Rentgen", "Fizioterapiya", "Stomatologiya", "Pediatriya", "Ginekologiya"],
    callCenter: ["1080", "1120", "+998 71 123 45 67"],
    doctors: [
      { 
        id: 101, 
        name: "Dr. Alisher Rahimov", 
        specialization: "Terapevt",
        rating: 4.9,
        experience: "12 yil",
        avatar: "👨‍⚕️",
        price: "120,000",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
      },
      { 
        id: 102, 
        name: "Dr. Zulfiya Karimova", 
        specialization: "Kardiolog",
        rating: 4.8,
        experience: "15 yil",
        avatar: "👩‍⚕️",
        price: "180,000",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
      },
      { 
        id: 103, 
        name: "Dr. Shohruh To'rayev", 
        specialization: "Nevrolog",
        rating: 4.7,
        experience: "10 yil",
        avatar: "👨‍⚕️",
        price: "160,000",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7"
      }
    ],
    reviews: [
      { 
        name: "Ali Valiyev", 
        rating: 5, 
        text: "Ajoyib xizmat! Shifokorlar juda malakali va bemorlarga diqqat bilan qarashadi. Klinikada hamma narsa tashkil etilgan.",
        date: "2024-03-15"
      },
      { 
        name: "Dilnoza Xodjayeva", 
        rating: 4, 
        text: "Klinika jihozlari zamonaviy, xodimlar mehmondo'st. Narxlar biroz yuqori, lekin sifat uchun bunga arziydi.",
        date: "2024-03-10"
      },
      { 
        name: "Javohir Ismoilov", 
        rating: 5, 
        text: "O'g'limni davolatdik, juda yaxshi natijalar oldik. Barcha xodimlarga rahmat!",
        date: "2024-03-05"
      }
    ]
  },
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
    bio: "Samad Karimov - yuqori toifali kardiolog, 15 yillik tajribaga ega. Amerika va Germaniyada malaka oshirgan. Yuqori qon bosimi, yurak etishmovchiligi va aritmiya kasalliklarini davolash bo'yicha mutaxassis. 10 dan ortiq ilmiy maqolalar muallifi, xalqaro konferensiyalarda ishtirok etadi.",
    schedule: "Dushanba - Juma / 09:00 – 17:00",
    phone: "+998 90 123 45 67",
    certificates: [
      "Amerika Kardiologiya Assotsiatsiyasi sertifikati (2018)",
      "Germaniya Tibbiyot Akademiyasi (2020)",
      "Xalqaro Kardiologiya Kongressi (2022)",
      "Evropa Kardiologiya Jamiyati a'zosi (2021)",
      "Pediatrik Kardiologiya ixtisosligi (2019)"
    ],
    socials: {
      telegram: "@drsamadkarimov",
      instagram: "dr_samad_karimov",
      linkedin: "samad-karimov-md"
    },
    patients: 2450,
    education: "Toshkent Tibbiyot Akademiyasi, Kardiologiya fakulteti",
    languages: ["O'zbek", "Rus", "Ingliz"],
    reviews: [
      { 
        name: "Olimjon Sobirov", 
        rating: 5, 
        text: "Doktor Samad mening hayotimni saqlab qoldi. Yurak kasalligimni davoladi, hozir sog'lig'im yaxshi. Har bir tafsilotga e'tibor beradi.",
        date: "2024-03-18"
      },
      { 
        name: "Maftuna Abdullayeva", 
        rating: 5, 
        text: "Juda tajribali va sabrli shifokor. Har bir bemorga individual yondashadi. Maslahatlari juda foydali.",
        date: "2024-03-12"
      },
      { 
        name: "Bahrom Ismoilov", 
        rating: 4, 
        text: "Yaxshi mutaxassis, lekin qabulga kutish vaqti uzoq. Davolash natijalari juda yaxshi.",
        date: "2024-03-05"
      }
    ],
    clinic: {
      name: "Heart Center",
      id: 5
    }
  },
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
  {
    id: 4,
    type: "medicine",
    name: "Paracetamol 500mg",
    image: "💊",
    price: "12,000",
    rating: 4.6,
    stock: true,
  },
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
    description: "Heart Center - O'zbekistondagi eng yirik kardiologiya markazi. Biz yuqori qon bosimi, yurak etishmovchiligi, aritmiya va boshqa yurak-qon tomir kasalliklarini davolash bo'yicha ixtisoslashganmiz. Klinikamizda eng yangi diagnostika va davolash uskunalari mavjud.",
    services: ["Kardiologik tekshiruv", "EKG", "Ekokardiyografiya", "Stress-test", "Kardioreabilitatsiya", "Yurak jarrohligi", "Angiografiya", "Holter monitoring"],
    callCenter: ["1080", "1121", "+998 71 234 56 78"],
    doctors: [
      { 
        id: 2, 
        name: "Dr. Samad Karimov", 
        specialization: "Kardiolog",
        rating: 4.9,
        experience: "15 yil",
        avatar: "👨‍⚕️",
        price: "200,000",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7"
      },
      { 
        id: 201, 
        name: "Dr. Nodira Yusupova", 
        specialization: "Kardiologiya jarrohi",
        rating: 4.8,
        experience: "18 yil",
        avatar: "👩‍⚕️",
        price: "300,000",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
      }
    ],
    reviews: [
      { 
        name: "Ravshan Alimov", 
        rating: 5, 
        text: "Ota-onamning yurak muammolarini muvaffaqiyatli davoladilar. Rahmat! Mutaxassislar juda malakali.",
        date: "2024-03-20"
      },
      { 
        name: "Gulnora Karimova", 
        rating: 5, 
        text: "Zamonaviy uskunalar va yuqori malakali shifokorlar. Har qanday maslahat uchun murojaat qilaman.",
        date: "2024-03-15"
      }
    ]
  },
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
    bio: "Maryam Azimova - bolalar shifokori, 10 yillik tajribaga ega. Bolalarning rivojlanishi, immunitet tizimi va turli bolalar kasalliklarini davolash bo'yicha mutaxassis.",
    schedule: "Dushanba - Shanba / 08:00 – 16:00",
    phone: "+998 90 987 65 43",
    certificates: [
      "Pediatriya ixtisosligi (2015)",
      "Bolalar immunologi (2018)",
      "Neonatologiya kursi (2020)"
    ],
    socials: {
      telegram: "@drmaryamazimova",
      instagram: "dr_maryam_azimova"
    },
    patients: 3200,
    reviews: [
      { 
        name: "Sevinch Qodirova", 
        rating: 5, 
        text: "Farzandimni davolatdik, juda yaxshi munosabat. Bolalar bilan ishlashda ajoyib mahorat.",
        date: "2024-03-22"
      }
    ]
  }
];