
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img
              src="/lovable-uploads/70c74e5a-799a-4344-b469-cfdb0025945f.png"
              alt="Winstone Owino"
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full mx-auto mb-6 border-4 border-zone-blue shadow-2xl animate-scale-in object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-slide-up">
            Winstone Owino
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-zone-dark-blue mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Data Engineer | Digital Health Solutions | ETL & Analytics Specialist
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            3+ years of experience transforming complex health data into actionable insights.
            Specialized in building scalable data pipelines and analytics dashboards that drive 
            community health programs across Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-zone-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-zone-dark-blue transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
            <a
              href="mailto:winstoneothis@gmail.com"
              className="border-2 border-zone-blue text-zone-blue px-8 py-4 rounded-full font-semibold hover:bg-zone-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-zone-blue" />
      </button>
    </section>
  );
};

export default Hero;
