"use client";
import CarouselEn from "../../../components/aboutPage/en/Carousel";
import CarouselAr from "../../../components/aboutPage/ar/Carousel";
import FooterEn from "../../../components/footer/en/Footer";
import FooterAr from "../../../components/footer/ar/Footer";
import NavbarEn from "../../../components/navbar/en/Navbar";
import NavbarAr from "../../../components/navbar/ar/Navbar";
import OurClientsEn from "../../../components/ourClients/en/OurClients";
import OurClientsAr from "../../../components/ourClients/ar/OurClients";
import Card from "../../../components/aboutPage/Card";
import { useState, useEffect } from "react";

export default function About() {
  const [aboutCards, setAboutCards] = useState([]);
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    const storedLanguage =
      typeof window !== "undefined"
        ? localStorage.getItem("languageLocalStorage") || "ar"
        : "ar";

    setLanguage(storedLanguage);

    const fetchAboutCards = async () => {
      try {
        const endpoint = storedLanguage === "ar"
          ? "/api/about_page_vision_parts_ar"
          : "/api/about_page_vision_parts_en";
        const response = await fetch(endpoint);
        const data = await response.json();
        setAboutCards(data.cards);
      } catch (error) {
        console.error("Error fetching about cards:", error);
      }
    };

    fetchAboutCards();
  }, []);

  useEffect(() => {
    const fetchAboutCards = async () => {
      try {
        const endpoint = language === "ar"
          ? "/api/about_page_vision_parts_ar"
          : "/api/about_page_vision_parts_en";
        const response = await fetch(endpoint);
        const data = await response.json();
        setAboutCards(data.cards);
      } catch (error) {
        console.error("Error fetching about cards:", error);
      }
    };
    fetchAboutCards();
  }, [language]);

  const handleLanguageToggle = () => {
    const newLanguage = language === "ar" ? "en" : "ar";
    setLanguage(newLanguage);
    if (typeof window !== "undefined") {
      localStorage.setItem("languageLocalStorage", newLanguage);
    }
  };

  const isAr = language === "ar";

  return (
    <>
      {isAr ? (
        <div dir="rtl" className="font-cairo">
          <NavbarAr
            pageLabel={"About"}
            language={language}
            onLanguageToggle={handleLanguageToggle}
          />
          <CarouselAr />
          {aboutCards.map((card, index) => (
            <Card
              key={index}
              header={card.header}
              description={card.description}
              imageUrl={card.image_url}
              direction={index % 2 === 0 ? 1 : 0}
              textDir={"lg:text-right"}
            />
          ))}
          <OurClientsAr />
          <FooterAr />
        </div>
      ) : (
        <div dir="ltr">
          <NavbarEn
            pageLabel={"About"}
            language={language}
            onLanguageToggle={handleLanguageToggle}
          />
          <CarouselEn />
          {aboutCards.map((card, index) => (
            <Card
              key={index}
              header={card.header}
              description={card.description}
              imageUrl={card.image_url}
              direction={index % 2 === 0 ? 1 : 0}
              textDir={"lg:text-left"}
            />
          ))}
          <OurClientsEn />
          <FooterEn />
        </div>
      )}
    </>
  );
}