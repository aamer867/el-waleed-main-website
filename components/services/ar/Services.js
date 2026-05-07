"use client";
import React, { useState, useEffect } from "react";
import Card from "../Card";

export default function Services() {
  const [cardsData, setCardsData] = useState([]);
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/services-sub-section_ar");
        const data = await response.json();
        setCardsData(data.cards);
      } catch (error) {
        console.error("Error fetching services cards:", error);
      }
    };

    const fetchSection = async () => {
      try {
        const response = await fetch("/api/services-section_ar");
        const data = await response.json();
        setSectionData(data);
      } catch (error) {
        console.error("Error fetching services section:", error);
      }
    };

    fetchCards();
    fetchSection();
  }, []);

  return (
    <div dir="rtl" className="container mx-auto mt-20 mb-20">
      <div className="mb-12 text-center">
        <h1 className="text-main-red-color text-2xl md:text-4xl mb-6 font-bold">
          {sectionData?.header_ar ?? ""}
        </h1>
        <p className="text-main-blue-color lg:w-1/2 w-full px-10 mx-auto text-sm">
          {sectionData?.description_ar ?? ""}
        </p>
      </div>
      <div className="grid grid-cols-12 gap-y-8">
        {cardsData.length > 0 ? (
          cardsData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.image_url}
              title={card.header}
              description={card.description}
            />
          ))
        ) : (
          <p className="col-span-12 text-center">جاري التحميل...</p>
        )}
      </div>
    </div>
  );
}