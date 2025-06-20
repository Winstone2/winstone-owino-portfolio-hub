
import React from 'react';
import { Heart, Linkedin, MessageCircle, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zone-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold gradient-text mb-4">Winstone Owino</h3>
            <p className="text-gray-300 leading-relaxed font-inter">
              Data Engineer specializing in digital health solutions and ETL analytics. 
              Transforming complex data into actionable insights for community health programs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-zone-light-blue transition-colors duration-200 font-inter"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:winstoneothis@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/winstone-owino"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/254705246944"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm font-inter">
              Email: winstoneothis@gmail.com<br />
              Phone: +254-705-246-944
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center font-inter">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Winstone Owino © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
