import Image from 'next/image';

export default function Card({ direction, imageUrl, imageAlt, header, description, textDir }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div
                className={`${
                    direction === 1 ? "lg:order-2 order-1" : "lg:order-1 order-2"
                } text-center px-6 lg:px-12 w-full my-10 ${textDir}`}
            >
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight text-red-600">
                    {header}
                </h1>

                <p className="text-lg lg:text-xl text-blue-600 leading-relaxed lg:leading-loose">
                    {description}
                </p>
            </div>
            <div
                className={`${
                    direction === 1 ? "lg:order-1 order-1" : "lg:order-2 order-2"
                } w-full`}
            >
                <div className="w-full h-[500px] object-contain"> {/* Ensure the image takes up 50% of the width */}
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={1500}
                        height={500}
                        className="object-cover h-full w-full"
                    />
                </div>
            </div>
        </div>
    );
}
