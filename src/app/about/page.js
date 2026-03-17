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
import { useState } from "react";

export default function About() {

    const cards = [
        [
            "/images/aboutPage/about_vision_1.jpg",
            "Our strong belief in our profession inspires us to build a diverse and robust organization. We strive to create a competent and creative team to achieve exceptional success with both local and international clients, making us their top choice"
        ],
        [
            "/images/aboutPage/about_mission_1.jpg",
            "We aim to offer comprehensive and advanced services in accounting, auditing, taxation, financial consulting, and law to diverse companies and the charitable sector. Our services are delivered by skilled professionals using modern systems, adhering to high standards of professionalism and ethics"
        ],
        [
            "/images/aboutPage/about_values_1.jpg",
            "Our values emphasize self-confidence and trust in others, objective decision-making, independence in work, professionalism and efficiency in task execution, integrity and transparency, confidentiality in sensitive information, and credibility in reporting and communications"
        ],
        [
            "/images/aboutPage/about_goals_1.jpg",
            "Our objectives are to deliver exceptional services to clients and entrepreneurs, foster creativity in management, offer integrated financial solutions, ensure sustainable profitability, uphold social and environmental responsibilities, support the sustainable growth of the company"
        ],
    ];

    const cardsAr = [
        [
            "/images/aboutPage/about_vision_1.jpg",
            "إيماننا القوي بمهنة عملنا يلهمنا لبناء منظمة متنوعة وقوية. نحن نسعى لإنشاء فريق كفء ومبدع لتحقيق نجاح استثنائي مع العملاء المحليين والدوليين على حد سواء، مما يجعلنا الخيار الأول لهم."
        ],
        [
            "/images/aboutPage/about_mission_1.jpg",
            "نهدف إلى تقديم خدمات شاملة ومتقدمة في المحاسبة، والتدقيق، والضرائب، والاستشارات المالية، والقانون للشركات المتنوعة والقطاع الخيري. تُقدّم خدماتنا بواسطة محترفين مهرة باستخدام أنظمة حديثة، ملتزمين بأعلى معايير الاحترافية والأخلاقيات."
        ],
        [
            "/images/aboutPage/about_values_1.jpg",
            "قيمنا تركز على الثقة بالنفس والثقة في الآخرين، واتخاذ القرارات الموضوعية، والاستقلالية في العمل، والاحترافية والكفاءة في تنفيذ المهام، والنزاهة والشفافية، والسرية في المعلومات الحساسة، والمصداقية في التقارير والاتصالات."
        ],
        [
            "/images/aboutPage/about_goals_1.jpg",
            "أهدافنا هي تقديم خدمات استثنائية للعملاء ورواد الأعمال، وتعزيز الإبداع في الإدارة، وتقديم حلول مالية متكاملة، وضمان ربحية مستدامة، والالتزام بالمسؤوليات الاجتماعية والبيئية، ودعم النمو المستدام للشركة."
        ],
    ];

    const clientsAr = [
        {
            title: "الامل للاستثمار الزراعي",
            description: "سهل الفهم للغاية. لقد أحدثت El-Waleed ثورة في أعمالي من خلال خدماتها الممتازة في التمويل والضرائب. محترفون للغاية، موثوقون، ودائمًا داعمون!",
            imageUrl: "/images/logo/editted/el-Aml-logo.jpg",
            imageAlt: "شعار AI Amal الزراعي"
        },
        {
            title: "الفجر للاستيراد والتصدير",
            description: "استجابة ومهنية عالية. كانت El-Waleed مساعدة كبيرة في إدارة ضرائب شركتي. إنهم استجابيّون ومهنيّون للغاية. أوصي بهم بشدة!",
            imageUrl: "/images/logo/editted/el-fagr-logo.jpg",
            imageAlt: "شعار الفجر للاستيراد والتصدير"
        },
        {
            title: "طيبا للاستيراد والتصدير",
            description: "خدمة ودعم عملاء استثنائيان. لقد حسنت El-Waleed أعمالي من خلال خدماتها الاستثنائية في التمويل والضرائب. محترفون للغاية، دائمًا موثوقون وداعمون",
            imageUrl: "/images/logo/editted/tiba-logo.jpg",
            imageAlt: "شعار تيبا للاستيراد والتصدير"
        },
        {
            title: "الشركة المصرية للأغذية",
            description: "خدمة شفافة وموثوقة. كانت El-Waleed مساعدة كبيرة في إدارة ضرائب شركتي. إنهم استجابيّون ومهنيّون للغاية. أوصي بهم بشدة!",
            imageUrl: "/images/logo/editted/egyptian-company-for-food-logo.png",
            imageAlt: "شعار الشركة المصرية للأغذية"
        },
        {
            title: "تيبيكال فارم، مزرعة الفراولة",
            description: "حلول مالية فعالة وموثوقة. لقد أحدثت El-Waleed ثورة في أعمالي من خلال خدماتها الممتازة في التمويل والضرائب. محترفون للغاية، موثوقون، ودائمًا داعمون!",
            imageUrl: "/images/logo/typical-farm-logo.jpg",
            imageAlt: "شعار المزرعة النموذجية، مزرعة الفراولة"
        },
        {
            title: "سيلستي",
            description: "تحديثات في الوقت المناسب وتواصل واضح. لقد تميزت أعمالي بفضل خدمات التمويل والضرائب الممتازة من El-Waleed. إنهم دائمًا محترفون وموثوقون وداعمون",
            imageUrl: "/images/logo/editted/CELESTE.png",
            imageAlt: "شعار سيلستي"
        },
        {
            title: "القاهرة",
            description: "معرفة عالية ودائمًا مفيدة. كانت El-Waleed مساعدة كبيرة في إدارة ضرائب شركتي. أوصي بهم بشدة!",
            imageUrl: "/images/logo/editted/al-qahira.png",
            imageAlt: "شعار القاهرة"
        },
        {
            title: "نهر النيل الحر",
            description: "خدمة ودعم عملاء استثنائيان. لقد حسنت El-Waleed أعمالي من خلال خدماتها الاستثنائية في التمويل والضرائب. محترفون للغاية، دائمًا موثوقون وداعمون",
            imageUrl: "/images/logo/editted/freenile.png",
            imageAlt: "شعار نهر النيل الحر"
        }
    ];

    const clientsEn = [
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
        return 'ar'; // Default to 'ar' if window is undefined (e.g., during SSR)
    });

    const handleLanguageToggle = () => {
        const newLanguage = language === 'ar' ? 'en' : 'ar';
        setLanguage(newLanguage);
    
        if (typeof window !== "undefined") {
            localStorage.setItem('languageLocalStorage', newLanguage);
        }
    };
    

    return (
        <>
        {language==="en" ?
        <div dir="ltr">
            <NavbarEn imageUrl={"/images/logo/logo.jpg"} pageLabel={"About"} language={language} onLanguageToggle={handleLanguageToggle}/>
            <CarouselEn />
            <Card header={"Vision"} description={cards[0][1]} imageUrl={cards[0][0]} direction={1} textDir={"lg:text-left"}/>
            <Card header={"Mision"} description={cards[1][1]} imageUrl={cards[1][0]} direction={0} textDir={"lg:text-left"}/>
            <Card header={"Values"} description={cards[2][1]} imageUrl={cards[2][0]} direction={1} textDir={"lg:text-left"}/>
            <Card header={"Goals"} description={cards[3][1]} imageUrl={cards[3][0]} direction={0} textDir={"lg:text-left"}/>
            <OurClientsEn cards={clientsEn}/>
            <FooterEn />
        </div>
        :
        <div dir="rtl" className="font-cairo" >
            <NavbarAr imageUrl={"/images/logo/logo.jpg"} pageLabel={"About"} language={language} onLanguageToggle={handleLanguageToggle} />
            <CarouselAr />
            <Card header={"الرؤية"} description={cardsAr[0][1]} imageUrl={cardsAr[0][0]} direction={1} textDir={"lg:text-right"}/>
            <Card header={"المهمة"} description={cardsAr[1][1]} imageUrl={cardsAr[1][0]} direction={0} textDir={"lg:text-right"}/>
            <Card header={"القيم"} description={cardsAr[2][1]} imageUrl={cardsAr[2][0]} direction={1} textDir={"lg:text-right"}/>
            <Card header={"الأهداف"} description={cardsAr[3][1]} imageUrl={cardsAr[3][0]} direction={0} textDir={"lg:text-right"}/>
            <OurClientsAr cards={clientsAr}/>
            <FooterAr />
        </div>
        }
        </>
    );
}
