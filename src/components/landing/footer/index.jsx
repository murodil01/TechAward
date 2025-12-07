import logo from "../../../assets/images/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-[1220px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img
            src={logo}
            alt="Clinic Go logo"
            decoding="async"
            fetchPriority="high"
            width="128"
            height="128"
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain"
          />

          <p className="text-gray-700">
            O‘zbekiston uchun innovatsion tez yordam platformasi.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-red-600 mb-4">Xizmatlar</h4>
          <ul className="space-y-2 text-gray-700">
            <li>Lokatsiya asosida chaqiriq</li>
            <li>AI prioritizatsiya</li>
            <li>CRM boshqaruv</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-red-600 mb-4">Bog‘lanish</h4>
          <ul className="space-y-2 text-gray-700">
            <li>Email: help@tezai.uz</li>
            <li>Call Center: 103</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-red-600 mb-4">
            Ijtimoiy tarmoqlar
          </h4>
          <div className="flex gap-4">
            <span>Telegram</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AI Tez Yordam — Barcha huquqlar
        himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
