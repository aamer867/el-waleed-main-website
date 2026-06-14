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
  const [mounted, setMounted] = useState(false);
  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    setMounted(true);

    const fetchWords = async () => {
      try {
        const response = await fetch("/api/landing-page-words_ar");
        const data = await response.json();
        const extractedWords = data?.cards?.map((card) => card.word) || [];
        setWords(extractedWords);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };

    const fetchHeader = async () => {
      try {
        const response = await fetch("/api/landing-page-content");
        const data = await response.json();
        setHeaderText(data.section?.header_ar ?? "");
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchWords();
    fetchHeader();
  }, []);

  useEffect(() => {
    setCharIndex(0);
    setDisplayedText("");
  }, [currentWordIndex]);

  useEffect(() => {
    if (!words.length) return;

    let timer;

    if (isRemoving) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsRemoving(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, pauseTime);
      }
    } else {
      const currentWord = words[currentWordIndex];
      if (!currentWord) return;

      if (charIndex < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsRemoving(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [words, isRemoving, charIndex, currentWordIndex]);

  if (!mounted) return null;

  return (
    <h1
      className="
        text-center
        lg:text-right
        lg:text-6xl
        text-main-blue-color
      "
    >
      <span>{headerText} </span>

      <span className="text-main-red-color font-bold text-base">
        {displayedText}
      </span>
    </h1>
  );
};

export default RotatingHeader;