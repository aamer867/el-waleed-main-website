"use client";
import Image from "next/image";
import RotatingHeader from "./RotatingHeader";
import BankLogos from "../BankLogos";
import CardCarousel from "../CardCarousel";
import Link from 'next/link';

import { useState, useEffect } from "react";
import { Titan_One } from "next/font/google";

export default function LandingPage() {
    const [logosData, setLogosData] = useState([]);
    const [tileDescriptionData, setTileDescriptionData] = useState([]);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        console.log("Fetching all data");

        fetch("/api/bank-logos")
            .then(res => res.json())
            .then(data => {
                setLogosData(data);
            });

        fetch("/api/landing-page")
            .then(res => res.json())
            .then(data => {
                setTileDescriptionData(data);
            });

        fetch("/api/card-data")
            .then(res => res.json())
            .then(data => {
                setCardData(data);
            });

    }, []);  
        
    return(
        <>
        <div className="bg-gradient-to-b from-rose-100 via-white to-white z-10 relative pt-12 pb-14">
            <div className="container mx-auto items-center px-8">
                <div className="grid lg:grid-cols-12 grid-cols-1 pt-12 pb-18 justify-center items-center">
                    <div className="col-start-1 col-end-8">
                        <RotatingHeader />
                        {/* <h1 className="text-6xl text-main-blue-color">We Can Serve You in <span className="text-main-red-color font-bold">Taxes</span></h1> */}
                        <p className="text-center lg:text-2xl py-3 text-main-blue-color">{tileDescriptionData?.description}</p>
                        <div class="flex justify-center">
                            <Link href="/services" class="bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6   ">
                                Our Services
                            </Link>
                        </div>
                    </div>
                    <CardCarousel cardsData={cardData}/>
                </div>
                <BankLogos images={logosData} />
                <p className="text-center text-sm lg:text-lg">Interested in working with El-Waleed? <a className="text-main-red-color" href="#contactus">Contact Us</a></p>
            </div>
        </div>
        </>
    );
}