// src/components/Resume.tsx
import { FaGraduationCap, FaBriefcase, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";

export default function Resume() {
  const { t } = useLanguage();
  
  // Función para traducir fechas que contienen "Actualidad"
  const translateDate = (date: string): string => {
    return date.replace(/Actualidad/g, t('resume.date.present'));
  };
  
  const education = [
    {
      date: "2022 - Actualidad",
      titleKey: "resume.education.software",
      placeKey: "resume.education.software.place",
      bg: "bg-pink-50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20",
    },
    {
      date: "2022",
      titleKey: "resume.education.mechatronics",
      placeKey: "resume.education.mechatronics.place",
      bg: "bg-pink-50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20",
    },
    {
      date: "2022",
      titleKey: "resume.education.auditor",
      placeKey: "resume.education.auditor.place",
      bg: "bg-pink-50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20",
    },
  ];

  const experience = [
    {
      date: "2024 - Actualidad",
      titleKey: "resume.experience.fullstack",
      placeKey: "resume.experience.fullstack.place",
      bg: "bg-blue-50 dark:bg-blue-900/20 dark:border dark:border-blue-500/30 dark:shadow-lg dark:shadow-blue-500/20",
    },
    {
      date: "2022 - 2024",
      titleKey: "resume.experience.frontend",
      placeKey: "resume.experience.frontend.place",
      bg: "bg-blue-50 dark:bg-blue-900/20 dark:border dark:border-blue-500/30 dark:shadow-lg dark:shadow-blue-500/20",
    },
    {
      date: "2021 - 2023",
      titleKey: "resume.experience.teacher",
      placeKey: "resume.experience.teacher.place",
      bg: "bg-blue-50 dark:bg-blue-900/20 dark:border dark:border-blue-500/30 dark:shadow-lg dark:shadow-blue-500/20",
    },
  ];

  const skills = [
    { labelKey: "resume.skills.web", value: 90, color: "bg-pink-400 dark:bg-pink-500" },
    { labelKey: "resume.skills.mobile", value: 50, color: "bg-violet-400 dark:bg-violet-500" },
    { labelKey: "resume.skills.automation", value: 85, color: "bg-blue-400 dark:bg-blue-500" },
    { labelKey: "resume.skills.uiux", value: 80, color: "bg-pink-300 dark:bg-pink-400" },
    { labelKey: "resume.skills.teaching", value: 95, color: "bg-blue-300 dark:bg-blue-400" },
  ];

  const knowledges = [
    "JavaScript", "TypeScript", "React", "Next.js", "Angular", ".NET", "C#", "Node.js",
    "MongoDB", "SQL Server", "Impresión 3D", "Python", "Diseño 3D", "Automatización",
    "Docencia STEAM", "Prototipado UI", "Agile", "Figma"
  ];
  
  return (
    <div className="w-full flex flex-col gap-10 dark:text-gray-100">
      {/* EDUCACIÓN */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-4">
          <FaGraduationCap className="text-pink-500 dark:text-pink-400" />
          {t('resume.education.title')}
        </h2>
        <div className="flex items-center gap-3 mb-5">
          <a
            href="https://drive.google.com/drive/folders/1lVSorwwVwxJ7Nkrn4U95g7dYAJVXnzH-?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-pink-400 to-pink-500 dark:from-pink-500 dark:to-pink-600 text-white text-xs font-semibold rounded-full shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-500/30 hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
          >
            <FaCertificate className="text-[10px]" />
            {t('resume.certificates.verified')}
            <FaExternalLinkAlt className="text-[8px] opacity-70" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 dark:bg-yellow-300 rounded-full animate-ping"></div>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {education.map((ed, i) => (
            <div key={i} className={`rounded-xl p-4 ${ed.bg} shadow-sm dark:backdrop-blur-sm h-32 flex flex-col items-start gap-1 transition-all duration-300 hover:scale-105 dark:hover:shadow-2xl`}>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{translateDate(ed.date)}</div>
              <div className="font-bold text-lg text-gray-800 dark:text-gray-100">{t(ed.titleKey)}</div>
              <div className="text-gray-700 dark:text-gray-300">{t(ed.placeKey)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-4">
          <FaBriefcase className="text-blue-500 dark:text-blue-400" />
          {t('resume.experience.title')}
        </h2>
        <div className="flex flex-col gap-4">
          {experience.map((ex, i) => (
            <div key={i} className={`rounded-xl p-4 ${ex.bg} shadow-sm dark:backdrop-blur-sm h-32 flex flex-col items-start gap-1 transition-all duration-300 hover:scale-105 dark:hover:shadow-2xl`}>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{translateDate(ex.date)}</div>
              <div className="font-bold text-lg text-gray-800 dark:text-gray-100">{t(ex.titleKey)}</div>
              <div className="text-gray-700 dark:text-gray-300">{t(ex.placeKey)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HABILIDADES */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-4">
          <FaCertificate className="text-violet-500 dark:text-violet-400" />
          {t('resume.skills.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">{t('resume.skills.skillsLabel')}</h3>
            <div className="flex flex-col gap-4">
              {skills.map((sk, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{t(sk.labelKey)}</span>
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">{t('resume.skills.knowledgeLabel')}</h3>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 dark:text-gray-500 text-xs pt-8">
        © {new Date().getFullYear()} Heydi García | Portafolio Personal
      </footer>
    </div>
  );
}
