import React from "react";

// Imagen de perfil (usa la tuya, estática o desde assets)
const avatar = "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/Imagen%20Perfil%20Heydi-wdvTY9giOH5eQ2lRdG9M4ct0tOMrB8.png";

// Redes sociales
const socialLinks = [
  {
    icon: <i className="fab fa-facebook-f" />,
    url: "https://facebook.com/",
    color: "hover:bg-blue-100 text-blue-600",
  },
  {
    icon: <i className="fab fa-twitter" />,
    url: "https://twitter.com/",
    color: "hover:bg-blue-50 text-sky-500",
  },
  {
    icon: <i className="fab fa-dribbble" />,
    url: "https://dribbble.com/",
    color: "hover:bg-pink-50 text-pink-400",
  },
  {
    icon: <i className="fab fa-linkedin-in" />,
    url: "https://linkedin.com/",
    color: "hover:bg-blue-100 text-blue-800",
  },
];

export default function ProfileSidebar() {
  return (
    <aside className="mt-16 w-full mx-auto bg-white lg:rounded-3xl shadow-2xl px-6 py-8 flex flex-col items-center relative z-10">
      {/* Avatar */}
      <div className="-mt-35 mb-3">
        <img
          src={avatar}
          alt="Foto de Heydi García"
          className="w-70 h-70 object-cover rounded-2xl border-white shadow-lg"
        />
      </div>
      {/* Nombre y Subtítulo */}
      <h2 className="text-2xl font-bold text-gray-900 mt-2">Heydi García</h2>
      <p className="text-gray-500 mb-5 text-sm">Desarrolladora Full Stack</p>
      {/* Redes sociales */}
      <div className="flex gap-3 mb-6">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 flex items-center justify-center bg-gray-100 rounded-md shadow transition ${s.color}`}
          >
            {s.icon}
          </a>
        ))}
      </div>
      {/* Información de contacto */}
      <div className="bg-gray-50 rounded-xl w-full py-4 px-5 mb-6 shadow flex flex-col gap-3">
        <InfoRow
          icon="fa-phone-alt"
          label="Teléfono"
          value="+1 829 512 4461"
          color="text-pink-400 bg-pink-100"
        />
        <InfoRow
          icon="fa-map-marker-alt"
          label="Ubicación"
          value="Santo Domingo, RD"
          color="text-sky-400 bg-sky-100"
        />
        <InfoRow
          icon="fa-envelope"
          label="Correo"
          value="heydi0811@gmail.com"
          color="text-pink-400 bg-pink-100"
        />
        <InfoRow
          icon="fa-birthday-cake"
          label="Cumpleaños"
          value="11 de agosto de 2001"
          color="text-violet-400 bg-violet-100"
        />
      </div>
      {/* Botón CV */}
      <a
        href="/cvHG24 - ES Vcompressed.pdf"
        download
        className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-xl text-center font-semibold shadow-md hover:from-pink-600 hover:to-pink-500 transition"
      >
        Descargar CV
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
      <div className={`w-8 h-8 flex items-center justify-center rounded-md ${color}`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <div>
        <div className="font-bold text-xs text-gray-500">{label}</div>
        <div className="text-gray-700">{value}</div>
      </div>
    </div>
  );
}
