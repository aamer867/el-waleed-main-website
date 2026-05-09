"use client";
import React, { useState, useEffect } from "react";

const typingSpeed = 100;
const erasingSpeed = 50;
const pauseTime = 1000;

const RotatingHeader = () => {
  const [words, setWords] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [tileDescriptionData, setTileDescriptionData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const fetchWords = async () => {
      try {
        const response = await fetch("/api/landing-page-words-en");
        const data = await response.json();
        setWords(data.words);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };

    const fetchHeader = async () => {
      try {
        const response = await fetch("/api/landing-page-content");
        const data = await response.json();
        setTileDescriptionData(data.section);
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchWords();
    fetchHeader();
  }, []);

  useEffect(() => {
    if (words.length === 0) return;
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
  }, [words, isRemoving, charIndex, currentWordIndex]);

  useEffect(() => {
    if (!isRemoving && charIndex === 0 && words.length > 0) {
      setCurrentWordIndex(prev => (prev + 1) % words.length);
    }
  }, [isRemoving, charIndex, words]);

  if (!mounted) return null;

  return (
    <h1 className="text-center text-4xl lg:text-left lg:text-6xl text-main-blue-color">
      {tileDescriptionData?.header ?? ""}{" "}
      <span className="text-main-red-color font-bold">{displayedText}</span>
    </h1>
  );
};

export default RotatingHeader;