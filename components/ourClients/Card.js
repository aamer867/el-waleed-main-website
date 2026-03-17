import React from "react";
import Image from "next/image";

export default function Card({ imageUrl, imageAlt, title, description, companyName }) {
    return (
        <div className="bg-white border border-gradient-to-r from-gray-300 via-gray-200 to-gray-100 shadow-lg p-4 rounded-lg flex flex-col items-center w-[400px] pb-10">
            <Image 
                src={imageUrl}
                alt={imageAlt}
                width={150}
                height={150}
                className="mb-10 rounded-lg shadow-lg"
            />
            <h4 className="text-main-red-color text-xl font-bold mb-2 text-center">{title}</h4>
            <p className="text-gray-600 text-sm font-medium mb-2 text-center">{description}</p>
            <p className="text-main-blue-color text-sm font-bold text-center">{companyName}</p>
        </div>
    );
}
