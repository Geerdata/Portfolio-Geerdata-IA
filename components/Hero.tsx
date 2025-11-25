import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Floating Icon */}
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-fuchsia-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-full p-6 ring-1 ring-white/10">
            <Brain className="w-16 h-16 text-cyan-400" />
            <div className="absolute top-0 right-0">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-500"></span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Title inspired by "NEUROLEARN AI" - Updated to GEERDATA IA */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 select-none">
          <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">GEER</span><span className="text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">DATA</span>
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] ml-4">IA</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-widest uppercase border-b border-gray-700 pb-4">
          {PROFILE.name}
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformando datos en <span className="text-cyan-400 font-semibold">decisiones estratégicas</span>. 
          Especialista en Inteligencia Artificial, Automatización y Business Intelligence.
        </p>

        {/* Buttons hidden as per request
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a 
            href="#contact" 
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            CONTACTAR
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#experience" 
            className="group px-8 py-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-fuchsia-500/50 text-gray-300 hover:text-white font-bold tracking-wider hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
          >
            VER EXPERIENCIA
          </a>
        </div>
        */}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;