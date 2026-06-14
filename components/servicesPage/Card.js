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
        <div className="w-full bg-gradient-to-r from-blue-500/10 via-slate-500/10 to-red-500/10 bg-white/75">
          <div className="w-full flex flex-col sm:flex-row px-4 sm:px-6 lg:px-20 py-6 sm:py-8 items-center gap-4 sm:gap-8">

            {/* TITLE */}
            <div
              className="flex items-center w-full sm:w-[30%] justify-center sm:justify-end"
            >
              <h1
                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-right leading-tight"
                style={{ color: "#8B0000" }}
              >
                {header}
              </h1>
            </div>

            {/* DIVIDER — horizontal on mobile, vertical on sm+ */}
            <div className="w-full h-px sm:w-px sm:h-auto sm:self-stretch bg-white/30 shrink-0" />

            {/* LIST */}
            <ul
              className="flex-1 w-full space-y-3 sm:space-y-4 text-sm sm:text-lg lg:text-xl font-medium"
              style={{ color: "#1e2a78" }}
            >
              {allItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-base sm:text-xl mt-0.5 sm:mt-1 shrink-0"
                    style={{ color: "#1e2a78" }}
                  >
                    •
                  </span>
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