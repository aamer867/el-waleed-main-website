"use client";
import Card from "../Card";
import Image from "next/image";
import React from "react";
import {useState} from 'react';

function calculateTopValues(cardHeights, marginTopAbout, marginBetweenCards) {
    const topValues = Array(cardHeights.length).fill(0);

    for (let i = 1; i < cardHeights.length; i++) {
        topValues[i] = marginTopAbout + i * marginBetweenCards + cardHeights.slice(0, i).reduce((acc, height) => acc + height, 0);
    }

    return topValues;
}

export default function About() {
    
    const [cardHeights, setCardHeights] = useState(new Array(4).fill(0));
    // const [topValues, setTopValues] = useState([0, 120, 190, 270]);
    // const [isDefault, setIsDefault] = useState(true);

    const handleSetHeight = (index, height) => {
        setCardHeights(prevHeights => {
            const newHeights = [...prevHeights];
            newHeights[index] = height;
            return newHeights;
        });
    };


    const marginTopAbout = 48;

    const marginBottomAbout = 64;

    const marginBetweenCards = 50;

    const totalHeightNoMargin = cardHeights.reduce((acc, height) => acc + height, 0);

    const totalHeight = marginTopAbout + marginBottomAbout + 3*marginBetweenCards + totalHeightNoMargin;

    const topValues = calculateTopValues(cardHeights, marginTopAbout, marginBetweenCards);

    // function toggleTopValues() {
    //     if (isDefault) {
    //         const newTopValues = calculateTopValues(cardHeights, marginTopAbout, marginBetweenCards);
    //         setTopValues(newTopValues);
    //     } else {
    //         setTopValues([0, 120, 190, 270]);
    //     }
    //     setIsDefault(!isDefault); // Toggle the state
    // }


    return(
        <>
        {/* <button onClick={toggleTopValues}>click Me</button> */}
        <div className="pt-12 pb-16 relative" style={{ height: totalHeight }}>
            <Card 
            title={". VISION"} 
            header={"Innovative, empowering, sustainable, inclusive"}
            description={"Our strong belief in our profession inspires us to build a diverse and robust organization. We strive to create a competent and creative team to achieve exceptional success with both local and international clients, making us their top choice"}
            imageUrl={"/images/about-us/vision.jpg"}
            imageAlt={"Vison From Our"}
            colorGradientStart={"#314AAC"}
            colorGradientEnd={"#141E46"}
            zIndex={"z-40"}
            setHeight={(height) => handleSetHeight(0, height)}
            buttonName={"Know More"}
            textDir={"sm:text-left"}
            />
            <Card 
            title={". . MISSION"} 
            header={"Support growth, innovation, partnership"}
            description={"We aim to offer comprehensive and advanced services in accounting, auditing, taxation, financial consulting, and law to diverse companies and the charitable sector. Our services are delivered by skilled professionals using modern systems, adhering to high standards of professionalism and ethics"}
            imageUrl={"/images/about-us/mission.jpg"}
            imageAlt={"Mission From Our"}
            colorGradientStart={"#C70039"}
            colorGradientEnd={"#952042"}
            zIndex={"z-30"}
            topValue={topValues[1]}
            setHeight={(height) => handleSetHeight(1, height)}
            buttonName={"Know More"}
            textDir={"sm:text-left"}
            />
            <Card 
            title={". . . VALUES"} 
            header={"Integrity, collaboration, excellence, transparency"}
            description={"Our values emphasize self-confidence and trust in others, objective decision-making, independence in work, professionalism and efficiency in task execution, integrity and transparency, confidentiality in sensitive information, and credibility in reporting and communications"}
            imageUrl={"/images/about-us/values.jpg"}
            imageAlt={"Values From Our"}
            colorGradientStart={"#FF6969"}
            colorGradientEnd={"#E10E0E"}
            zIndex={"z-20"}
            topValue={topValues[2]}
            setHeight={(height) => handleSetHeight(2, height)}
            buttonName={"Know More"}
            textDir={"sm:text-left"}
            />
            <Card 
            title={". . . GOALS"} 
            header={"Expansion, impact, stability, leadership"}
            description={"Our objectives are to deliver exceptional services to clients and entrepreneurs, foster creativity in management, offer integrated financial solutions, ensure sustainable profitability, uphold social and environmental responsibilities, support the sustainable growth of the company."}
            imageUrl={"/images/about-us/goals.jpg"}
            imageAlt={"Goals From Our"}
            colorGradientStart={"#BAD7E9"}
            colorGradientEnd={"#697983"}
            zIndex={"z-10"}
            topValue={topValues[3]}
            setHeight={(height) => handleSetHeight(3, height)}
            buttonName={"Know More"}
            textDir={"sm:text-left"}
            />
        </div>
        </>
    );
}