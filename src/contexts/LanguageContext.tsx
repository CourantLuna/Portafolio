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

    // Resume Education
    'resume.education.software': 'Ingeniería en Software',
    'resume.education.software.place': 'Instituto Tecnológico de Santo Domingo (INTEC), República Dominicana',
    'resume.education.mechatronics': 'Tecnología en Mecatrónica',
    'resume.education.mechatronics.place': 'Instituto Tecnológico de las Américas (ITLA), Santo Domingo',
    'resume.education.auditor': 'Auditor ISO 9001:2015',
    'resume.education.auditor.place': 'AENOR, Santo Domingo',
    
    // Resume Experience
    'resume.experience.fullstack': 'Desarrolladora Full Stack (Angular/.NET)',
    'resume.experience.fullstack.place': 'Didacore, Santo Domingo',
    'resume.experience.frontend': 'Desarrolladora Frontend (React/Next.js)',
    'resume.experience.frontend.place': 'Proyectos personales y freelance',
    'resume.experience.teacher': 'Docente de Robótica Educativa',
    'resume.experience.teacher.place': 'LAM School y MINERD',
    
    // Resume Skills
    'resume.skills.web': 'Desarrollo Web',
    'resume.skills.mobile': 'Apps móviles',
    'resume.skills.automation': 'Automatización / 3D',
    'resume.skills.uiux': 'UI/UX y prototipado',
    'resume.skills.teaching': 'Enseñanza STEAM',

    // Works Projects
    'works.dida.title': 'Plataforma Didacore (DIDA)',
    'works.dida.desc': 'Desarrollo full stack para plataforma interna de DIDA, con enfoque en frontend (Angular, TypeScript, Bootstrap) e integración de APIs, .NET Core y Oracle.',
    'works.asfales.title': 'Asfales',
    'works.asfales.desc': 'Sistema para gestión de viajes y turismo. Prototipado, diseño de interfaz y frontend.',
    'works.coritos.title': 'Coritos Viajando',
    'works.coritos.desc': 'Identidad visual y logo para Coritos Viajando.',
    'works.genesis.title': 'Marca personal Genesis García',
    'works.genesis.desc': 'Logo y branding para arquitecta y diseñadora Genesis García.',
    'works.beiconic.title': 'Be Iconic',
    'works.beiconic.desc': 'Logo e identidad para tienda de ropa Be Iconic.',
    'works.pacatrack.title': 'PacaTrak',
    'works.pacatrack.desc': 'Frontend, prototipado y UI para sistema de gestión de pacas.',
    'works.cre8arch.title': 'Cre8arch',
    'works.cre8arch.desc': 'Identidad visual y logo para empresa tecnológica Cre8arch.',
    'works.zerohunger.title': 'ZeroHunger App',
    'works.zerohunger.desc': 'Prototipado y frontend para app de gestión de donaciones de alimentos.',
    'works.heydi.title': 'Marca personal Heydi',
    'works.heydi.desc': 'Logo y branding de mi propia marca personal.',
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

    // Resume Education
    'resume.education.software': 'Software Engineering',
    'resume.education.software.place': 'Instituto Tecnológico de Santo Domingo (INTEC), Dominican Republic',
    'resume.education.mechatronics': 'Mechatronics Technology',
    'resume.education.mechatronics.place': 'Instituto Tecnológico de las Américas (ITLA), Santo Domingo',
    'resume.education.auditor': 'ISO 9001:2015 Auditor',
    'resume.education.auditor.place': 'AENOR, Santo Domingo',
    
    // Resume Experience
    'resume.experience.fullstack': 'Full Stack Developer (Angular/.NET)',
    'resume.experience.fullstack.place': 'Didacore, Santo Domingo',
    'resume.experience.frontend': 'Frontend Developer (React/Next.js)',
    'resume.experience.frontend.place': 'Personal projects and freelance',
    'resume.experience.teacher': 'Educational Robotics Teacher',
    'resume.experience.teacher.place': 'LAM School and MINERD',
    
    // Resume Skills
    'resume.skills.web': 'Web Development',
    'resume.skills.mobile': 'Mobile Apps',
    'resume.skills.automation': 'Automation / 3D',
    'resume.skills.uiux': 'UI/UX and prototyping',
    'resume.skills.teaching': 'STEAM Teaching',

    // Works Projects
    'works.dida.title': 'Didacore Platform (DIDA)',
    'works.dida.desc': 'Full stack development for DIDA internal platform, focused on frontend (Angular, TypeScript, Bootstrap) and API integration, .NET Core and Oracle.',
    'works.asfales.title': 'Asfales',
    'works.asfales.desc': 'Travel and tourism management system. Prototyping, interface design and frontend.',
    'works.coritos.title': 'Coritos Viajando',
    'works.coritos.desc': 'Visual identity and logo for Coritos Viajando.',
    'works.genesis.title': 'Genesis García Personal Brand',
    'works.genesis.desc': 'Logo and branding for architect and designer Genesis García.',
    'works.beiconic.title': 'Be Iconic',
    'works.beiconic.desc': 'Logo and identity for Be Iconic clothing store.',
    'works.pacatrack.title': 'PacaTrak',
    'works.pacatrack.desc': 'Frontend, prototyping and UI for bale management system.',
    'works.cre8arch.title': 'Cre8arch',
    'works.cre8arch.desc': 'Visual identity and logo for technology company Cre8arch.',
    'works.zerohunger.title': 'ZeroHunger App',
    'works.zerohunger.desc': 'Prototyping and frontend for food donation management app.',
    'works.heydi.title': 'Heydi Personal Brand',
    'works.heydi.desc': 'Logo and branding for my own personal brand.',
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
