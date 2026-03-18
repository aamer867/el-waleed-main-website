"use client";
import React, { useEffect, useRef, useState } from 'react';

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState({ card1: false, card2: false });
    const [contactInfo, setContactInfo] = useState(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);

    useEffect(() => {
        fetch("/api/contact-us-section")
            .then(res => res.json())
            .then(data => {setContactInfo(data)
            console.log(data);
    });
        
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target === card1Ref.current) {
                        setIsVisible(prev => ({ ...prev, card1: entry.isIntersecting }));
                    } else if (entry.target === card2Ref.current) {
                        setIsVisible(prev => ({ ...prev, card2: entry.isIntersecting }));
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );

        if (card1Ref.current) observer.observe(card1Ref.current);
        if (card2Ref.current) observer.observe(card2Ref.current);

        return () => {
            if (card1Ref.current) observer.unobserve(card1Ref.current);
            if (card2Ref.current) observer.unobserve(card2Ref.current);
        };
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 perspective-1000" id='contactUs'>
            <h1 className="text-4xl font-bold text-center mb-8 text-main-red-color">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    ref={card1Ref}
                    className="bg-gray-100 rounded-lg shadow-lg p-8 transition-transform duration-1000 ease-out"
                    style={{
                        transform: isVisible.card1 ? 'rotateY(0deg)' : 'rotateY(90deg)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {contactInfo ? (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">E-mail</h2>
                                <p className="text-gray-700">{contactInfo.email}</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Phone</h2>
                                <p className="text-gray-700">{contactInfo.phone}</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Address</h2>
                                <p className="text-gray-700">{contactInfo.address}</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Opening Hours</h2>
                                <p className="text-gray-700">{contactInfo.opening_hours}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Loading...</p>
                    )}
                </div>

                {/* Contact form card - unchanged */}
                <div
                    ref={card2Ref}
                    className="bg-gray-100 rounded-lg shadow-lg p-8 transition-transform duration-1000 ease-out"
                    style={{
                        transform: isVisible.card2 ? 'rotateY(0deg)' : 'rotateY(90deg)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <h3 className="text-xl font-semibold text-main-blue-color mb-4">Send Us a Message</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main-blue-color focus:border-main-blue-color"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main-blue-color focus:border-main-blue-color"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main-blue-color focus:border-main-blue-color"
                                rows="4"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-main-blue-color text-white font-semibold rounded-md shadow hover:bg-main-blue-color-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-blue-color"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;