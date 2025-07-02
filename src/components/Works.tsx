// src/components/Works.tsx
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

// Puedes cambiar las imágenes por reales, o usar placeholders temporales
const works = [
  {
  title: "Plataforma Didacore (DIDA)",
  type: "Web App",
  tags: ["Full Stack", "Frontend", "Backend", "Angular", ".NET Core", "Oracle", "Bootstrap", "Empresa"],
  img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/Dida%20Logo-EFtNhHmOa5h1OKQto60erQskPFiOhL.png",
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

export default function Works() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState("Todos");

  const categories = [
    t('works.filter.all'),
    "Branding", 
    "Web App", 
    "Logo", 
    t('works.filter.prototyping'), 
    "Frontend", 
    t('works.filter.identity')
  ];

  const filtered = selected === t('works.filter.all')
    ? works
    : works.filter(work => work.tags.includes(selected) || work.type === selected);

  return (
    <div className="w-full flex flex-col gap-8 dark:text-gray-100">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-4">
          {t('works.title')}
          <span className="w-[200px] border-t-3 border-pink-400 dark:border-pink-300" />
        </h2>
      </section>
      {/* Filtros */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 border hover:scale-105 ${
              selected === cat
                ? "bg-gradient-to-r from-pink-500 to-pink-400 dark:from-pink-600 dark:to-pink-500 text-white shadow-lg dark:shadow-pink-500/30"
                : "bg-white dark:bg-gray-800/50 dark:border-pink-500/20 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 border-gray-100 dark:hover:shadow-lg dark:hover:shadow-pink-500/20"
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
            className="rounded-xl bg-pink-50/50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20 shadow p-4 flex flex-col hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <div className="w-full aspect-video bg-gray-100 dark:bg-white dark:border dark:border-pink-500/20 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img
                src={work.img}
                alt={work.title}
                className="object-contain h-full dark:brightness-90 dark:contrast-110"
                onError={e => (e.currentTarget.src = "https://placehold.co/400x220?text=Sin+imagen")}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{work.tags.join(" · ")}</div>
            <div className="font-bold text-lg text-gray-800 dark:text-gray-100">{work.title}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">{work.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
