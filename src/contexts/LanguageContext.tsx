// src/contexts/LanguageContext.tsx
import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export { LanguageContext };

// Traducciones
const translations = {
  es: {
    // AppBar
    'theme.toggle': 'Cambiar modo',
    'language.toggle': 'Cambiar idioma',
    'menu.open': 'Abrir menú',
    'menu.close': 'Cerrar menú',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.resume': 'Curriculum',
    'nav.works': 'Trabajos',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contacto',
    
    // ProfileSidebar
    'profile.title': 'Desarrolladora Full Stack',
    'profile.phone': 'Teléfono',
    'profile.location': 'Ubicación',
    'profile.email': 'Correo',
    'profile.birthday': 'Cumpleaños',
    'profile.downloadCV': 'Ver Curriculum',
    
    // Home
    'home.about': 'Sobre mí',
    'home.about.title': 'Sobre mí',
    'home.about.paragraph1': 'Soy Desarrolladora Full Stack y estudiante de Ingeniería en Software y Mecatrónica en INTEC (RD). Apasionada por la tecnología, la automatización y la docencia STEAM.',
    'home.about.paragraph2': 'Experiencia en C#, JavaScript, Python, React, Next.js, Angular, .NET, diseño electrónico, robótica educativa, impresión 3D y gestión de proyectos bajo metodologías ágiles.',
    'home.about.paragraph3': 'Actualmente contribuyo en el sector educativo y privado, desarrollando soluciones tecnológicas para empresas, instituciones y proyectos personales innovadores.',
    'home.whatIDo': '¡LO QUE HAGO!',
    'home.clients': 'Mis clientes',
    
    // Home Skills
    'home.skills.fullstack.title': 'Desarrollo Fullstack',
    'home.skills.fullstack.desc': 'React, Next.js, Node.js, C#, .NET, Angular, TypeScript y bases de datos SQL/NoSQL.',
    'home.skills.automation.title': 'Automatización y 3D',
    'home.skills.automation.desc': 'Automatización industrial, microcontroladores, diseño e impresión 3D.',
    'home.skills.teaching.title': 'Docencia STEAM',
    'home.skills.teaching.desc': 'Capacitación de docentes y estudiantes en robótica, tecnología y pensamiento computacional.',
    'home.skills.robotics.title': 'Robótica Educativa',
    'home.skills.robotics.desc': 'Implementación de kits LEGO, Arduino y desarrollo de currículos STEAM.',
    'home.skills.design.title': 'UI/UX Design',
    'home.skills.design.desc': 'Prototipado con Figma, heurísticas de usabilidad y accesibilidad.',
    'home.skills.database.title': 'Bases de Datos',
    'home.skills.database.desc': 'Diseño y gestión de bases de datos relacionales y no relacionales.',
    
    // Contact
    'contact.title': 'Contáctame',
    'contact.subtitle': '¡Hablemos de tu próximo proyecto!',
    'contact.name': 'Nombre completo',
    'contact.email': 'Correo electrónico',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.phone': 'Teléfono',
    
    // Footer
    'footer.copyright': '© 2025 Heydi García | Portafolio Personal',

    // Works
    'works.title': 'Portafolio',
    'works.filter.all': 'Todos',
    'works.filter.prototyping': 'Prototipado',
    'works.filter.identity': 'Identidad',

    // Blogs
    'blogs.title': 'Blog',
    'blogs.readMore': 'Leer más',

    // Modal
    'modal.close': 'Cerrar',
    'modal.shareText': '¿Te gustó este artículo? ¡Compártelo!',

    // Resume
    'resume.education.title': 'Educación',
    'resume.experience.title': 'Experiencia',
    'resume.skills.title': 'Habilidades',
  },
  en: {
    // AppBar
    'theme.toggle': 'Toggle theme',
    'language.toggle': 'Change language',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    
    // Navigation
    'nav.home': 'Home',
    'nav.resume': 'Resume',
    'nav.works': 'Works',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contact',
    
    // ProfileSidebar
    'profile.title': 'Full Stack Developer',
    'profile.phone': 'Phone',
    'profile.location': 'Location',
    'profile.email': 'Email',
    'profile.birthday': 'Birthday',
    'profile.downloadCV': 'Download CV',
    
    // Home
    'home.about': 'About Me',
    'home.about.title': 'About Me',
    'home.about.paragraph1': 'I am a Full Stack Developer and Software & Mechatronics Engineering student at INTEC (DR). Passionate about technology, automation, and STEAM education.',
    'home.about.paragraph2': 'Experience in C#, JavaScript, Python, React, Next.js, Angular, .NET, electronic design, educational robotics, 3D printing, and agile project management.',
    'home.about.paragraph3': 'Currently contributing to the educational and private sectors, developing technological solutions for companies, institutions, and innovative personal projects.',
    'home.whatIDo': 'WHAT I DO!',
    'home.clients': 'My Clients',
    
    // Home Skills
    'home.skills.fullstack.title': 'Fullstack Development',
    'home.skills.fullstack.desc': 'React, Next.js, Node.js, C#, .NET, Angular, TypeScript and SQL/NoSQL databases.',
    'home.skills.automation.title': 'Automation & 3D',
    'home.skills.automation.desc': 'Industrial automation, microcontrollers, 3D design and printing.',
    'home.skills.teaching.title': 'STEAM Teaching',
    'home.skills.teaching.desc': 'Training teachers and students in robotics, technology and computational thinking.',
    'home.skills.robotics.title': 'Educational Robotics',
    'home.skills.robotics.desc': 'LEGO kits implementation, Arduino and STEAM curriculum development.',
    'home.skills.design.title': 'UI/UX Design',
    'home.skills.design.desc': 'Figma prototyping, usability heuristics and accessibility.',
    'home.skills.database.title': 'Databases',
    'home.skills.database.desc': 'Design and management of relational and non-relational databases.',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': "Let's talk about your next project!",
    'contact.name': 'Full name',
    'contact.email': 'Email address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    
    // Footer
    'footer.copyright': '© 2025 Heydi García | Personal Portfolio',

    // Works
    'works.title': 'Portfolio',
    'works.filter.all': 'All',
    'works.filter.prototyping': 'Prototyping',
    'works.filter.identity': 'Identity',

    // Blogs
    'blogs.title': 'Blog',
    'blogs.readMore': 'Read more',

    // Modal
    'modal.close': 'Close',
    'modal.shareText': 'Did you like this article? Share it!',

    // Resume
    'resume.education.title': 'Education',
    'resume.experience.title': 'Experience',
    'resume.skills.title': 'Skills',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('es');

  // Función para cambiar idioma
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Función de traducción
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Cargar idioma guardado al montar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
