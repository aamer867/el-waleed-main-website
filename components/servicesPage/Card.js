export default function Card({ header, description, imageUrl, textDir }) {
    return (
        <div
            className="relative hover:h-[500px] h-52 bg-cover bg-center transition-all duration-500 ease-in-out overflow-hidden"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-white opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-main-blue-color grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 md:py-8 lg:py-12 h-full">
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold col-span-1 md:col-span-2 lg:col-span-1 self-start text-center ${textDir}`}>
                    {header}
                </h1>
                <ul className="text-base sm:text-lg md:text-xl lg:text-2xl col-span-1 md:col-span-2 list-disc pl-4 md:pl-6 lg:pl-8 space-y-2 self-center">
                    {description.map((service, index) => (
                        <li key={index} className="font-bold">
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
