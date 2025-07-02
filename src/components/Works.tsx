// src/components/Works.tsx
import { useState } from "react";

// Puedes cambiar las imágenes por reales, o usar placeholders temporales
const works = [
  {
  title: "Plataforma Didacore (DIDA)",
  type: "Web App",
  tags: ["Full Stack", "Frontend", "Backend", "Angular", ".NET Core", "Oracle", "Bootstrap", "Empresa"],
  img: "https://wfcc6kelz9zexsot.public.blob.vercel-storage.com/Dida%20Logo-Ey7zHmbrEm8DnIda5mQ03EGrOltw9C.png",
desc: "Desarrollo full stack para plataforma interna de DIDA, con enfoque en frontend (Angular, TypeScript, Bootstrap) e integración de APIs, .NET Core y Oracle.",
},
  {
    title: "Asfales",
    type: "Web App",
    tags: ["Frontend", "Prototipado", "UX/UI"],
    img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-asfales-HxyNAE8SvnfyLlrF42WaBW4ShGEXIJ.png",
    desc: "Sistema para gestión de viajes y turismo. Prototipado, diseño de interfaz y frontend.",
  },
  {
    title: "Coritos Viajando",
    type: "Branding",
    tags: ["Logo", "Branding"],
    img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-coritosviajando-46OFM05bqT2HmaZmCan2Ng3AgzMda3.png",
    desc: "Identidad visual y logo para Coritos Viajando.",
  },
  {
    title: "Marca personal Genesis García",
    type: "Branding",
    tags: ["Logo", "Branding"],
    img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-genesismarcapersonal-yRS3PJWhx1KUzEtPbuYpyYhx0dVt8a.png",
    desc: "Logo y branding para arquitecta y diseñadora Genesis García.",
  },
  {
    title: "Be Iconic",
    type: "Branding",
    tags: ["Logo", "Tienda", "Branding"],
    img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-beiconic-hWmDJ1odIfqqhK1boDiFOzNiO41fWh.png",
    desc: "Logo e identidad para tienda de ropa Be Iconic.",
  },
  {
    title: "PacaTrak",
    type: "Web App",
    tags: ["Frontend", "Prototipado"],
    img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-pacatrack-fVDTbexuUk7aiyoFt1QpbhxkcuL2u6.png",
    desc: "Frontend, prototipado y UI para sistema de gestión de pacas.",
  },
  {
    title: "Cre8arch",
    type: "Branding",
    tags: ["Logo", "Identidad", "Tecnología"],
    img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-cre8arch-SonWngfqXFxLydusQilIFN923lBPGf.png",
    desc: "Identidad visual y logo para empresa tecnológica Cre8arch.",
  },
  {
    title: "ZeroHunger App",
    type: "Web App",
    tags: ["Frontend", "Prototipado"],
    img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-zerohunger-uDBUo2Txebixek1gCfAW0wy6cs7zMc.png",
    desc: "Prototipado y frontend para app de gestión de donaciones de alimentos.",
  },
  {
    title: "Marca personal Heydi",
    type: "Branding",
    tags: ["Logo", "Branding"],
    img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-heydimarca-mdqK7Fncef0ZJnTkczCZ876OhmfdcW.png",
    desc: "Logo y branding de mi propia marca personal.",
  },
];

const categories = ["Todos", "Branding", "Web App", "Logo", "Prototipado", "Frontend", "Identidad"];

export default function Works() {
  const [selected, setSelected] = useState("Todos");

  const filtered = selected === "Todos"
    ? works
    : works.filter(work => work.tags.includes(selected) || work.type === selected);

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-4">
          Portafolio
          <span className="flex-1 border-t border-pink-400 ml-3" />
        </h2>
      </section>
      {/* Filtros */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`font-semibold px-4 py-2 rounded-full transition border ${
              selected === cat
                ? "bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow"
                : "bg-white text-gray-700 hover:bg-pink-50 border-gray-100"
            }`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Grid de proyectos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((work, i) => (
          <div
            key={i}
            className="rounded-xl bg-pink-50/50 shadow p-4 flex flex-col hover:shadow-lg transition "
          >
            <div className="w-full aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              {/* Cambia por <img src={work.img} ... /> si tienes imagen */}
              <img
                src={work.img}
                alt={work.title}
                className="object-contain h-full"
                onError={e => (e.currentTarget.src = "https://placehold.co/400x220?text=Sin+imagen")}
              />
            </div>
            <div className="text-xs text-gray-500 mb-1">{work.tags.join(" · ")}</div>
            <div className="font-bold text-lg text-gray-800">{work.title}</div>
            <div className="text-gray-600 text-sm mb-1">{work.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
