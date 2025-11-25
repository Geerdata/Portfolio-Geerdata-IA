import React from 'react';
import { PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-cyan-400 font-display font-bold tracking-widest text-sm mb-2 uppercase">Sobre Mí</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Potenciando Negocios con <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Datos</span>
            </h3>
          </div>

          <div className="prose prose-invert prose-lg text-gray-400">
             <p className="leading-relaxed">
               {PROFILE.about}
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 transition duration-300">
              <h4 className="text-white font-bold text-xl mb-1">Consultoría</h4>
              <p className="text-sm text-gray-400">Estrategia y Análisis de Datos</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-fuchsia-500/50 transition duration-300">
              <h4 className="text-white font-bold text-xl mb-1">Docencia</h4>
              <p className="text-sm text-gray-400">Formación de nuevos talentos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;