"use client";
import Image from "next/image";
import React from "react";
import {useRef, useEffect, useState, useCallback} from 'react';
import Link from 'next/link';

export default function Card({title, header, description, imageUrl, imageAlt, colorGradientStart, colorGradientEnd, zIndex, topValue, setHeight, buttonName, textDir}) {

    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            setHeight(cardRef.current.offsetHeight);
        }
    }, [cardRef.current]);

    return(
        <>
        <div className={`container absolute left-1/2 transform -translate-x-1/2 mx-auto pl-4 pr-4 sm:pl-8 sm:pr-0 mb-10`} ref={cardRef} style={{top: topValue}}>
            <div 
            style={{background: `linear-gradient(to bottom, ${colorGradientStart}, ${colorGradientEnd})`,}} 
            className={`w-full text-white rounded-[20px] sm:px-[80px] sm:py-[40px] px-[40px] py-[40px] text-center ${textDir}`}>
                <h2 className="font-semibold mb-3 text-lg sm:text-2xl">{title}</h2>
                <div className="py-3 grid md:grid-cols-2 justify-center">
                    <div className="mb-4 pr-4">
                        <h4 className="text-2xl sm:text-4xl font-semibold mb-6">{header}</h4>
                        <p className="text-sm sm:text-lg font-normal">{description}</p>
                    </div>
                    <div className="flex flex-col items-center pl-4 justify-center mt-6 lg:mt-0">
                        <Image 
                        src={imageUrl}
                        alt={imageAlt}
                        width={350}
                        height={200}
                        className="shadow-lg rounded-3xl object-cover h-[150px] sm:h-[200px] w-[200px] sm:w-[350px]"
                        />
                        <Link href="/about" className="mt-6 px-6 py-2 bg-white text-main-blue-color font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                            {buttonName}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}