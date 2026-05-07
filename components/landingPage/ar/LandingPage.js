"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import RotatingHeader from "./RotatingHeader";
import BankLogos from "../BankLogos";
import CardCarousel from "../CardCarousel";
import Link from "next/link";

export default function LandingPage() {
  const [logosData, setLogosData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [sectionData, setSectionData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const fetchSection = async () => {
      try {
        const response = await fetch("/api/landing-page-content");
        const data = await response.json();
        setSectionData(data.section);
      } catch (error) {
        console.error("Error fetching section data:", error);
      }
    };

    const fetchLogos = async () => {
      try {
        const response = await fetch("/api/bank-logos_ar");
        const data = await response.json();
        const mapped = data.cards.map((card) => ({
          src: card.image_url,
          alt: card.name,
          url: card.link,
        }));
        setLogosData(mapped);
      } catch (error) {
        console.error("Error fetching bank logos:", error);
      }
    };

    const fetchCards = async () => {
      try {
        const response = await fetch("/api/landing-page-cards-data_ar");
        const data = await response.json();
        const mapped = data.cards.map((card) => ({
          title: card.header,
          imageUrl: card.image_url,
          imageAlt: card.title,
          description: card.description,
        }));
        setCardsData(mapped);
      } catch (error) {
        console.error("Error fetching landing cards:", error);
      }
    };

    fetchSection();
    fetchLogos();
    fetchCards();
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="bg-gradient-to-b from-rose-100 via-white to-white z-10 relative pt-12 pb-14">
        <div className="container mx-auto items-center px-8">
          <div className="grid lg:grid-cols-12 grid-cols-1 pt-12 pb-18 justify-center items-center">
            <div className="col-start-1 col-end-8">
              <RotatingHeader />
              <p className="text-center lg:text-2xl py-3 text-main-blue-color">
                {sectionData?.description_ar ?? ""}
              </p>
              <div className="flex justify-center">
                <Link
                  href="/services"
                  className="bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6"
                >
                  خدماتنا
                </Link>
              </div>
            </div>
            <CardCarousel cardsData={cardsData} />
          </div>
          <BankLogos images={logosData} />
          <p className="text-center text-sm lg:text-lg">
            مهتم بالعمل مع الوليد؟{" "}
            <a className="text-main-red-color" href="#contactus">
              تواصل معنا
            </a>
          </p>
        </div>
      </div>
    </>
  );
}