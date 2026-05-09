"use client";
import Card from "../Card";
import React, { useState, useEffect } from "react";

export default function OurClients() {
  const [cardsData, setCardsData] = useState([]);
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/our-clients-sub-section_en");
        const data = await response.json();
        setCardsData(data.cards ?? data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    const fetchSection = async () => {
      try {
        const response = await fetch("/api/our-clients-section_ar");
        const data = await response.json();
        setSectionData(data);
      } catch (error) {
        console.error("Error fetching clients section:", error);
      }
    };

    fetchCards();
    fetchSection();
  }, []);

  return (
    <div className="bg-gray-50 pt-20 pb-20" id="ourClients">
      <h1 className="text-main-blue-color md:text-4xl text-xl w-3/4 md:w-1/2 mx-auto text-center mb-10 font-bold">
        {sectionData?.header ?? ""}
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