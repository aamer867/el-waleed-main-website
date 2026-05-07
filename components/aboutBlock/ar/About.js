"use client";
import Card from "../Card";
import React, { useState, useEffect } from "react";

const cardColors = [
  { colorGradientStart: "#314AAC", colorGradientEnd: "#141E46" },
  { colorGradientStart: "#C70039", colorGradientEnd: "#952042" },
  { colorGradientStart: "#FF6969", colorGradientEnd: "#E10E0E" },
  { colorGradientStart: "#BAD7E9", colorGradientEnd: "#697983" },
];

export default function About() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/about-sub-section_ar");
        const data = await response.json();
        setCardsData(data.cards);
      } catch (error) {
        console.error("Error fetching about cards:", error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div dir="rtl" className="pt-12 pb-16 container mx-auto space-y-10">
      {cardsData.length > 0 ? (
        cardsData.map((card, index) => (
          <Card
            key={index}
            title={`.${" .".repeat(index)} ${card.title}`}
            header={card.header}
            description={card.description}
            imageUrl={card.image_url}
            imageAlt={card.title}
            colorGradientStart={cardColors[index]?.colorGradientStart}
            colorGradientEnd={cardColors[index]?.colorGradientEnd}
            buttonName={"اعرف المزيد"}
            textDir={"sm:text-right"}
          />
        ))
      ) : (
        <p className="text-center">جاري التحميل...</p>
      )}
    </div>
  );
}