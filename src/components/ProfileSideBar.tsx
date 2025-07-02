
// Imagen de perfil (usa la tuya, estática o desde assets)
const avatar = "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/Imagen%20Perfil%20Heydi-wdvTY9giOH5eQ2lRdG9M4ct0tOMrB8.png";

import { useLanguage } from "../hooks/useLanguage";

// Redes sociales
const socialLinks = [
   {
    icon: <i className="fab fa-github" />,
    url: "https://github.com/CourantLuna",
    color: "hover:bg-gray-200 dark:hover:bg-white-900/30 text-black dark:text-white-300",
  },
  {
    icon: <i className="fab fa-instagram" />,
    url: "https://www.instagram.com/courantluna/",
    color: "hover:bg-pink-100 dark:hover:bg-pink-900/30 text-pink-600 dark:text-pink-400",
  },
  {
    icon: <i className="fab fa-x-twitter" />,
    url: "https://x.com/CourantLuna8",
    color: "hover:bg-blue-50 dark:hover:bg-white-900/30 text-blue-500 dark:text-white-400",
  },
 
  {
    icon: <i className="fab fa-linkedin-in" />,
    url: "https://www.linkedin.com/in/heydi-garcia-sanchez-b06783144/",
    color: "hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  },
];

export default function ProfileSidebar() {
  const { t } = useLanguage();
  
  return (
    <aside className="mt-70 lg:mt-30 w-full mx-auto bg-white dark:bg-gray-900/90 dark:border dark:border-pink-500/20 dark:shadow-2xl dark:shadow-pink-500/10 lg:rounded-3xl shadow-2xl px-6 py-8 flex flex-col items-center relative z-10 gap-2 backdrop-blur-sm">
      {/* Efecto de luz de fondo en modo dark */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-pink-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl"></div>
      
      {/* Avatar */}
      <div className="-mt-35 mb-3 relative z-10">
        <img
          src={avatar}
          alt="Foto de Heydi García"
          className="w-70 h-70 object-cover rounded-2xl border-white dark:border-pink-300/20 shadow-lg dark:shadow-pink-500/20"
        />
        {/* Halo de luz alrededor del avatar en dark mode */}
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-pink-500/10 dark:to-purple-500/10 rounded-2xl -z-10 blur-xl"></div>
      </div>
      
      {/* Nombre y Subtítulo */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2 relative z-10">Heydi García</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm relative z-10">{t('profile.title')}</p>
      
      {/* Redes sociales */}
      <div className="flex gap-3 mb-6 relative z-10">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 dark:border dark:border-pink-500/20 rounded-md shadow dark:shadow-pink-500/10 transition hover:scale-110 ${s.color}`}
          >
            {s.icon}
          </a>
        ))}
      </div>
      
      {/* Información de contacto */}
      <div className="bg-gray-50 dark:bg-gray-800/50 dark:border dark:border-pink-500/20 dark:shadow-lg dark:shadow-pink-500/10 rounded-xl w-full py-4 px-5 mb-6 shadow flex flex-col gap-3 relative z-10 backdrop-blur-sm">
        <InfoRow
          icon="fa-phone-alt"
          label={t('profile.phone')}
          value="+1 829 512 4461"
          color="text-pink-400 dark:text-pink-300 bg-pink-100 dark:bg-pink-900/30 dark:border dark:border-pink-500/30"
        />
        <InfoRow
          icon="fa-map-marker-alt"
          label={t('profile.location')}
          value="Santo Domingo, RD"
          color="text-sky-400 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/30 dark:border dark:border-sky-500/30"
        />
        <InfoRow
          icon="fa-envelope"
          label={t('profile.email')}
          value="heydi0811@gmail.com"
          color="text-pink-400 dark:text-pink-300 bg-pink-100 dark:bg-pink-900/30 dark:border dark:border-pink-500/30"
        />
        <InfoRow
          icon="fa-birthday-cake"
          label={t('profile.birthday')}
          value="11 de agosto de 2001"
          color="text-violet-400 dark:text-violet-300 bg-violet-100 dark:bg-violet-900/30 dark:border dark:border-violet-500/30"
        />
      </div>
      
      {/* Botón CV */}
      <a
        href="https://drive.google.com/file/d/1Aogy4yU81Y-atkdHRft4iBYmmUkwYwRn/view?usp=sharing"
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-400 dark:from-pink-600 dark:to-pink-500 text-white rounded-xl text-center font-semibold shadow-md dark:shadow-pink-500/30 hover:from-pink-600 hover:to-pink-500 dark:hover:from-pink-700 dark:hover:to-pink-600 transition hover:scale-105 relative z-10"
      >
        {t('profile.downloadCV')}
      </a>
    </aside>
  );
}

// Row reutilizable para info de contacto
function InfoRow({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className={`w-8 h-8 flex items-center justify-center rounded-md ${color} shadow-sm`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <div>
        <div className="font-bold text-xs text-gray-500 dark:text-gray-400">{label}</div>
        <div className="text-gray-700 dark:text-gray-300">{value}</div>
      </div>
    </div>
  );
}
