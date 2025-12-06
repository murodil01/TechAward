const problems = [
  {
    problem: "Oila a’zolarining real-time holatini bilish qiyin",
    solution: "Dashboard + Keyinchalik smart soatlar va health sensorlar bilan integratsiya",
  },
  {
    problem: "Dorilar mosligini aniqlash qiyin",
    solution: "OpenFDA, DrugBank, MedlinePlus, Local pharmacy datalari orqali AI analiz",
  },
];

const Problems = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1220px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Muammolar va Yechimlar</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-red-50 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-2 text-red-600">{item.problem}</h3>
              <p className="text-gray-700">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
