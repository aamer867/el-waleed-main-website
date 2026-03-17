import React from "react";
import Card from "../Card";

const OurClients = () => {
    const cards = [
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
            imageUrl: "/images/logo/editted/typical_farm_logo.jpg",
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
        },
        {
            title: "Rovana",
            description: "Outstanding financial guidance and tax support. El-Waleed has significantly improved my business operations with their expert services. Always professional, dependable, and attentive",
            imageUrl: "/images/logo/rovana.jpg",
            imageAlt: "Rovana Logo"
        }
    ];
    return (
        <div className="bg-gray-50 pt-20 pb-20" id="ourClients">
            <h1 className="text-main-blue-color md:text-4xl text-xl w-3/4 md:w-1/2 mx-auto text-center mb-10 font-bold">Don’t just take our word for it, see what our Clients are saying</h1>
            <div className="relative overflow-x-hidden">
                <div className="flex animate-slide">
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
