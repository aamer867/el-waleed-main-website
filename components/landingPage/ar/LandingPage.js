"use client";
import Image from "next/image";
import RotatingHeader from "./RotatingHeader";
import BankLogos from "../BankLogos";
import CardCarousel from "../CardCarousel";
import Link from 'next/link';

export default function LandingPage() {
    const logosData = [
        { src: "/images/banks-companies/QNB-logo.png", alt: "شعار بنك الأهلي القطري", url: "https://www.qnb.com/sites/qnb/qnbegypt/page/en/en-home.html" },
        { src: "/images/banks-companies/resized-photos/NBE-logo.png", alt: "شعار البنك الأهلي المصري", url: "https://www.nbe.com.eg" },
        { src: "/images/banks-companies/bmp-logo.png", alt: "شعار بنك مصر", url: "https://www.banquemisr.com" },
        { src: "/images/banks-companies/fabmisr-logo.jpg", alt: "شعار بنك أبوظبي الأول", url: "https://bankfab.com" },
        { src: "/images/banks-companies/resized-photos/abk-logo.png", alt: "شعار البنك الأهلي الكويتي", url: "https://www.abk.east" },
    ];
    const cardsData = [
        {
            title: "الضرائب",
            imageUrl: "/images/card-side-animation-1.jpg",
            imageAlt: "رجل يمسك بقلم ويكتب على ورقة",
            description: "نقدم لك مجموعة واسعة من الخدمات لتلبية احتياجاتك الضريبية المحددة"
        },
        {
            title: "المراجعات الضريبية",
            imageUrl: "/images/card-side-animation-2.jpg",
            imageAlt: "رجل يمسك بقلم ويكتب على ورقة",
            description: "نستخدم أحدث التقنيات والأدوات لإدارة شؤونك المالية"
        },
        {
            title: "التمويل",
            imageUrl: "/images/card-side-animation-3.jpg",
            imageAlt: "رجل يمسك بقلم ويكتب على ورقة",
            description: "خبراء في تقديم خدمات التمويل والاستثمار المتكاملة"
        },
        {
            title: "دراسة الجدوى",
            imageUrl: "/images/card-side-animation-4.jpg",
            imageAlt: "رجل يمسك بقلم ويكتب على ورقة",
            description: "خطط بذكاء لاتخاذ قرار استثماري موثوق"
        }
    ];
    
    return(
        <>
        <div className="bg-gradient-to-b from-rose-100 via-white to-white z-10 relative pt-12 pb-14">
            <div className="container mx-auto items-center px-8">
                <div className="grid lg:grid-cols-12 grid-cols-1 pt-12 pb-18 justify-center items-center">
                    <div className="col-start-1 col-end-8">
                        <RotatingHeader />
                        {/* <h1 className="text-6xl text-main-blue-color">يمكننا خدمتك في <span className="text-main-red-color font-bold">الضرائب</span></h1> */}
                        <p className="text-center lg:text-2xl py-3 text-main-blue-color">فريق محترف من المستشارين الماليين والمحاسبين القانونيين وخبراء الضرائب يضمن أن يصل عملك إلى أعلى مستويات النجاح</p>
                        <div class="flex justify-center">
                            <Link href="/services" class="bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6">
                                خدماتنا
                            </Link>
                        </div>
                    </div>
                    <CardCarousel cardsData={cardsData}/>
                </div>
                <BankLogos images={logosData} />
                <p className="text-center text-sm lg:text-lg">مهتم بالعمل مع الوليد؟ <a className="text-main-red-color" href="#contactus">تواصل معنا</a></p>
            </div>
        </div>
        </>
    );
}
