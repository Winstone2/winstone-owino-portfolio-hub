
import React from 'react';
import { ExternalLink, GitBranch, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "eCHIS Dashboard Data Aggregation System",
      description: "Comprehensive data aggregation system supporting 15+ Sub-County Health Management Teams with real-time analytics and performance monitoring.",
      technologies: ["PostgreSQL", "Apache Superset", "Python", "NiFi"],
      achievements: [
        "Increased reporting coverage from 2 to 15 users",
        "Implemented automated data validation",
        "Real-time performance dashboards"
      ],
      metrics: "15+ SCHMTs supported",
      icon: <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6" />
    },
    {
      title: "Community Health Digital Tools Platform",
      description: "End-to-end digital platform for community health workers including device registry, performance tracking, and credential management systems.",
      technologies: ["Apache Airflow", "PostgreSQL", "Docker", "Git"],
      achievements: [
        "100% monthly report submissions achieved",
        "Device registry with IMEI tracking",
        "Performance dashboard implementation"
      ],
      metrics: "100% report completion",
      icon: <Users className="w-5 sm:w-6 h-5 sm:h-6" />
    },
    {
      title: "Data Quality Enhancement Initiative",
      description: "Comprehensive data quality improvement program across 3 sub-counties with training modules and automated validation systems.",
      technologies: ["Python", "SQL", "Data Validation", "Training Modules"],
      achievements: [
        "90% increase in data reporting accuracy",
        "35 CHAs trained and certified",
        "Automated data quality checks"
      ],
      metrics: "90% accuracy improvement",
      icon: <GitBranch className="w-5 sm:w-6 h-5 sm:h-6" />
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-comic font-bold mb-4 sm:mb-6 gradient-text">Featured Projects</h2>
          <div className="w-20 sm:w-24 h-1 bg-zone-blue mx-auto"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="hero-gradient p-4 sm:p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm opacity-90 font-inter">Impact</div>
                    <div className="font-comic font-bold text-sm sm:text-base">{project.metrics}</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-comic font-bold mb-2">{project.title}</h3>
              </div>
              
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 font-inter text-sm sm:text-base">{project.description}</p>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm font-comic font-semibold text-zone-dark-blue mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs sm:text-sm text-gray-600 flex items-start font-inter">
                        <div className="w-1.5 h-1.5 bg-zone-blue rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm font-comic font-semibold text-zone-dark-blue mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-zone-dark px-2 sm:px-3 py-1 rounded-full text-xs font-inter font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-zone-blue text-white py-2 sm:py-3 rounded-lg font-inter font-semibold hover:bg-zone-dark-blue transition-colors duration-200 flex items-center justify-center text-sm sm:text-base">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
