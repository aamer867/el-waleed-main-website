"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    { url: '/images/aboutPage/about_1.jpg' },
    { url: '/images/aboutPage/about-2.jpg' },
    { url: '/images/aboutPage/about-3.jpg' },
    { url: '/images/aboutPage/about_values_4.jpg' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"> {/* Responsive height */}
                <Image
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    priority={true} // Ensures the images load quickly
                />
                {/* Text Box Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-black bg-opacity-60 text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg text-center max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">About El-Waleed</h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                            A professional team of financial advisors, chartered accountants, and tax experts
                            ensures that your business reaches the highest levels of success.
                        </p>
                    </div>
                </div>
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 sm:p-3 lg:p-4 bg-gray-800 text-white rounded-full"
                >
                    &#9664;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 sm:p-3 lg:p-4 bg-gray-800 text-white rounded-full"
                >
                    &#9654;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
