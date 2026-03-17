import React from "react";
import Card from "../Card";

const OurClients = () => {
    const cards = [
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
            imageUrl: "/images/logo/typical_farm_logo.jpg",
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
            title: "فري نايل",
            description: "خدمة ودعم عملاء استثنائيان. لقد حسنت El-Waleed أعمالي من خلال خدماتها الاستثنائية في التمويل والضرائب. محترفون للغاية، دائمًا موثوقون وداعمون",
            imageUrl: "/images/logo/editted/freenile.png",
            imageAlt: "فري نايل شعار"
        },
        {
            title: "روفانا",
            description: "إرشادات مالية متميزة ودعم ضريبي. لقد حسّنت El-Waleed بشكل كبير من عمليات أعمالي من خلال خدماتها المتخصصة. دائمًا محترفون، موثوقون، واهتمّوا بالتفاصيل.",
            imageUrl: "/images/logo/rovana.jpg",
            imageAlt: "شعار روفانا"
        }        
    ];

    return (
        <div className="bg-gray-50 pt-20 pb-20" id="ourClients">
            <h1 className="text-main-blue-color md:text-4xl text-xl w-3/4 md:w-1/2 mx-auto text-center mb-10 font-bold">لا تقتصر على سماع رأينا فقط، شاهد ماذا يقول عملاؤنا</h1>
            <div className="relative overflow-x-hidden">
                <div className="flex animate-slide-rtl">
                    {cards.concat(cards).map((card, index) => (
                        <div key={index} className="px-2">
                            <Card
                                imageUrl={card.imageUrl}
                                imageAlt={card.imageAlt}
                                title={card.title}
                                description={card.description}
                                companyName={card.companyName}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurClients;

