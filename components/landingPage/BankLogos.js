import React, { useEffect, useState } from "react";
import Image from "next/image";

const BankLogos = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    const visibleImages = [
        ...images.slice(currentIndex, currentIndex + 4),
        ...images.slice(0, Math.max(0, currentIndex + 4 - images.length))
    ];

    return (
        <div className="relative overflow-hidden">
            <div className="flex justify-center space-x-4 transition-transform duration-700 ease-out">
                {visibleImages.map((image, index) => (
                    <a
                        key={index}
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex justify-center items-center"
                        style={{ height: "150px", width: "150px" }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={100}
                            height={100}
                            className="object-contain h-full grayscale hover:grayscale-0"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BankLogos;