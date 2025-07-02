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
    'profile.birthdayDate': '11 de noviembre de 2001',
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
    'resume.skills.skillsLabel': 'Habilidades',
    'resume.skills.knowledgeLabel': 'Conocimientos',
    'resume.certificates.verified': 'Certificados Verificados',
    'resume.date.present': 'Actualidad',

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

    // Blogs
    'blogs.frontend.date': '15 Julio',
    'blogs.frontend.tag': 'Tecnología',
    'blogs.frontend.title': '¿Por qué elegí el Frontend como mi puerta al mundo tech?',
    'blogs.frontend.content.p1': 'Desde la universidad descubrí que crear interfaces era el espacio perfecto para unir creatividad y lógica. El frontend me permitió trabajar en proyectos reales, desde aplicaciones empresariales hasta plataformas sociales, y encontrar mi voz como mujer en tecnología en República Dominicana.',
    'blogs.frontend.content.p2': 'Hoy disfruto inspirar a otras jóvenes a explorar el mundo del desarrollo web y mostrar que sí se puede tener impacto desde el Caribe.',
    
    'blogs.robotics.date': '4 Mayo',
    'blogs.robotics.tag': 'Educación STEAM',
    'blogs.robotics.title': '5 Claves para inspirar a niñas dominicanas en Robótica y Programación',
    'blogs.robotics.content.p1': 'Compartir mi experiencia como facilitadora de robótica en LAM School y talleres en MINERD me hizo ver lo importante que es el ejemplo. La robótica es divertida, pero sobre todo, es una vía para que más chicas desarrollen confianza en sus habilidades.',
    'blogs.robotics.content.li1': 'Demuestra resultados prácticos con proyectos reales',
    'blogs.robotics.content.li2': 'Cuenta historias de mujeres en tech locales',
    'blogs.robotics.content.li3': 'Haz del error parte del aprendizaje',
    'blogs.robotics.content.li4': 'Usa plataformas como Arduino, LEGO, Scratch y Python',
    'blogs.robotics.content.li5': 'Mantén siempre una mentalidad de curiosidad',

    'blogs.asfales.date': '12 Marzo',
    'blogs.asfales.tag': 'Proyectos',
    'blogs.asfales.title': 'Detrás de Asfales: cómo creé una app turística de cero a producto',
    'blogs.asfales.content.p1': 'Asfales nació como proyecto final, pero terminó siendo una app real de turismo y gestión de viajes. Aprendí a combinar Next.js, prototipado en Figma y trabajo en equipo para entregar una solución útil y profesional, conectando necesidades reales del sector turismo en RD.',

    'blogs.branding.date': '22 Abril',
    'blogs.branding.tag': 'Branding',
    'blogs.branding.title': 'Mi experiencia diseñando identidades para startups en RD',
    'blogs.branding.content.p1': 'Diseñar marcas para empresas como Coritos Viajando, Be Iconic o Genesis García me permitió entender la importancia de una identidad coherente y memorable. Uso Figma, Canva y mucha observación de tendencias para crear logos y sistemas visuales que conectan con el público dominicano.',

    'blogs.productivity.date': '3 Febrero',
    'blogs.productivity.tag': 'Productividad',
    'blogs.productivity.title': '6 trucos para ser developer, estudiante y voluntaria… ¡sin perder la cabeza!',
    'blogs.productivity.content.li1': 'Planifica tu semana, pero deja espacio para imprevistos',
    'blogs.productivity.content.li2': 'Usa apps como Notion, Google Calendar y Pomodoro',
    'blogs.productivity.content.li3': 'Apóyate en comunidades (Discord, WhatsApp, WomenTechmakers)',
    'blogs.productivity.content.li4': 'Dale prioridad al sueño y al autocuidado',
    'blogs.productivity.content.li5': 'Elige tus batallas: aprende a decir que no',
    'blogs.productivity.content.li6': 'Recuerda por qué empezaste: tu propósito es tu motor',

    'blogs.zerohunger.date': '8 Enero',
    'blogs.zerohunger.tag': 'Impacto Social',
    'blogs.zerohunger.title': 'ZeroHunger: tecnología dominicana para combatir el desperdicio de alimentos',
    'blogs.zerohunger.content.p1': 'ZeroHunger fue un reto increíble: crear una app para gestionar donaciones de alimentos y conectar a quienes quieren ayudar. Aprendí de bases de datos, APIs, diseño de experiencia de usuario y sobre todo del impacto social que puede tener la tecnología en nuestra isla.',
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
    'profile.birthdayDate': 'November 11, 2001',
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
    'resume.skills.skillsLabel': 'Skills',
    'resume.skills.knowledgeLabel': 'Knowledge',
    'resume.certificates.verified': 'Verified Certificates',
    'resume.date.present': 'Present',

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

    // Blogs
    'blogs.frontend.date': 'July 15',
    'blogs.frontend.tag': 'Technology',
    'blogs.frontend.title': 'Why I chose Frontend as my gateway to the tech world?',
    'blogs.frontend.content.p1': 'Since university I discovered that creating interfaces was the perfect space to unite creativity and logic. Frontend allowed me to work on real projects, from enterprise applications to social platforms, and find my voice as a woman in technology in the Dominican Republic.',
    'blogs.frontend.content.p2': 'Today I enjoy inspiring other young women to explore the world of web development and showing that you can make an impact from the Caribbean.',
    
    'blogs.robotics.date': 'May 4',
    'blogs.robotics.tag': 'STEAM Education',
    'blogs.robotics.title': '5 Keys to inspire Dominican girls in Robotics and Programming',
    'blogs.robotics.content.p1': 'Sharing my experience as a robotics facilitator at LAM School and workshops at MINERD made me see how important example is. Robotics is fun, but above all, it is a way for more girls to develop confidence in their abilities.',
    'blogs.robotics.content.li1': 'Demonstrate practical results with real projects',
    'blogs.robotics.content.li2': 'Tell stories of local women in tech',
    'blogs.robotics.content.li3': 'Make error part of learning',
    'blogs.robotics.content.li4': 'Use platforms like Arduino, LEGO, Scratch and Python',
    'blogs.robotics.content.li5': 'Always maintain a curiosity mindset',

    'blogs.asfales.date': 'March 12',
    'blogs.asfales.tag': 'Projects',
    'blogs.asfales.title': 'Behind Asfales: how I created a tourism app from zero to product',
    'blogs.asfales.content.p1': 'Asfales was born as a final project, but ended up being a real tourism and travel management app. I learned to combine Next.js, Figma prototyping and teamwork to deliver a useful and professional solution, connecting real needs of the tourism sector in DR.',

    'blogs.branding.date': 'April 22',
    'blogs.branding.tag': 'Branding',
    'blogs.branding.title': 'My experience designing identities for startups in DR',
    'blogs.branding.content.p1': 'Designing brands for companies like Coritos Viajando, Be Iconic or Genesis García allowed me to understand the importance of a coherent and memorable identity. I use Figma, Canva and a lot of trend observation to create logos and visual systems that connect with the Dominican public.',

    'blogs.productivity.date': 'February 3',
    'blogs.productivity.tag': 'Productivity',
    'blogs.productivity.title': '6 tricks to be a developer, student and volunteer... without losing your mind!',
    'blogs.productivity.content.li1': 'Plan your week, but leave room for unforeseen events',
    'blogs.productivity.content.li2': 'Use apps like Notion, Google Calendar and Pomodoro',
    'blogs.productivity.content.li3': 'Rely on communities (Discord, WhatsApp, WomenTechmakers)',
    'blogs.productivity.content.li4': 'Prioritize sleep and self-care',
    'blogs.productivity.content.li5': 'Choose your battles: learn to say no',
    'blogs.productivity.content.li6': 'Remember why you started: your purpose is your engine',

    'blogs.zerohunger.date': 'January 8',
    'blogs.zerohunger.tag': 'Social Impact',
    'blogs.zerohunger.title': 'ZeroHunger: Dominican technology to combat food waste',
    'blogs.zerohunger.content.p1': 'ZeroHunger was an incredible challenge: creating an app to manage food donations and connect those who want to help. I learned about databases, APIs, user experience design and above all about the social impact that technology can have on our island.',
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
