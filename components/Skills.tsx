import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black relative">
       {/* Decorative Grid */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-4">Stack <span className="text-fuchsia-500">Tecnológico</span></h2>
            <p className="text-gray-400">Herramientas y tecnologías que utilizo para crear el futuro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, index) => (
              <div key={index} className="group relative p-6 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gray-800 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-2xl font-bold text-gray-700 group-hover:text-cyan-400 transition-colors">{skill.level}%</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 h-2 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tag Cloud for extra keywords */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {["Machine Learning", "Deep Learning", "RPA", "Make.com", "Zapier", "LangChain", "Copilot", "Sora", "Veo", "Data Visualization", "Leadership", "Teaching"].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:text-white hover:border-fuchsia-500/50 transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Skills;