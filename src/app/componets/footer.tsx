import React from "react";
import { Github, Linkedin, X } from "lucide-react";

// Component for rendering social media icons
const SocialIcon = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <Icon className="w-4 h-4" />
  </a>
);

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          {/* <div className="mb-8">
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              I am passionate about programming, and my BCA background makes me a standout candidate. My enthusiasm and dedication are exactly what you're looking for. I am confident I will make a significant impact on your team.
            </p>
          </div> */}

          {/* Quick Links Section */}
          {/* <div className="mb-8">
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "View All Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === "View All Projects"
                        ? "/resume"
                        : item === "Contact"
                          ? "/contact"
                          : "#"
                    }
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Follow Us Section */}
          {/* <div className="mb-8">
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://github.com/ShubhamPatilSp"
                icon={Github}
                label="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/shubham-patil-8494982b0"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialIcon
                href="https://x.com/x_shuubhamm"
                icon={X}
                label="X (Twitter)"
              />
            </div>
          </div> */}

          {/* Contact Us Section */}
          {/* <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <address className="not-italic text-sm space-y-2">
              <p>Maharashtra, India</p>
              <p>Jalgaon Amalner</p>
              <p>Email: <a href="mailto:xshuubhampatil@gmail.com" className="hover:text-white transition-colors duration-300">xshuubhampatil@gmail.com</a></p>
              <p>Phone: <a href="tel:+918421518624" className="hover:text-white transition-colors duration-300">+91 8421518624</a></p>
            </address>
          </div> */}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-xs">
            © {new Date().getFullYear()} Shubham Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
