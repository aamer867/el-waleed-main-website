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

  return (
    <div
      className="relative w-full min-h-[450px] bg-cover bg-center overflow-hidden flex items-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="relative z-10 w-full">
        <div className="w-full bg-gradient-to-r from-blue-900/20 via-slate-900/20 to-red-900/20">
          <div className="w-full flex px-6 lg:px-20 py-8 items-center gap-8">
            {/* TITLE - 30% width */}
            <div className="flex items-center justify-end" style={{ width: "30%" }}>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-right leading-tight"
                style={{ color: "#8B0000" }}
              >
                {header}
              </h1>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="w-px self-stretch bg-white/30 shrink-0" />

            {/* LIST - remaining width */}
            <ul
              className="flex-1 space-y-4 text-base sm:text-lg lg:text-xl font-medium"
              style={{ color: "#1e2a78" }}
            >
              {allItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-lg sm:text-xl mt-1" style={{ color: "#1e2a78" }}>•</span>
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