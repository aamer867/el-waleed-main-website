import React, { useState, useEffect } from 'react';

const words = ["الضرائب", "المراجعات الضريبية", "التمويل", "دراسة الجدوى"];
const typingSpeed = 100; // سرعة الكتابة
const erasingSpeed = 50; // سرعة المحو
const pauseTime = 1000; // الوقت المستغرق قبل تبديل الكلمات

const RotatingHeader = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isRemoving, setIsRemoving] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timer;

        if (isRemoving) {
            if (charIndex > 0) {
                timer = setTimeout(() => {
                    setDisplayedText(prev => prev.slice(0, -1));
                    setCharIndex(prev => prev - 1);
                }, erasingSpeed);
            } else {
                timer = setTimeout(() => {
                    setIsRemoving(false);
                    setCharIndex(0);
                }, pauseTime);
            }
        } else {
            if (charIndex < words[currentWordIndex].length) {
                timer = setTimeout(() => {
                    setDisplayedText(prev => prev + words[currentWordIndex][charIndex]);
                    setCharIndex(prev => prev + 1);
                }, typingSpeed);
            } else {
                timer = setTimeout(() => {
                    setIsRemoving(true);
                }, pauseTime);
            }
        }

        return () => clearTimeout(timer);
    }, [isRemoving, charIndex, currentWordIndex]);

    useEffect(() => {
        if (!isRemoving && charIndex === 0) {
            setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
    }, [isRemoving, charIndex]);

    return (
        <h1 className="text-center text-4xl lg:text-right lg:text-6xl text-main-blue-color">
            يمكننا خدمتك في <span className='text-main-red-color font-bold'>{displayedText}</span>
        </h1>
    );
};

export default RotatingHeader;
