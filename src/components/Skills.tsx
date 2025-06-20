
import React from 'react';
import { Database, Code, BarChart3, Cloud, Settings, Shield, Zap, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "ETL & Data Pipelines",
      skills: ["Apache NiFi", "Apache Airflow", "AWS Glue", "Talend"],
      level: "Expert",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Warehousing",
      skills: ["PostgreSQL", "Snowflake", "Amazon Redshift", "Data Modeling"],
      level: "Expert",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      skills: ["Python", "SQL", "Pandas", "NumPy"],
      level: "Expert",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "BI & Visualization",
      skills: ["Apache Superset", "Power BI", "Tableau", "D3.js"],
      level: "Advanced",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Systems",
      skills: ["PostgreSQL", "CouchDB", "MySQL", "MongoDB"],
      level: "Expert",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Workflow Automation",
      skills: ["NiFi Registry", "Airflow DAGs", "CI/CD", "Docker"],
      level: "Advanced",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Governance",
      skills: ["Data Security", "Compliance", "Audit Trails", "GDPR"],
      level: "Advanced",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git", "Linux"],
      level: "Intermediate",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const coreCompetencies = [
    { icon: <Zap className="w-5 h-5" />, text: "Real-time Data Processing" },
    { icon: <Brain className="w-5 h-5" />, text: "Healthcare Analytics" },
    { icon: <Database className="w-5 h-5" />, text: "Data Architecture Design" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Performance Optimization" },
    { icon: <Settings className="w-5 h-5" />, text: "System Integration" },
    { icon: <Shield className="w-5 h-5" />, text: "Data Quality Assurance" }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zone-blue to-zone-purple bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-zone-blue to-zone-purple mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Cutting-edge technologies and frameworks for modern data solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
              
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-zone-dark-blue">{category.title}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    category.level === 'Expert' ? 'bg-green-100 text-green-800' :
                    category.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {category.level}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 text-sm flex items-center group-hover:text-gray-800 transition-colors duration-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 flex-shrink-0`}></div>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-bold text-zone-dark-blue mb-12">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coreCompetencies.map((competency, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zone-blue to-zone-purple rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {competency.icon}
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-zone-blue transition-colors duration-300">
                    {competency.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
