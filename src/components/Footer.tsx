
import React from 'react';
import { Heart, Linkedin, MessageCircle, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zone-dark text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-comic font-bold gradient-text mb-3 sm:mb-4">Winstone Owino</h3>
            <p className="text-gray-300 leading-relaxed font-inter text-sm sm:text-base">
              Data Engineer specializing in digital health solutions and ETL analytics. 
              Transforming complex data into actionable insights for community health programs.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-comic font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-zone-light-blue transition-colors duration-200 font-inter text-sm sm:text-base"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-comic font-semibold mb-3 sm:mb-4">Connect With Me</h4>
            <div className="flex space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <a
                href="mailto:winstoneothis@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 sm:p-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/winstone-owino"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 sm:p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a
                href="https://wa.me/254705246944"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-2 sm:p-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 p-2 sm:p-3 rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm font-inter">
              Email: winstoneothis@gmail.com<br />
              Phone: +254-705-246-944
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center font-inter text-sm sm:text-base">
            Made with <Heart className="w-3 sm:w-4 h-3 sm:h-4 mx-2 text-red-500" /> by Winstone Owino © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
