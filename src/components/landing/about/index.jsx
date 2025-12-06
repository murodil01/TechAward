const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1220px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.V_XtUZtutREhTqUZUua_LAHaEx?w=1600&h=1031&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Medical AI"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Nima muammoni hal qilamiz?
          </h2>

          <p className="text-gray-700 mb-6">
            O‘zbekistonda tez yordam kech yetib kelishi — jiddiy muammo.
            Biz GPS, sun’iy intellekt va avtomatlashtirish orqali vaqtni tejaymiz.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Avtomatik lokatsiya aniqlash</li>
            <li>✔ Eng yaqin brigadani AI tanlaydi</li>
            <li>✔ Holatga qarab ustuvorlik beradi</li>
            <li>✔ CRM orqali dispecher nazorat qiladi</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default About;
