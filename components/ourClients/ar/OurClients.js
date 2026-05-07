"use client";
import React, { useState, useEffect } from "react";
import Card from "../Card";

const OurClients = () => {
  const [cards, setCards] = useState([]);
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/our-clients-sub-section_ar");
        const data = await response.json();
        setCards(data.cards);
      } catch (error) {
        console.error("Error fetching clients cards:", error);
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
        {sectionData?.header_ar ?? ""}
      </h1>
      <p className="text-main-blue-color lg:w-1/2 w-full px-10 mx-auto text-sm text-center mb-10">
        {sectionData?.description_ar ?? ""}
      </p>
      <div className="relative overflow-x-hidden">
        <div className="flex animate-slide-rtl">
          {cards.length > 0 ? (
            cards.concat(cards).map((card, index) => (
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
            <p className="text-center w-full">جاري التحميل...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurClients;