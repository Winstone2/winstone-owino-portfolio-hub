
import React from 'react';
import { MapPin, Phone, Mail, Award, Calendar, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Calendar className="w-6 h-6" />, label: "Years Experience", value: "3+" },
    { icon: <Users className="w-6 h-6" />, label: "Teams Supported", value: "15+" },
    { icon: <Award className="w-6 h-6" />, label: "Accuracy Improvement", value: "90%" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zone-blue to-zone-purple bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-zone-blue to-zone-purple mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Passionate about turning data into insights that drive meaningful change
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-zone-dark-blue mb-8 flex items-center">
              <span className="w-12 h-12 bg-gradient-to-r from-zone-blue to-zone-purple rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </span>
              Professional Journey
            </h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                As a seasoned Data Engineer with over 3 years of specialized experience in digital health environments, 
                I've dedicated my career to transforming complex healthcare data into powerful, actionable insights 
                that drive community health programs across Kenya.
              </p>
              
              <p className="text-lg">
                My expertise spans the complete data lifecycle—from designing robust ETL pipelines and optimizing 
                data warehouses to creating intuitive analytics dashboards that empower health management teams 
                to make data-driven decisions.
              </p>
              
              <p className="text-lg">
                I take pride in my track record of increasing data reporting accuracy by 90% and enabling 
                comprehensive data visibility for health teams, directly contributing to improved community 
                health outcomes.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-zone-blue mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-zone-dark-blue">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-zone-dark p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <MapPin className="w-5 h-5 text-zone-blue mr-4 flex-shrink-0" />
                <span className="font-medium">Kisumu, Kenya</span>
              </div>
              <div className="flex items-center text-zone-dark p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <Phone className="w-5 h-5 text-zone-blue mr-4 flex-shrink-0" />
                <span className="font-medium">+254-705-246-944</span>
              </div>
              <div className="flex items-center text-zone-dark p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <Mail className="w-5 h-5 text-zone-blue mr-4 flex-shrink-0" />
                <span className="font-medium">winstoneothis@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-zone-dark-blue mb-8 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-r from-zone-purple to-zone-blue rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </span>
                Education & Certifications
              </h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-4 border-gradient-to-b from-zone-blue to-zone-purple">
                  <div className="absolute w-4 h-4 bg-zone-blue rounded-full -left-2.5 top-2"></div>
                  <div className="bg-gradient-to-r from-zone-blue/5 to-transparent p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-zone-dark mb-2">
                      Master's in Computer Science
                    </h4>
                    <p className="text-zone-blue font-semibold mb-1">Maseno University</p>
                    <p className="text-gray-600 mb-2">Expected: December 2025</p>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Research Ongoing
                    </span>
                  </div>
                </div>
                
                <div className="relative pl-8 border-l-4 border-gradient-to-b from-zone-purple to-zone-blue">
                  <div className="absolute w-4 h-4 bg-zone-purple rounded-full -left-2.5 top-2"></div>
                  <div className="bg-gradient-to-r from-zone-purple/5 to-transparent p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-zone-dark mb-2">
                      BSc Mathematics & Computer Science
                    </h4>
                    <p className="text-zone-purple font-semibold mb-1">Maseno University</p>
                    <p className="text-gray-600">2015 - 2019</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-bold text-zone-dark-blue mb-6">Professional Certifications</h4>
                <div className="space-y-3">
                  {[
                    'Digital Health Systems - LG Learning Hub',
                    'Advanced Data Storytelling with SQL',
                    'Leadership & Technical Communication'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100">
                      <Award className="w-4 h-4 text-zone-blue mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
