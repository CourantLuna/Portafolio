// src/components/Resume.tsx
import { FaGraduationCap, FaBriefcase, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const education = [
  {
    date: "2022 - Actualidad",
    title: "Ingeniería en Software",
    place: "Instituto Tecnológico de Santo Domingo (INTEC), República Dominicana",
    bg: "bg-pink-50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20",
  },
  {
    date: "2022",
    title: "Tecnología en Mecatrónica",
    place: "Instituto Tecnológico de las Américas (ITLA), Santo Domingo",
    bg: "bg-pink-50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20",
  },
  {
    date: "2022",
    title: "Auditor ISO 9001:2015",
    place: "AENOR, Santo Domingo",
    bg: "bg-pink-50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20",
  },
];

const experience = [
  {
    date: "2024 - Actualidad",
    title: "Desarrolladora Full Stack (Angular/.NET)",
    place: "Didacore, Santo Domingo",
    bg: "bg-blue-50 dark:bg-blue-900/20 dark:border dark:border-blue-500/30 dark:shadow-lg dark:shadow-blue-500/20",
  },
  {
    date: "2022 - 2024",
    title: "Desarrolladora Frontend (React/Next.js)",
    place: "Proyectos personales y freelance",
    bg: "bg-blue-50 dark:bg-blue-900/20 dark:border dark:border-blue-500/30 dark:shadow-lg dark:shadow-blue-500/20",
  },
  {
    date: "2021 - 2023",
    title: "Docente de Robótica Educativa",
    place: "LAM School y MINERD",
    bg: "bg-blue-50 dark:bg-blue-900/20 dark:border dark:border-blue-500/30 dark:shadow-lg dark:shadow-blue-500/20",
  },
];

const skills = [
  { label: "Desarrollo Web", value: 90, color: "bg-pink-400 dark:bg-pink-500" },
  { label: "Apps móviles", value: 50, color: "bg-violet-400 dark:bg-violet-500" },
  { label: "Automatización / 3D", value: 85, color: "bg-blue-400 dark:bg-blue-500" },
  { label: "UI/UX y prototipado", value: 80, color: "bg-pink-300 dark:bg-pink-400" },
  { label: "Enseñanza STEAM", value: 95, color: "bg-blue-300 dark:bg-blue-400" },
];

const knowledges = [
  "JavaScript", "TypeScript", "React", "Next.js", "Angular", ".NET", "C#", "Node.js",
  "MongoDB", "SQL Server", "Impresión 3D", "Python", "Diseño 3D", "Automatización",
  "Docencia STEAM", "Prototipado UI", "Agile", "Figma"
];

export default function Resume() {
  return (
    <div className="w-full flex flex-col gap-10 dark:text-gray-100">
      {/* Título principal */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-4">
          Resume
          <span className="w-[200px] border-t-3 border-pink-400 dark:border-pink-300" />
        </h2>
      </section>
      {/* Educación y experiencia */}
      <section className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Educación */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
              <FaGraduationCap className="text-pink-400 dark:text-pink-300" />
              Educación
            </h3>
            <a
              href="https://drive.google.com/drive/folders/1lVSorwwVwxJ7Nkrn4U95g7dYAJVXnzH-?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-pink-400 to-pink-500 dark:from-pink-500 dark:to-pink-600 text-white text-xs font-semibold rounded-full shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-500/30 hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
            >
              <FaCertificate className="text-[10px]" />
              Certificados Verificados
              <FaExternalLinkAlt className="text-[8px] opacity-70" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 dark:bg-yellow-300 rounded-full animate-ping"></div>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            {education.map((ed, i) => (
              <div key={i} className={`rounded-xl p-4 ${ed.bg} shadow-sm dark:backdrop-blur-sm h-32 flex flex-col items-start gap-1 transition-all duration-300 hover:scale-105 dark:hover:shadow-2xl`}>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{ed.date}</div>
                <div className="font-bold text-lg text-gray-800 dark:text-gray-100">{ed.title}</div>
                <div className="text-gray-700 dark:text-gray-300">{ed.place}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Experiencia */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
            <FaBriefcase className="text-pink-400 dark:text-pink-300" />
            Experiencia
          </h3>
          <div className="flex flex-col gap-4">
            {experience.map((ex, i) => (
              <div key={i} className={`rounded-xl p-4 ${ex.bg} shadow-sm dark:backdrop-blur-sm h-32 flex flex-col items-start gap-1 transition-all duration-300 hover:scale-105 dark:hover:shadow-2xl`}>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{ex.date}</div>
                <div className="font-bold text-lg text-gray-800 dark:text-gray-100">{ex.title}</div>
                <div className="text-gray-700 dark:text-gray-300">{ex.place}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills y Conocimientos */}
      <section className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Skills */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">Habilidades</h3>
          <div className="flex flex-col gap-4">
            {skills.map((sk, i) => (
              <div key={i}>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{sk.label}</span>
                  <span className="font-bold text-pink-400 dark:text-pink-300">{sk.value}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 mt-1">
                  <div
                    className={`h-2 rounded-full ${sk.color} transition-all dark:shadow-sm`}
                    style={{ width: `${sk.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Conocimientos */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">Conocimientos</h3>
          <div className="flex flex-wrap gap-3">
            {knowledges.map((k, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800/50 dark:border dark:border-pink-500/20 dark:text-gray-200 text-gray-700 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:hover:shadow-lg dark:hover:shadow-pink-500/20"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center text-gray-400 dark:text-gray-500 text-xs pt-8">
        © {new Date().getFullYear()} Heydi García | Portafolio Personal
      </footer>
    </div>
  );
}
