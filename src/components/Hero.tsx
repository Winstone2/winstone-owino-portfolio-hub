
import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <div className="absolute inset-0 bg-gradient-to-br from-zone-blue/5 via-transparent to-zone-purple/5"></div>
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-zone-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-zone-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-zone-blue to-zone-purple rounded-full opacity-30 group-hover:opacity-50 transition-all duration-500 blur-md"></div>
              <img
                src="/lovable-uploads/70c74e5a-799a-4344-b469-cfdb0025945f.png"
                alt="Winstone Owino"
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto border-2 sm:border-4 border-white shadow-2xl animate-scale-in object-cover relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-comic font-bold mb-2 sm:mb-4 bg-gradient-to-r from-zone-blue via-zone-purple to-zone-dark-blue bg-clip-text text-transparent animate-slide-up leading-tight">
              Winstone Owino
            </h1>
            <div className="h-1 w-20 sm:w-32 bg-gradient-to-r from-zone-blue to-zone-purple mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }}></div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-comic text-zone-dark-blue mb-6 sm:mb-8 animate-slide-up font-medium tracking-wide" style={{ animationDelay: '0.4s' }}>
            Data Engineer
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            {['Digital Health Solutions', 'ETL & Analytics', 'Data Architecture', 'PostgreSQL', 'Data Visualization'].map((skill, index) => (
              <span key={index} className="bg-white/90 backdrop-blur-sm text-zone-dark-blue px-3 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-inter font-medium border border-zone-blue/20 hover:bg-zone-blue hover:text-white transition-all duration-300 hover:scale-105 shadow-md">
                {skill}
              </span>
            ))}
          </div>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-up font-inter font-light px-4" style={{ animationDelay: '0.6s' }}>
            Transforming complex health data into actionable insights with 
            <span className="font-semibold text-zone-blue"> 3+ years of experience</span> building 
            scalable data pipelines and analytics solutions that drive meaningful health outcomes across Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-slide-up px-4" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-zone-blue to-zone-dark-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold hover:from-zone-dark-blue hover:to-zone-purple transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Let's Connect</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href="mailto:winstoneothis@gmail.com"
              className="group border-2 border-zone-blue text-zone-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold hover:bg-zone-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-zone-blue" />
      </button>
    </section>
  );
};

export default Hero;
