"use client";
import NavbarEn from "../../components/navbar/en/Navbar";
import NavbarAr from "../../components/navbar/ar/Navbar";
import LandingPageEn from "../../components/landingPage/en/LandingPage";
import LandingPageAr from "../../components/landingPage/ar/LandingPage";
import AboutAr from "../../components/aboutBlock/ar/About";
import AboutEn from "../../components/aboutBlock/en/About";
import ServicesEn from "../../components/services/en/Services";
import ServicesAr from "../../components/services/ar/Services";
import OurClientsEn from "../../components/ourClients/en/OurClients";
import OurClientsAr from "../../components/ourClients/ar/OurClients";
import ContactUsEn from "../../components/contactUs/en/ContactUs";
import ContactUsAr from "../../components/contactUs/ar/ContactUs";
import FooterEn from "../../components/footer/en/Footer";
import FooterAr from "../../components/footer/ar/Footer";
import { useEffect, useState } from "react";

export default function Page() {
    const cardData = [
        {
            title: "AI Amal Agricultural Investment",
            description: "Very easy to understand. El-Waleed has revolutionized my business with their excellent funding and tax services. Highly professional, reliable, and always supportive!",
            imageUrl: "/images/logo/editted/el-Aml-logo.jpg",
            imageAlt: "AI Amal Agricultural Investment logo"
        },
        {
            title: "Al Fagr For Imports & Exports",
            description: "Very responsive and professional. El-Waleed has been a great help in managing my company's taxes. They are very responsive and professional. I highly recommend them!",
            imageUrl: "/images/logo/editted/el-fagr-logo.jpg",
            imageAlt: "Al Fagr For Imports & Exports logo"
        },
        {
            title: "Tiba For Import & Export",
            description: "Exceptional customer service and support. El-Waleed has enhanced my business with their exceptional funding and tax services. Highly professional, always reliable, and supportive",
            imageUrl: "/images/logo/editted/tiba-logo.jpg",
            imageAlt: "Tiba For Import & Export logo"
        },
        {
            title: "Egyptian Company For Food",
            description: "Transparent and trustworthy service. El-Waleed has been a great help in managing my company's taxes. They are very responsive and professional. I highly recommend them!",
            imageUrl: "/images/logo/editted/egyptian-company-for-food-logo.png",
            imageAlt: "Egyptian Company For Food logo"
        },
        {
            title: "Typical Farm, Strawberry Farm",
            description: "Efficient and reliable financial solutions. El-Waleed has revolutionized my business with their excellent funding and tax services. Highly professional, reliable, and always supportive!",
            imageUrl: "/images/logo/editted/typical-farm-logo.jpg",
            imageAlt: "Typical Farm, Strawberry Farm logo"
        },
        {
            title: "Celeste",
            description: "Timely updates and clear communication. My business has excelled with El-Waleed's excellent funding and tax services. They are always professional, reliable, and supportive",
            imageUrl: "/images/logo/editted/CELESTE.png",
            imageAlt: "Celeste logo"
        },
        {
            title: "Al Qahira",
            description: "Highly knowledgeable and always helpful. El-Waleed has been a great help in managing my company's taxes. I highly recommend them!",
            imageUrl: "/images/logo/editted/al-qahira.png",
            imageAlt: "Al Qahira logo"
        },
        {
            title: "Free Nile",
            description: "Exceptional customer service and support. El-Waleed has enhanced my business with their exceptional funding and tax services. Highly professional, always reliable, and supportive",
            imageUrl: "/images/logo/editted/freenile.png",
            imageAlt: "Free Nile logo"
        }
    ];
    
    const [language, setLanguage] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem('languageLocalStorage') || 'ar';
        }
        return 'ar';
    });

    const handleLanguageToggle = () => {
        setLanguage(prevLanguage => prevLanguage === 'ar' ? 'en' : 'ar');
        if (typeof window !== "undefined") {
            localStorage.setItem('languageLocalStorage', language);
        }
    };

    return (
        <>
            {language === "en" ?
                <div dir="ltr">
                    <NavbarEn imageUrl="/images/logo/logo.jpg" pageLabel="Home" language={language} onLanguageToggle={handleLanguageToggle} />
                    <LandingPageEn />
                    <AboutEn />
                    <ServicesEn />
                    <OurClientsEn />
                    <ContactUsEn />
                    <FooterEn />
                </div>
                :
                <div dir="rtl" className="font-cairo">
                    <NavbarAr imageUrl="/images/logo/logo.jpg" pageLabel="Home" language={language} onLanguageToggle={handleLanguageToggle} />
                    <LandingPageAr />
                    <AboutAr />
                    <ServicesAr />
                    <OurClientsAr />
                    <ContactUsAr />
                    <FooterAr />
                </div>
            }
        </>
    );
}
