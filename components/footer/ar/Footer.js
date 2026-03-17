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
                        <img src="/images/logo/logo.jpg" alt="شعار الشركة" className="w-24 h-auto mr-4" />
                        <h1 className="text-xl font-semibold">الوليد</h1>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-2">اتصل بنا</h2>
                        <p className="text-gray-400">info@el-waleed.com</p>
                        <p className="text-gray-400">مبنى الرواد كابيتال، الرمل 2، الإسكندرية</p>
                        <p className="text-gray-400">السبت - الخميس: 09:00 ص - 05:00 م</p>
                    </div>

                    {/* Social Media Section */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-2">تابعنا</h2>
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
                    <p className="text-gray-400">© {new Date().getFullYear()}الوليد جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
