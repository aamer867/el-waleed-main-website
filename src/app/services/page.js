"use client";
import FooterEn from "../../../components/footer/en/Footer";
import FooterAr from "../../../components/footer/ar/Footer";
import NavbarEn from "../../../components/navbar/en/Navbar";
import NavbarAr from "../../../components/navbar/ar/Navbar";
import Card from "../../../components/servicesPage/Card";
import MainCardEn from "../../../components/servicesPage/en/MainCard";
import MainCardAr from "../../../components/servicesPage/ar/MainCard";
import { useState, useEffect } from "react";

export default function Services() {
  const [language, setLanguage] = useState("ar");
  const [servicesData, setServicesData] = useState([]);

  const fetchServices = async (lang) => {
    try {
      const endpoint = lang === "ar"
        ? "/api/services_page_body_ar"
        : "/api/services_page_body_en";
      const response = await fetch(endpoint);
      const data = await response.json();
      const mapped = data.cards.map((card) => ({
        ...card,
        description: Array.isArray(card.description)
          ? card.description
          : [card.description],
      }));
      setServicesData(mapped);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    const storedLanguage =
      typeof window !== "undefined"
        ? localStorage.getItem("languageLocalStorage") || "ar"
        : "ar";
    setLanguage(storedLanguage);
    fetchServices(storedLanguage);
  }, []);

  useEffect(() => {
    fetchServices(language);
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
            pageLabel={"Services"}
            language={language}
            onLanguageToggle={handleLanguageToggle}
          />
          <MainCardAr />
          {servicesData.map((card, index) => (
            <Card
              key={index}
              header={card.title}
              description={card.description}
              imageUrl={card.image_url}
              textDir={"md:text-right"}
            />
          ))}
          <FooterAr />
        </div>
      ) : (
        <div dir="ltr">
          <NavbarEn
            pageLabel={"Services"}
            language={language}
            onLanguageToggle={handleLanguageToggle}
          />
          <MainCardEn />
          {servicesData.map((card, index) => (
            <Card
              key={index}
              header={card.title}
              description={card.description}
              imageUrl={card.image_url}
              textDir={"md:text-left"}
            />
          ))}
          <FooterEn />
        </div>
      )}
    </>
  );
}