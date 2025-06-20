
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <div className="absolute inset-0 bg-gradient-to-br from-zone-blue/5 via-transparent to-zone-purple/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-zone-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-zone-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-5xl mx-auto">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-zone-blue to-zone-purple rounded-full opacity-30 group-hover:opacity-50 transition-all duration-500 blur-md"></div>
              <img
                src="/lovable-uploads/70c74e5a-799a-4344-b469-cfdb0025945f.png"
                alt="Winstone Owino"
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto border-4 border-white shadow-2xl animate-scale-in object-cover relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-zone-blue via-zone-purple to-zone-dark-blue bg-clip-text text-transparent animate-slide-up leading-tight">
              Winstone Owino
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-zone-blue to-zone-purple mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }}></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-zone-dark-blue mb-8 animate-slide-up font-medium tracking-wide" style={{ animationDelay: '0.4s' }}>
            Senior Data Engineer
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            {['Digital Health Solutions', 'ETL & Analytics', 'Data Architecture'].map((skill, index) => (
              <span key={index} className="bg-white/80 backdrop-blur-sm text-zone-dark-blue px-4 py-2 rounded-full text-sm font-medium border border-zone-blue/20 hover:bg-zone-blue hover:text-white transition-all duration-300 hover:scale-105">
                {skill}
              </span>
            ))}
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.6s' }}>
            Transforming complex health data into actionable insights with 
            <span className="font-semibold text-zone-blue"> 3+ years of experience</span> building 
            scalable data pipelines and analytics solutions across Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-zone-blue to-zone-dark-blue text-white px-8 py-4 rounded-full font-semibold hover:from-zone-dark-blue hover:to-zone-purple transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 flex items-center justify-center gap-2"
            >
              <span>Let's Connect</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href="mailto:winstoneothis@gmail.com"
              className="group border-2 border-zone-blue text-zone-blue px-8 py-4 rounded-full font-semibold hover:bg-zone-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg"
      >
        <ChevronDown className="w-6 h-6 text-zone-blue" />
      </button>
    </section>
  );
};

export default Hero;
