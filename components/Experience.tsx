import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Trayectoria <span className="text-cyan-400">Profesional</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un recorrido de 15 años liderando la transformación digital y educativa.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-transparent opacity-30"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] mt-6 z-20"></div>

                {/* Content Card */}
                <div className="md:w-1/2 pl-6 md:pl-0">
                   <div className={`p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                          {job.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-fuchsia-400 font-medium mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.company}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                        <MapPin className="w-3 h-3" />
                        <span>{job.location}</span>
                      </div>

                      {job.description && (
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{job.description}</p>
                      )}

                      {job.details && (
                        <ul className="space-y-2">
                          {job.details.map((detail, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-1.5 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                   </div>
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-24">
          <h3 className="font-display text-3xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-fuchsia-500" />
            Educación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {EDUCATION.map((edu, idx) => (
               <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-fuchsia-500/30 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-2">{edu.institution}</h4>
                  <p className="text-cyan-400 font-medium mb-2">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                  {edu.details && <p className="text-gray-400 text-sm italic">{edu.details}</p>}
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;