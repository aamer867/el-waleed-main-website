import React, { useEffect, useRef, useState } from 'react';

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState({ card1: false, card2: false });
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target === card1Ref.current) {
                        setIsVisible(prevState => ({
                            ...prevState,
                            card1: entry.isIntersecting,
                        }));
                    } else if (entry.target === card2Ref.current) {
                        setIsVisible(prevState => ({
                            ...prevState,
                            card2: entry.isIntersecting,
                        }));
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (card1Ref.current) {
            observer.observe(card1Ref.current);
        }
        if (card2Ref.current) {
            observer.observe(card2Ref.current);
        }

        return () => {
            if (card1Ref.current) {
                observer.unobserve(card1Ref.current);
            }
            if (card2Ref.current) {
                observer.unobserve(card2Ref.current);
            }
        };
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 perspective-1000" id='contactUs'>
            <h1 className="text-4xl font-bold text-center mb-8 text-main-red-color">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    ref={card1Ref}
                    className={`bg-gray-100 rounded-lg shadow-lg p-8 transition-transform duration-1000 ease-out`}
                    style={{
                        transform: isVisible.card1 ? 'rotateY(0deg)' : 'rotateY(90deg)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">E-mail</h2>
                            <p className="text-gray-700">info@el-waleed.com</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Address</h2>
                            <p className="text-gray-700">Al-Rowad Capital Building, Al-Raml 2, Alexandria</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Opening Hours</h2>
                            <p className="text-gray-700">Saturday - Thursday: 09.00 AM - 05.00 PM</p>
                        </div>
                    </div>
                </div>
                <div
                    ref={card2Ref}
                    className={`bg-gray-100 rounded-lg shadow-lg p-8 transition-transform duration-1000 ease-out`}
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
