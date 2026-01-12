import React from "react";

const ProtectiveSection: React.FC = () => {
  const protectiveItems = [
    {
      icon: "layers",
      title: "Zinc Rich 1k & 2k",
      desc: "High performance corrosion protection",
    },
    {
      icon: "science",
      title: "Epoxy & PU Protective",
      desc: "Durable finish for heavy industry",
    },
    {
      icon: "local_fire_department",
      title: "Intumescent Paint",
      desc: "Fire retardant safety coating",
    },
    {
      icon: "oil_barrel",
      title: "Coal Coating",
      desc: "Heavy duty waterproofing",
    },
  ];

  const chemicals = [
    { code: "CYC", name: "Cyclohexanone" },
    { code: "MC", name: "Methylene Chloride" },
    { code: "MEK", name: "Methyl Ethyl Ketone" },
    { code: "IPA", name: "Isopropyl Alcohol" },
    { code: "DAA", name: "Diacetone Alcohol" },
    { code: "TOL", name: "Toluena" },
  ];

  return (
    <section
      id="protective"
      className="w-full max-w-[1200px] flex flex-col gap-8 scroll-mt-32"
    >
      <div className="flex items-center gap-4">
        <span className="text-6xl font-black text-gray-200 select-none -mb-3">
          II.
        </span>
        <h2 className="text-navy text-2xl lg:text-3xl font-bold leading-tight pt-3">
          Protective & Chemicals
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Protective Card */}
        <div className="bg-navy rounded-2xl p-8 flex flex-col gap-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="material-symbols-outlined text-primary text-3xl">
              shield
            </span>
            <h3 className="text-xl font-bold">Protective Coatings</h3>
          </div>
          <div className="grid gap-4">
            {protectiveItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-3 rounded-lg bg-navy-light/50 hover:bg-navy-light transition-colors group"
              >
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chemicals Table */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col gap-6 shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="material-symbols-outlined text-navy text-3xl">
              science
            </span>
            <h3 className="text-xl font-bold text-navy">
              Industrial Solvents & Chemicals
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="px-4 py-3 rounded-l-md">Code</th>
                  <th className="px-4 py-3 rounded-r-md">Chemical Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {chemicals.map((chem) => (
                  <tr
                    key={chem.code}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-mono text-primary font-bold">
                      {chem.code}
                    </td>
                    <td className="px-4 py-3 text-navy font-medium">
                      {chem.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-auto">
            *Other solvents available upon request: Thinner, Methanol, etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProtectiveSection;
