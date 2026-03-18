"use client";
import Card from "../Card";
import React, { useState, useEffect } from "react";

export default function OurClients() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetch("/api/our-clients-section")
            .then(res => res.json())
            .then(data => {
                setCardsData(data);
                console.log(data);
            });
    }, []);

    return (
        <div className="bg-gray-50 pt-20 pb-20" id="ourClients">
            <h1 className="text-main-blue-color md:text-4xl text-xl w-3/4 md:w-1/2 mx-auto text-center mb-10 font-bold">
                Don't just take our word for it, see what our Clients are saying
            </h1>
            <div className="relative overflow-x-hidden">
                <div className="flex animate-slide">
                    {cardsData.length > 0 ? (
                        cardsData.concat(cardsData).map((card, index) => (
                            <div key={index} className="px-2">
                                <Card
                                    imageUrl={card.image_url}
                                    imageAlt={card.header}
                                    title={card.header}
                                    description={card.description}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full">Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}