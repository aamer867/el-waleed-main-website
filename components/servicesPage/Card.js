export default function Card({
    header,
    description,
    imageUrl
}) {
    const group1 = (description?.[0] || "")
        .split("++")
        .map((i) => i.trim())
        .filter(Boolean);

    const group2 = (description?.[1] || "")
        .split("++")
        .map((i) => i.trim())
        .filter(Boolean);

    return (
        <div
            className="
                relative
                w-full
                h-[450px]
                bg-cover
                bg-center
                overflow-hidden
                flex
                items-center
            "
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >

            {/* CONTENT BOX */}
            <div className="relative z-10 w-full flex justify-center">

                <div className="
                    w-full
                    h-[80%]
                    flex
                    items-center
                    bg-gradient-to-r
                    from-blue-900/80
                    via-slate-900/70
                    to-red-900/80
                ">

                    <div className="
                        w-full
                        grid
                        grid-cols-1
                        lg:grid-cols-3
                        items-start
                        gap-8
                        px-6
                        lg:px-20
                        py-6
                    ">

                        {/* TITLE */}
                        <h1 className="
                            text-3xl
                            sm:text-4xl
                            lg:text-6xl
                            font-bold
                            text-white
                            text-center
                            lg:text-right
                        ">
                            {header}
                        </h1>

                        {/* GROUP 1 */}
                        <ul className="
                            space-y-2
                            sm:space-y-3
                            text-base
                            sm:text-lg
                            lg:text-2xl
                            font-medium
                            text-white
                            text-center
                            lg:text-right
                        ">
                            {group1.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 justify-center lg:justify-end">
                                    <span className="text-blue-400 text-lg sm:text-xl leading-none">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* GROUP 2 */}
                        <ul className="
                            space-y-2
                            sm:space-y-3
                            text-base
                            sm:text-lg
                            lg:text-2xl
                            font-medium
                            text-white
                            text-center
                            lg:text-right
                        ">
                            {group2.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 justify-center lg:justify-end">
                                    <span className="text-red-400 text-lg sm:text-xl leading-none">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
}