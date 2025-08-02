import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500 py-4 bg-light ">
      <div className="flex flex-wrap justify-between items-startgap-8 pb-6 border-borderColor border-b">
        <div className="">
          <img src={assets.logo} alt="logo" className="h-12 md:h-14 bg-white" />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <img
                src={assets.facebook_logo}
                alt="Facebook"
                className="h-5 w-5"
              />
            </a>

            <a href="#">
              <img
                src={assets.instagram_logo}
                alt="Instagram"
                className="h-5 w-5"
              />
            </a>

            <a href="#">
              <img
                src={assets.twitter_logo}
                alt="X (Twitter)"
                className="h-5 w-5"
              />
            </a>

            <a href="#">
              <img src={assets.gmail_logo} alt="Gmail" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>1234 Luxury Drive</li>
            <li>MHamid Marrakech, Morocco</li>
            <li>+212-0612547887</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>
      {/* <hr className="border-gray-300 mt-8" /> */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()}Car Rental. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>

          <li> | </li>

          <li>
            <a href="#">Terms</a>
          </li>

          <li> | </li>

          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
