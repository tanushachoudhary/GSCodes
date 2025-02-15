import React from "react";
import linkedinLogo from "../assets/linkedin.png";

function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white py-6 px-10">
      {/* Footer Content Wrapper */}
      <div className="flex flex-wrap justify-between gap-10">
        
        {/* © 2025 Section */}
        <div className="text-lg">© 2025</div>

        {/* Team Members with LinkedIn */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Our Team</h3>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/yash-seth-7502a925a/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="h-8 w-8 rounded-full" />
            </a>
            <p className="text-lg">Yash Seth</p>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/tanusha-choudhary-1811c/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="h-8 w-8 rounded-full" />
            </a>
            <p className="text-lg">Tanusha Choudhary</p>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/teesha-dembla-1162b3262/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="h-8 w-8 rounded-full" />
            </a>
            <p className="text-lg">Teesha Dembla</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <a href="#" className="hover:underline text-gray-300">Home</a>
          <a href="#" className="hover:underline text-gray-300">Problems</a>
          <a href="#" className="hover:underline text-gray-300">Community</a>
          <a href="#" className="hover:underline text-gray-300">Contact</a>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>Email: <a href="mailto:gs.codes@gmail.com" className="hover:underline text-gray-300">gs.codes@gmail.com</a></p>
          <p>Phone: <a href="tel:+919876543210" className="hover:underline text-gray-300">+91 ***** 43210</a></p>
          <p>Add: 23 Sir M. Visvesvaraya Marg,</p>
          <p>Indore, Madhya Pradesh 452003</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
