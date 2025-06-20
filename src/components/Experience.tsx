
import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Regional Digital Health Support Officer",
      company: "Living Goods, Kenya",
      period: "2023 – Present",
      location: "Kenya",
      achievements: [
        "Training and performing UATs to support eCHIS dashboard data aggregation for 15+ Sub-County Health Management Teams (SCHMTs)",
        "Implemented PostgreSQL databases to store and manage CHPs/CHAs data across regions",
        "Collaborated with MLE and product teams to align analytics dashboards with health performance indicators",
        "Improved reporting coverage from 2 to 15 users",
        "Provided training and technical support to 35 Community Health Assistants (CHAs)",
        "Increased data reporting accuracy by 90%"
      ]
    },
    {
      title: "ICT Support Officer / Community Health Digital Systems Support Lead",
      company: "Living Goods",
      period: "2022 – 2023",
      location: "Kenya",
      achievements: [
        "Led deployment and management of community health digital tools including device registry (IMEI tracking)",
        "Developed performance dashboards and login credential systems",
        "Supported real-time data visualization and analysis",
        "Achieved 100% monthly report submissions",
        "Conducted over 10 data capacity-building sessions",
        "Ensured consistent data quality and usage across 3 sub-counties"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-zone-blue mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-zone-blue hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-zone-dark-blue mb-2">{exp.title}</h3>
                    <p className="text-xl text-zone-blue font-playfair font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600 mt-2 md:mt-0 font-inter">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <TrendingUp className="w-4 h-4 text-zone-blue mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed font-inter">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zone-blue to-zone-purple rounded-2xl p-8 text-white animate-scale-in">
            <h3 className="text-2xl font-playfair font-bold mb-4">Projects and Achievements</h3>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 mr-2" />
                <span className="text-lg font-playfair font-semibold">Dashboard Expansion Initiative</span>
              </div>
              <p className="text-lg leading-relaxed font-inter">
                Enabled dashboard access and analytics for 15 SCHMTs, reduced data blackout zones 
                and enabled full data visibility across health management teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
