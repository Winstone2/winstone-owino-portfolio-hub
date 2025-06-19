
import React from 'react';
import { Database, Code, BarChart3, Cloud, Settings, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "ETL & Data Pipelines",
      skills: ["Apache NiFi", "Apache Airflow", "AWS Glue (familiar)", "Talend (basic)"],
      color: "zone-blue"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Warehousing",
      skills: ["PostgreSQL", "Snowflake (familiar)", "Redshift (basic)"],
      color: "zone-purple"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      skills: ["Python (Pandas, NumPy)", "SQL", "Data Modeling"],
      color: "zone-light-blue"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "BI & Visualization",
      skills: ["Apache Superset", "Power BI", "Tableau (basic)"],
      color: "zone-dark-blue"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      skills: ["PostgreSQL", "CouchDB", "MySQL"],
      color: "zone-blue"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Workflow Automation",
      skills: ["NiFi Registry", "Airflow"],
      color: "zone-purple"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Governance",
      skills: ["Role-based access", "Audit trails", "Compliance"],
      color: "zone-light-blue"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: ["Docker", "Git", "Bash scripting"],
      color: "zone-dark-blue"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-zone-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-zone-dark-blue mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 text-sm flex items-center">
                    <div className={`w-2 h-2 bg-${category.color} rounded-full mr-2 flex-shrink-0`}></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-zone-dark-blue mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Data Pipeline Architecture",
              "ETL Process Optimization", 
              "Healthcare Data Analytics",
              "Real-time Data Visualization",
              "Database Performance Tuning",
              "Cross-functional Collaboration",
              "Technical Training & Support",
              "Data Quality Assurance"
            ].map((competency, index) => (
              <span 
                key={index}
                className="bg-zone-blue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zone-dark-blue transition-colors duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
