"use client";
import Card from "../Card";
import React, { useState, useEffect } from "react";

export default function About() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api/about-sub-section_en");
        const data = await response.json();
        setCardsData(data.cards);
      } catch (error) {
        console.error("Error fetching about cards:", error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="pt-12 pb-16 container mx-auto space-y-10">
      {cardsData.length > 0 ? (
        cardsData.map((card, index) => (
          <Card
            key={index}
            title={`.${" .".repeat(index)} ${card.title}`}
            header={card.header}
            description={card.description}
            imageUrl={card.image_url}
            imageAlt={card.title}
            colorGradientStart={
              ["#314AAC", "#C70039", "#FF6969", "#BAD7E9"][index]
            }
            colorGradientEnd={
              ["#141E46", "#952042", "#E10E0E", "#697983"][index]
            }
            buttonName={"Know More"}
            textDir={"sm:text-left"}
          />
        ))
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}