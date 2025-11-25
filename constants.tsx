import { Job, Skill, Education } from './types';
import React from 'react';
import { Brain, Cpu, Database, BarChart, Code, Bot, Globe, Layers } from 'lucide-react';

export const PROFILE = {
  name: "German Rodriguez",
  title: "Especialista en Datos | IA | Automatizaciones",
  email: "rodriguezgermancarlos@gmail.com",
  phone: "+5491133773628",
  linkedin: "https://www.linkedin.com/in/german-rodriguez-data",
  location: "Buenos Aires, Argentina",
  about: `¡Hola! Soy German. ¿Tienes problemas con tus datos? ¿Necesitas sacar conclusiones sobre cómo administrar su negocio y maximizar sus ingresos? Mi recorrido profesional ya lleva 15 años dentro del Mundo IT. Hoy me especializo en Ciencia de Datos, apasionado por transformar datos en decisiones estratégicas. Si estás buscando llevar tu negocio al siguiente nivel, esta es la oportunidad de conocernos. Permíteme mostrarte cómo puedo potenciar tu negocio con mis habilidades en Data Analytics, Business Intelligence y Data Science.`,
};

export const EXPERIENCE: Job[] = [
  {
    company: "NEURO LEARNING IA",
    role: "Consulting IA - Data Analytics",
    period: "Noviembre 2025 - Actualidad",
    location: "Buenos Aires, Argentina",
    details: [
      "Gestión de estrategia Digital, Planificación de Análisis de negocio, Análisis de Negocio.",
      "Desarrollo e implementación de Agentes IA (Lang Smith, Copilot).",
      "Desarrollo e implementación de Automatizaciones (n8n, Make, Zapier, RPA).",
      "Experimentación de Modelos generativos (Imagen, Audio, Video): GPT, Gemini, Copilot, Meta, Sora, Veo, Suno."
    ]
  },
  {
    company: "KEIZOKU DATA",
    role: "Consultor - Capacitador",
    period: "Agosto 2025 - Noviembre 2025",
    location: "Argentina",
    details: [
      "Capacitación a empleados: Jefes de área y gerentes de empresa gastronómicas - hotelera.",
      "Análisis estrategia de datos, Capacitación de Herramientas de Power BI y Excel.",
      "Colaboración en diseño y mejora de materiales pedagógicos para optimizar experiencia educativa.",
      "Desarrollo de habilidades blandas como trabajo en equipo, comunicación, escucha activa y adaptación al entorno laboral."
    ]
  },
  {
    company: "CODERHOUSE",
    role: "Profesional Enseñanza en Ciencia de Datos",
    period: "Mayo 2025 – Actualidad",
    location: "Argentina",
    details: [
      "Comisiones: Data Science I: Fundamentos, Data Science II: Machine Learning, Data Science III: Deep Learning, Business Analytics, Python, Inteligencia Artificial.",
      "Análisis y documentación del progreso de estudiantes para identificar oportunidades de mejora.",
      "Adaptación de técnicas de estudio según necesidades individuales de aprendizaje.",
      "Desarrollo de habilidades blandas como trabajo en equipo, comunicación, escucha activa y adaptación al entorno laboral.",
      "Colaboración en diseño y mejora de materiales pedagógicos para optimizar experiencia educativa."
    ]
  },
  {
    company: "ICARO - UNIVERSIDAD DE CÓRDOBA",
    role: "Profesional Enseñanza en Ciencia de Datos",
    period: "Diciembre 2024 – Abril 2025",
    location: "Córdoba, Argentina",
    details: [
      "Comisiones: Data Science I: Fundamentos, Data Science II: Machine Learning, Data Science III: Deep Learning, Python, Inteligencia Artificial.",
      "Desarrollo de habilidades blandas como trabajo en equipo, comunicación, escucha activa y adaptación al entorno laboral.",
      "Colaboración en diseño y mejora de materiales pedagógicos para optimizar experiencia educativa.",
      "Análisis y documentación del progreso de estudiantes para identificar oportunidades de mejora."
    ]
  },
  {
    company: "UNIVERSIDAD NACIONAL DE QUILMES",
    role: "Profesional Enseñanza en Programación",
    period: "Marzo 2024 – Actualidad",
    location: "Argentina",
    details: [
      "Comisiones: Seguridad Informática, Laboratorio de Testing de Software.",
      "Análisis y documentación del progreso de estudiantes para identificar oportunidades de mejora.",
      "Adaptación de técnicas de estudio según necesidades individuales de aprendizaje.",
      "Desarrollo de habilidades blandas como trabajo en equipo, comunicación, escucha activa y adaptación al entorno laboral.",
      "Colaboración en diseño y mejora de materiales pedagógicos para optimizar experiencia educativa."
    ]
  },
  {
    company: "ANTÁRTIDA - UNIVERSIDAD DE MAR DEL PLATA",
    role: "Profesional Enseñanza en OFIMÁTICA",
    period: "Septiembre 2024 - Diciembre 2024",
    location: "Mar del Plata, Argentina",
    details: [
      "Comisiones: Marketing - Análisis de Proyecto - Gestión de Proyecto.",
      "Desarrollo de habilidades blandas como trabajo en equipo, comunicación, escucha activa y adaptación al entorno laboral.",
      "Colaboración en diseño y mejora de materiales pedagógicos para optimizar experiencia educativa."
    ]
  },
  {
    company: "CODERHOUSE",
    role: "Profesional Enseñanza en Análisis de Datos",
    period: "Junio 2021 – Septiembre 2024",
    location: "Argentina",
    details: [
      "Comisiones: Data Analytics (Tableau, Power BI, Data Studio), Data Engineer (ETL, Big Data), Data SQL (Mysql, SQL Server), Data Excel.",
      "Desarrollo de habilidades blandas como trabajo en equipo, comunicación, escucha activa y adaptación al entorno laboral.",
      "Colaboración en diseño y mejora de materiales pedagógicos para optimizar experiencia educativa.",
      "Análisis y documentación del progreso de estudiantes para identificar oportunidades de mejora."
    ]
  },
  {
    company: "TECHO | TETO",
    role: "Data Analyst",
    period: "Feb 2023 - Julio 2023",
    location: "Argentina",
    details: ["Análisis y Proyección de Soluciones Analíticas para Marketing."]
  },
  {
    company: "Carena Sistemas S.R.L.",
    role: "Analista Funcional y Soporte",
    period: "Marzo 2011 - Octubre 2021",
    location: "Argentina",
    details: [
      "10 años y 8 meses de trayectoria.",
      "Capacitador y asesoramiento de funcionalidades.",
      "Análisis de problemas, resoluciones y mantenimiento de bases de datos."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Universidad Nacional de Quilmes",
    degree: "Tecnología de la información",
    period: "Junio 2021 - Febrero 2023",
    details: "Data Analytics, Data Science, Seguridad y Testing de Software."
  },
  {
    institution: "Instituto de Formación Docente N° 24 - Bernal",
    degree: "Analista de Sistemas Informáticos",
    period: "Marzo 2003 - Diciembre 2006",
  },
  {
    institution: "Big School",
    degree: "Desarrollo con IA",
    period: "Octubre 2025",
    details: "Formación Complementaria"
  },
  {
    institution: "Universidad Nacional de Quilmes",
    degree: "Inteligencia Artificial en Educación Superior",
    period: "Septiembre 2025",
    details: "Fundamentos, aplicaciones y desafíos éticos"
  },
  {
    institution: "Ministerio de Educación",
    degree: "Business Intelligence",
    period: "Julio 2025",
    details: "Formación Complementaria"
  },
  {
    institution: "Universidad Quilmes",
    degree: "Diseño de Evaluaciones colaborativas en aulas virtual",
    period: "Mayo 2025",
    details: "Formación Complementaria"
  }
];

export const SKILLS = [
  { name: "Python & Javascript", icon: <Code className="w-6 h-6" />, level: 90 },
  { name: "Power BI & Looker Studio", icon: <BarChart className="w-6 h-6" />, level: 95 },
  { name: "Automation (n8n, Power Automate)", icon: <Cpu className="w-6 h-6" />, level: 90 },
  { name: "Generative AI (GPT, Gemini, Copilot)", icon: <Bot className="w-6 h-6" />, level: 95 },
  { name: "Data Science (Pandas, Numpy, Tensorflow)", icon: <Brain className="w-6 h-6" />, level: 85 },
  { name: "Tools (GIT, Jira, Confluence)", icon: <Layers className="w-6 h-6" />, level: 80 },
];