import { useState, useEffect } from "react";
import Card from "./Card"; 

export default function CardCarousel({ cardsData }) {

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        if (!cardsData || cardsData.length === 0) return;

        const interval = setInterval(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [cardsData]);

    if (!cardsData || cardsData.length === 0) {
        return <p>Loading cards...</p>;
    }

    const currentCard = cardsData[currentCardIndex];

    return (
        <Card 
            title={currentCard.title} 
            imageUrl={currentCard.imageUrl} 
            imageAlt={currentCard.imageAlt} 
            description={currentCard.description} 
        />
    );
}