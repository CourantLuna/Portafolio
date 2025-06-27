// src/components/Home.tsx

import {
  FaLaptopCode,
  FaCogs,
  FaChalkboardTeacher,
  FaRobot,
  
  FaPaintBrush,
  FaDatabase,
} from "react-icons/fa";

// Puedes usar logos locales en /assets o urls de logos de clientes/empresas reales
const clients = [
  { src: "/assets/logo-minerd.png", alt: "MINERD" },
  { src: "/assets/logo-dida.png", alt: "DIDA" },
  { src: "/assets/logo-lamschool.png", alt: "LAM School" },
  { src: "/assets/logo-hanes.png", alt: "Hanesbrands" },
  { src: "/assets/logo-itla.png", alt: "ITLA" },
];

const skills = [
  {
    icon: <FaLaptopCode size={32} className="text-violet-400" />,
    title: "Desarrollo Fullstack",
    desc: "React, Next.js, Node.js, C#, .NET, Angular, TypeScript y bases de datos SQL/NoSQL.",
    bg: "bg-violet-50",
  },
  {
    icon: <FaCogs size={32} className="text-yellow-400" />,
    title: "Automatización y 3D",
    desc: "Automatización industrial, microcontroladores, diseño e impresión 3D.",
    bg: "bg-yellow-50",
  },
  {
    icon: <FaChalkboardTeacher size={32} className="text-blue-400" />,
    title: "Docencia STEAM",
    desc: "Capacitación de docentes y estudiantes en robótica, tecnología y pensamiento computacional.",
    bg: "bg-blue-50",
  },
  {
    icon: <FaRobot size={32} className="text-pink-400" />,
    title: "Robótica Educativa",
    desc: "Implementación de kits LEGO, Arduino y desarrollo de currículos STEAM.",
    bg: "bg-pink-50",
  },
  {
    icon: <FaPaintBrush size={32} className="text-pink-400" />,
    title: "UI/UX Design",
    desc: "Prototipado con Figma, heurísticas de usabilidad y accesibilidad.",
    bg: "bg-pink-100",
  },
  {
    icon: <FaDatabase size={32} className="text-blue-400" />,
    title: "Bases de Datos",
    desc: "Diseño y gestión de bases de datos relacionales y no relacionales.",
    bg: "bg-blue-100",
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* ABOUT ME */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-4">
          About Me
          <span className="w-[200px] border-t-3 border-pink-400" />
        </h2>
        <p className="text-gray-800 mb-2">
          Soy Desarrolladora Full Stack y estudiante de Ingeniería en Software y Mecatrónica en INTEC (RD). Apasionada por la tecnología, la automatización y la docencia STEAM. 
        </p>
        <p className="text-gray-700 mb-2">
          Experiencia en C#, JavaScript, Python, React, Next.js, Angular, .NET, diseño electrónico, robótica educativa, impresión 3D y gestión de proyectos bajo metodologías ágiles. 
        </p>
        <p className="text-gray-700">
          Actualmente contribuyo en el sector educativo y privado, desarrollando soluciones tecnológicas para empresas, instituciones y proyectos personales innovadores.
        </p>
      </section>
      {/* WHAT I DO */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-5">What I do!</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`rounded-xl p-4 flex items-start gap-3 ${skill.bg} shadow`}
            >
              {skill.icon}
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{skill.title}</h3>
                <p className="text-sm text-gray-700">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CLIENTS */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Client!</h2>
        <div className="flex flex-wrap gap-6 justify-center items-center bg-gray-50 p-6 rounded-xl">
          {clients.map((c) => (
            <img
              key={c.alt}
              src={c.src}
              alt={c.alt}
              className="h-10 object-contain"
              style={{ maxWidth: 120 }}
            />
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-xs pt-8">
        © {new Date().getFullYear()} Heydi García | Portafolio Personal
      </footer>
    </div>
  );
}
