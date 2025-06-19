
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "winstoneothis@gmail.com",
      link: "mailto:winstoneothis@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+254-705-246-944",
      link: "tel:+254705246944"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Kisumu, Kenya",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/winstone-owino",
      color: "hover:bg-blue-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      link: "https://wa.me/254705246944",
      color: "hover:bg-green-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      link: "https://x.com/home",
      color: "hover:bg-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-zone-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate on your next data engineering project? Let's discuss how we can 
            transform your data challenges into valuable insights.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-zone-dark-blue mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="bg-zone-blue text-white p-3 rounded-lg mr-4 group-hover:bg-zone-dark-blue transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                      <p className="text-zone-dark font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-zone-dark-blue mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-zone-blue text-white p-3 rounded-lg ${social.color} transition-all duration-200 transform hover:scale-110 hover:shadow-lg`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-scale-in">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-zone-dark-blue mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-zone-dark mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zone-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-zone-dark mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zone-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-zone-dark mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zone-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-zone-dark mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zone-blue focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-zone-blue text-white py-4 rounded-lg font-semibold hover:bg-zone-dark-blue transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
