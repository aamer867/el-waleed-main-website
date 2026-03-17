"use client";
import Image from 'next/image';
import styles from './navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ imageUrl, pageLabel, language, onLanguageToggle }) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
        <nav className="shadow-lg relative z-20">
            <div className="container mx-auto grid grid-cols-3 lg:grid-cols-4 items-center px-4">
                {/* Logo Section */}
                <Link href="/">
                    <div className="flex-shrink-0 sm:col-start-2 md:col-start-1 justify-center items-center flex md:justify-start md:items-start">
                        <Image
                            src={imageUrl}
                            alt="El-Waleed Logo"
                            width={100}
                            height={100}
                            className="object-contain w-20 h-20 md:w-24 md:h-24"
                        />
                    </div>
                </Link>
                {/* Burger Menu Icon (for small screens) */}
                <div className="md:hidden col-span-1 flex justify-center items-center sm:col-start-3 md:col-start-2 ">
                    <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-main-red-color focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation Links Section*/}
                <div className="lg:col-span-2 md:col-span-1 md:flex hidden items-center justify-between lg:space-x-16 space-x-4">
                    <Link href="/" className={`transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Home" ? styles.active : ""}`}>الرئيسية</Link>
                    <Link href="/about" className={`transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "About" ? styles.active : ""}`}>من نحن</Link>
                    <Link href="/services" className={`transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Services" ? styles.active : ""}`}>الخدمات</Link>
                    {/* <a href="/blogs" className={`transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Blogs" ? styles.active : ""}`}>Blogs</a> */}
                    <div className="relative flex items-center">
                        <button onClick={toggleDropdown} className="text-gray-700 hover:text-main-red-color focus:outline-none">
                        <span className="inline-block px-4 py-2">المزيد</span>
                        </button>
                        {isDropdownOpen && (
                        <div className="absolute inset-x-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                            <div className="flex flex-col">
                            <Link href="/about#ourClients" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Our Clients" ? styles.active : ""}`}>عملائنا</Link>
                            <Link href="/" onClick={(e) => {e.preventDefault();window.location.href = "/#contactUs";}} className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Contact us" ? styles.active : ""}`}>تواصل معنا</Link>
                            {/* <a href="#contact" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "FAQs" ? styles.active : ""}`}>FAQs</a>
                            <a href="#contact" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Jobs" ? styles.active : ""}`}>Jobs</a> */}
                            </div>
                        </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu (for small screens) */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white border border-gray-300 rounded shadow-lg`}>
                    <Link href="/" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Home" ? styles.active : ""}`}>الصفحة الرئيسية</Link>
                    <Link href="/about" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "About" ? styles.active : ""}`}>من نحن</Link>
                    <Link href="/services" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Services" ? styles.active : ""}`}>خدمات</Link>
                    {/* <a href="#portfolio" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Blogs" ? styles.active : ""}`}>Blogs</a> */}
                    <Link href="/about#ourClients" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Our Clients" ? styles.active : ""}`}>عملائنا</Link>
                    <Link href="/" onClick={(e) => {e.preventDefault();window.location.href = "/#contactUs";}} className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Contact us" ? styles.active : ""}`}>تواصل معنا</Link>
                    {/* <a href="#contact" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "FAQs" ? styles.active : ""}`}>FAQs</a>
                    <a href="#contact" className={`block px-4 py-2 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-main-red-color ${pageLabel === "Jobs" ? styles.active : ""}`}>Jobs</a> */}
                </div>

                {/* Language Switch Section */}
                <div className="flex justify-end sm:col-start-1 md:col-start-3 row-start-1 lg:col-start-4">
                    <label className={styles.switch}>
                        <input type="checkbox" checked={language === 'ar'} onChange={onLanguageToggle} />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
