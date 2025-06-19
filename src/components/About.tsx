
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-zone-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-zone-dark-blue mb-6">
              Professional Summary
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Experienced Data Engineer with 3+ years of success in designing, building, and maintaining 
              scalable data pipelines, data warehouses, and analytics dashboards in digital health environments. 
              Proven ability to transform complex health data into actionable insights using cutting-edge technologies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I specialize in optimizing data flows, managing relational and NoSQL databases, and improving 
              data accuracy for community health programs across Kenya. My work has directly contributed to 
              increasing data reporting accuracy by 90% and enabling full data visibility for health management teams.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-zone-dark">
                <MapPin className="w-5 h-5 text-zone-blue mr-3" />
                <span>Kisumu, Kenya</span>
              </div>
              <div className="flex items-center text-zone-dark">
                <Phone className="w-5 h-5 text-zone-blue mr-3" />
                <span>+254-705-246-944</span>
              </div>
              <div className="flex items-center text-zone-dark">
                <Mail className="w-5 h-5 text-zone-blue mr-3" />
                <span>winstoneothis@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-zone-dark-blue mb-6">Education</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-zone-blue pl-6">
                  <h4 className="text-lg font-semibold text-zone-dark">
                    Master's Degree in Computer Science
                  </h4>
                  <p className="text-zone-blue font-medium">Maseno University</p>
                  <p className="text-gray-600">Expected Completion: Dec 2025</p>
                  <p className="text-sm text-gray-500 mt-2">Research Ongoing</p>
                </div>
                
                <div className="border-l-4 border-zone-purple pl-6">
                  <h4 className="text-lg font-semibold text-zone-dark">
                    Bachelor of Science in Mathematics and Computer Science
                  </h4>
                  <p className="text-zone-purple font-medium">Maseno University</p>
                  <p className="text-gray-600">Sept 2015 - Dec 2019</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-zone-dark-blue mb-4">Certifications</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Digital Health Systems, LG Learning Hub</li>
                  <li>• Data Storytelling with SQL</li>
                  <li>• Leadership & Communication Training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
