export default function Card({ header, description, imageUrl }) {
  const allItems = Array.isArray(description)
    ? description.flatMap((d) =>
        typeof d === "string"
          ? d.split("++").map((i) => i.trim()).filter(Boolean)
          : []
      )
    : (description || "")
        .split("++")
        .map((i) => i.trim())
        .filter(Boolean);

  const mid = Math.ceil(allItems.length / 2);
  const group1 = allItems.slice(0, mid);
  const group2 = allItems.slice(mid);

  return (
    <div
      className="relative w-full min-h-[450px] bg-cover bg-center overflow-hidden flex items-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="relative z-10 w-full">
        <div className="w-full bg-gradient-to-r from-blue-900/80 via-slate-900/70 to-red-900/80">
          <div className="w-full grid grid-cols-12 px-6 lg:px-20 py-8 items-center">

            {/* TITLE - always 3 cols */}
            <div className="col-span-12 lg:col-span-3 flex items-center justify-center lg:justify-end pr-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-right leading-tight">
                {header}
              </h1>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
              <div className="w-px h-48 bg-white/30" />
            </div>

            {/* GROUP 1 - always 4 cols */}
            <ul className="col-span-12 lg:col-span-4 space-y-4 text-base sm:text-lg lg:text-xl font-medium text-white text-center lg:text-right px-4">
              {group1.map((item, index) => (
                <li key={index} className="flex items-start gap-3 justify-center lg:justify-end">
                  <span className="text-blue-400 text-lg sm:text-xl mt-1">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* GROUP 2 - always 4 cols */}
            <ul className="col-span-12 lg:col-span-4 space-y-4 text-base sm:text-lg lg:text-xl font-medium text-white text-center lg:text-right px-4">
              {group2.map((item, index) => (
                <li key={index} className="flex items-start gap-3 justify-center lg:justify-end">
                  <span className="text-red-400 text-lg sm:text-xl mt-1">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}