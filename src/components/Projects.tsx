
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
      icon: <TrendingUp className="w-6 h-6" />
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
      icon: <Users className="w-6 h-6" />
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
      icon: <GitBranch className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-zone-blue mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="hero-gradient p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90 font-inter">Impact</div>
                    <div className="font-playfair font-bold">{project.metrics}</div>
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-2">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6 font-inter">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-playfair font-semibold text-zone-dark-blue mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 flex items-start font-inter">
                        <div className="w-1.5 h-1.5 bg-zone-blue rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-playfair font-semibold text-zone-dark-blue mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-zone-dark px-3 py-1 rounded-full text-xs font-inter font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-zone-blue text-white py-3 rounded-lg font-inter font-semibold hover:bg-zone-dark-blue transition-colors duration-200 flex items-center justify-center">
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
