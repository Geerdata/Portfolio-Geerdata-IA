import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Vamos a <span className="text-cyan-400">Crear Algo Increíble</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Si buscas potenciar tu negocio con Inteligencia Artificial o necesitas análisis de datos avanzado, estoy aquí para ayudar.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-500/20 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">{PROFILE.email}</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-full bg-white/5 text-fuchsia-500">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg">{PROFILE.phone}</span>
              </div>
              
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-600/20 text-blue-400">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-lg">LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="¿En qué puedo ayudarte?"></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold rounded-lg transition-all transform active:scale-[0.98]">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} German Rodriguez. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-600 text-sm font-display tracking-wider">NEUROLEARN AI STYLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;