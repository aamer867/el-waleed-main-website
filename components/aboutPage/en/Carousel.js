"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [carouselText, setCarouselText] = useState("");
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        setLoading(true);

        // Fetch images
        const imagesResponse = await fetch("/api/about_page_images_en");

        if (!imagesResponse.ok) {
          throw new Error("Failed to fetch images");
        }

        const imagesData = await imagesResponse.json();

        // Prevent undefined errors
        const formattedImages = Array.isArray(imagesData.images)
          ? imagesData.images.map((url) => ({ url }))
          : [];

        setImages(formattedImages);

        // Fetch text
        const textResponse = await fetch("/api/about_page_header_en");

        if (!textResponse.ok) {
          throw new Error("Failed to fetch text");
        }

        const textData = await textResponse.json();

        setCarouselText(textData.text || "");
      } catch (error) {
        console.error("Carousel Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarouselData();
  }, []);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    if (!images.length) return;

    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!images.length) return;

    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Loading State
  if (loading) {
    return (
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  // No Images State
  if (!images.length) {
    return (
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">
          No carousel images available
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        
        {/* Image */}
        {!imageError ? (
          <Image
            src={images[currentIndex]?.url}
            alt={`carousel-${currentIndex}`}
            fill
            className="object-cover object-top"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
            <p className="text-gray-700">Image failed to load</p>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-black/60 text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg text-center max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              About El-Waleed
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7">
              {carouselText || "No description available"}
            </p>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 sm:p-3 lg:p-4 bg-gray-800/80 hover:bg-gray-900 text-white rounded-full transition duration-300"
        >
          &#9664;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 sm:p-3 lg:p-4 bg-gray-800/80 hover:bg-gray-900 text-white rounded-full transition duration-300"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;