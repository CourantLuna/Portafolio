// src/components/Home.tsx

import {
  FaLaptopCode,
  FaCogs,
  FaChalkboardTeacher,
  FaRobot,
  
  FaPaintBrush,
  FaDatabase,
} from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";

// Puedes usar logos locales en /assets o urls de logos de clientes/empresas reales
const clients = [
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-minerd-4b4uXag4qedx5ioOVlk3xhjK8Gz2P5.png", alt: "MINERD" },
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/Dida%20Logo-EFtNhHmOa5h1OKQto60erQskPFiOhL.png", alt: "DIDA" },
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-lamschool-qo8l6nS5cFK3B06XxqQ0YVhmbeiU7T.png", alt: "LAM School" },
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-hanesinc-7wCVZVMiCIJwvHurDI2yv2JvsgHlV4.png", alt: "Hanesbrands" },
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-asfales-HxyNAE8SvnfyLlrF42WaBW4ShGEXIJ.png", 
    alt: "ASFALES" },
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-beiconic-hWmDJ1odIfqqhK1boDiFOzNiO41fWh.png", 
    alt: "BeIconic" },
 { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-coritosviajando-46OFM05bqT2HmaZmCan2Ng3AgzMda3.png", 
    alt: "CoritosViajando" },
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-cre8arch-SonWngfqXFxLydusQilIFN923lBPGf.png", 
    alt: "Cre8Arch" },
    {src:"https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-genesismarcapersonal-yRS3PJWhx1KUzEtPbuYpyYhx0dVt8a.png", 
      alt:"genesis marca personal"},
  {src:"https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-pacatrack-fVDTbexuUk7aiyoFt1QpbhxkcuL2u6.png", alt:"PacaTrack"},
  { src:"https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-plastidel-WyEQlW1B8XcLtcpNF6e1iqiIVadJmD.png", alt:"Plastidel" },
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-robotdo-MywisZeaRNbKeXtYQCgcTjLl0GT7pW.png",alt: "RobotDo" },
  {src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-trebollrd-9Z61eoJml8j3i35D2xyh97DW42gEJV.png", alt: "Treboll RD" },
  { src: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-zerohunger-uDBUo2Txebixek1gCfAW0wy6cs7zMc.png", alt: "ZeroHunger" },
];

const skills = [
  {
    icon: <FaLaptopCode size={32} className="text-violet-400 dark:text-violet-300" />,
    titleKey: "home.skills.fullstack.title",
    descKey: "home.skills.fullstack.desc",
    bg: "bg-violet-50 dark:bg-violet-900/20 dark:border dark:border-violet-500/30 dark:shadow-lg dark:shadow-violet-500/20",
  },
  {
    icon: <FaCogs size={32} className="text-yellow-400 dark:text-yellow-300" />,
    titleKey: "home.skills.automation.title", 
    descKey: "home.skills.automation.desc",
    bg: "bg-yellow-50 dark:bg-yellow-900/20 dark:border dark:border-yellow-500/30 dark:shadow-lg dark:shadow-yellow-500/20",
  },
  {
    icon: <FaChalkboardTeacher size={32} className="text-blue-400 dark:text-blue-300" />,
    titleKey: "home.skills.teaching.title",
    descKey: "home.skills.teaching.desc", 
    bg: "bg-blue-50 dark:bg-blue-900/20 dark:border dark:border-blue-500/30 dark:shadow-lg dark:shadow-blue-500/20",
  },
  {
    icon: <FaRobot size={32} className="text-pink-400 dark:text-pink-300" />,
    titleKey: "home.skills.robotics.title",
    descKey: "home.skills.robotics.desc",
    bg: "bg-pink-50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20",
  },
  {
    icon: <FaPaintBrush size={32} className="text-pink-400 dark:text-pink-300" />,
    titleKey: "home.skills.design.title", 
    descKey: "home.skills.design.desc",
    bg: "bg-pink-100 dark:bg-pink-900/25 dark:border dark:border-pink-500/40 dark:shadow-lg dark:shadow-pink-500/25",
  },
  {
    icon: <FaDatabase size={32} className="text-blue-400 dark:text-blue-300" />,
    titleKey: "home.skills.database.title",
    descKey: "home.skills.database.desc", 
    bg: "bg-blue-100 dark:bg-blue-900/25 dark:border dark:border-blue-500/40 dark:shadow-lg dark:shadow-blue-500/25",
  },
];

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full flex flex-col gap-10 dark:text-gray-100">
      {/* ABOUT ME */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-4">
          {t('home.about.title')}
          <span className="w-[200px] border-t-3 border-pink-400 dark:border-pink-300" />
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-2">
          {t('home.about.paragraph1')}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          {t('home.about.paragraph2')}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {t('home.about.paragraph3')}
        </p>
      </section>
      {/* WHAT I DO */}
      <section>
        <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-gray-100 mb-5">{t('home.whatIDo')}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.titleKey}
              className={`rounded-xl p-4 flex items-start gap-3 ${skill.bg} shadow dark:backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:hover:shadow-2xl`}
            >
              {skill.icon}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-1">{t(skill.titleKey)}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{t(skill.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CLIENTS */}
     <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{t('home.clients')}</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 dark:border dark:border-pink-500/20 dark:shadow-lg dark:shadow-pink-500/10 p-6 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="flex animate-slide-infinite">
            {/* Primera copia de las imágenes */}
            {clients.map((c) => (
              <div key={c.alt} className="relative mx-8 flex-shrink-0 flex items-center justify-center">
                {/* Efecto de luz circular rosada */}
                <div className="absolute inset-0 w-32 h-20 flex items-center justify-start">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-400/20 dark:from-pink-400/30 dark:to-pink-300/30 blur-xl animate-pulse"></div>
                </div>
                {/* Logo */}
                <img
                  src={c.src}
                  alt={c.alt}
                  className="relative z-10 h-20 object-contain dark:brightness-90 dark:contrast-110 transition-all duration-300 hover:scale-110"
                  style={{ maxWidth: 120 }}
                />
              </div>
            ))}
            {/* Segunda copia para el efecto infinito */}
            {clients.map((c) => (
              <div key={`${c.alt}-duplicate`} className="relative mx-8 flex-shrink-0 flex items-center justify-center">
                {/* Efecto de luz circular rosada */}
                <div className="absolute inset-0 w-32 h-20 flex items-center justify-start">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-400/20 dark:from-pink-400/30 dark:to-pink-300/30 blur-xl animate-pulse"></div>
                </div>
                {/* Logo */}
                <img
                  src={c.src}
                  alt={c.alt}
                  className="relative z-10 h-20 object-contain dark:brightness-90 dark:contrast-110 transition-all duration-300 hover:scale-110"
                  style={{ maxWidth: 120 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="text-center text-gray-400 dark:text-gray-500 text-xs pt-8">
        {t('footer.copyright')}
      </footer>
    </div>
  );
}
