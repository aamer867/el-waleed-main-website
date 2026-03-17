import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="mb-6 md:mb-0 flex items-center">
                        <img src="/images/logo/logo.jpg" alt="Company Logo" className="w-24 h-auto mr-4" />
                        <h1 className="text-xl font-semibold">El Waleed</h1>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <p className="text-gray-400">info@el-waleed.com</p>
                        <p className="text-gray-400">Al-Rowad Capital Building, Al-Raml 2, Alexandria</p>
                        <p className="text-gray-400">Saturday - Thursday: 09.00 AM - 05.00 PM</p>
                    </div>

                    {/* Social Media Section */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-main-blue-color">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-main-blue-color">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-main-blue-color">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-main-blue-color">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} El Waleed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
