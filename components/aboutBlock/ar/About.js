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
        <div dir="rtl" className="pt-12 pb-16 relative" style={{ height: totalHeight }}>
            <Card 
                title={". الرؤية"} 
                header={"مبتكرة، تمكينية، مستدامة، شاملة"}
                description={"إيماننا القوي بمهننا يلهمنا لبناء منظمة متنوعة وقوية. نسعى لإنشاء فريق كفء ومبدع لتحقيق نجاح استثنائي مع العملاء المحليين والدوليين على حد سواء، مما يجعلنا اختيارهم الأول"}
                imageUrl={"/images/about-us/vision.jpg"}
                imageAlt={"رؤية من طرفنا"}
                colorGradientStart={"#314AAC"}
                colorGradientEnd={"#141E46"}
                zIndex={"z-40"}
                setHeight={(height) => handleSetHeight(0, height)}
                buttonName={"اعرف المزيد"}
                textDir={"sm:text-right"}
            />
            <Card 
                title={". . المهمة"} 
                header={"دعم النمو، الابتكار، الشراكة"}
                description={"نسعى لتقديم خدمات شاملة ومتقدمة في المحاسبة، التدقيق، الضرائب، الاستشارات المالية، والقانون للعديد من الشركات والقطاع الخيري. تُقدم خدماتنا من قبل محترفين مهرة باستخدام أنظمة حديثة، مع الالتزام بأعلى معايير المهنية والأخلاق"}
                imageUrl={"/images/about-us/mission.jpg"}
                imageAlt={"مهمة من طرفنا"}
                colorGradientStart={"#C70039"}
                colorGradientEnd={"#952042"}
                zIndex={"z-30"}
                topValue={topValues[1]}
                setHeight={(height) => handleSetHeight(1, height)}
                buttonName={"اعرف المزيد"}
                textDir={"sm:text-right"}
            />
            <Card 
                title={". . . القيم"} 
                header={"النزاهة، التعاون، التميز، الشفافية"}
                description={"تشدد قيمنا على الثقة بالنفس والثقة في الآخرين، اتخاذ القرارات الموضوعية، الاستقلالية في العمل، الاحترافية والكفاءة في تنفيذ المهام، النزاهة والشفافية، السرية في المعلومات الحساسة، والمصداقية في التقارير والاتصالات"}
                imageUrl={"/images/about-us/values.jpg"}
                imageAlt={"قيم من طرفنا"}
                colorGradientStart={"#FF6969"}
                colorGradientEnd={"#E10E0E"}
                zIndex={"z-20"}
                topValue={topValues[2]}
                setHeight={(height) => handleSetHeight(2, height)}
                buttonName={"اعرف المزيد"}
                textDir={"sm:text-right"}
            />
            <Card 
                title={". . . الأهداف"} 
                header={"التوسع، التأثير، الاستقرار، القيادة"}
                description={"أهدافنا هي تقديم خدمات استثنائية للعملاء ورواد الأعمال، تعزيز الإبداع في الإدارة، تقديم حلول مالية متكاملة، ضمان ربحية مستدامة، الالتزام بالمسؤوليات الاجتماعية والبيئية، ودعم النمو المستدام للشركة."}
                imageUrl={"/images/about-us/goals.jpg"}
                imageAlt={"أهداف من طرفنا"}
                colorGradientStart={"#BAD7E9"}
                colorGradientEnd={"#697983"}
                zIndex={"z-10"}
                topValue={topValues[3]}
                setHeight={(height) => handleSetHeight(3, height)}
                buttonName={"اعرف المزيد"}
                textDir={"sm:text-right"}
            />
        </div>
        </>
    );
}