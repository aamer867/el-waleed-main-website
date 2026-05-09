"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await fetch("/api/header_footer");
        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    const fetchContact = async () => {
      try {
        const response = await fetch("/api/contact-us-section_ar");
        const data = await response.json();
        setContactInfo(data.cards?.[0]);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

    fetchFooter();
    fetchContact();
  }, []);

  return (
    <footer dir="rtl" className="bg-gray-800 text-white">
      <div className="container mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1 - Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={footerData?.image_url ?? "/images/logo/logo.jpg"}
              alt="شعار الشركة"
              className="w-24 h-auto mb-3"
            />
            <h1 className="text-xl font-bold">الوليد</h1>
          </div>

          {/* Column 2 - Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-bold mb-3 text-main-red-color">اتصل بنا</h2>
            <p className="text-gray-400 mb-1">{contactInfo?.email ?? ""}</p>
            <p className="text-gray-400 mb-1">{contactInfo?.phone ?? ""}</p>
            <p className="text-gray-400 mb-1">{contactInfo?.address ?? ""}</p>
            <p className="text-gray-400">{contactInfo?.opening_hours ?? ""}</p>
          </div>

          {/* Column 3 - Social */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-bold mb-3 text-main-red-color">تابعنا</h2>
            <div className="flex gap-6">
              <a href={footerData?.faceBookLink ?? "#"} className="text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={footerData?.xLink ?? "#"} className="text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={footerData?.linkedInLink ?? "#"} className="text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href={footerData?.instagramLink ?? "#"} className="text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} الوليد — جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;