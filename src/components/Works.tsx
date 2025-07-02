// src/components/Works.tsx
import { useState, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";

export default function Works() {
  const { t, language } = useLanguage();
  const [selected, setSelected] = useState(t('works.filter.all'));

  // Función para traducir tags individuales
  const translateTag = (tag: string): string => {
    const tagTranslations: { [key: string]: { es: string; en: string } } = {
      'Prototipado': { es: 'Prototipado', en: 'Prototyping' },
      'Prototyping': { es: 'Prototipado', en: 'Prototyping' },
      'Identidad': { es: 'Identidad', en: 'Identity' },
      'Identity': { es: 'Identidad', en: 'Identity' },
      'Frontend': { es: 'Frontend', en: 'Frontend' },
      'Backend': { es: 'Backend', en: 'Backend' },
      'Full Stack': { es: 'Full Stack', en: 'Full Stack' },
      'Logo': { es: 'Logo', en: 'Logo' },
      'Branding': { es: 'Branding', en: 'Branding' },
      'UX/UI': { es: 'UX/UI', en: 'UX/UI' },
      'Angular': { es: 'Angular', en: 'Angular' },
      '.NET Core': { es: '.NET Core', en: '.NET Core' },
      'Oracle': { es: 'Oracle', en: 'Oracle' },
      'Bootstrap': { es: 'Bootstrap', en: 'Bootstrap' },
      'Empresa': { es: 'Empresa', en: 'Enterprise' },
      'Tienda': { es: 'Tienda', en: 'Store' },
      'Tecnología': { es: 'Tecnología', en: 'Technology' }
    };

    const translation = tagTranslations[tag];
    if (translation) {
      return language === 'es' ? translation.es : translation.en;
    }
    return tag; // Si no hay traducción, devolver el tag original
  };

  // Actualizar solo los filtros traducibles cuando cambie el idioma
  useEffect(() => {
    // Comprobar si el filtro actual es uno de los traducibles y actualizarlo
    const allValues = ['All', 'Todos'];
    const prototypingValues = ['Prototyping', 'Prototipado'];
    const identityValues = ['Identity', 'Identidad'];
    
    if (allValues.includes(selected) || selected === t('works.filter.all')) {
      setSelected(t('works.filter.all'));
    } else if (prototypingValues.includes(selected) || selected === t('works.filter.prototyping')) {
      setSelected(t('works.filter.prototyping'));
    } else if (identityValues.includes(selected) || selected === t('works.filter.identity')) {
      setSelected(t('works.filter.identity'));
    }
    // Si no es traducible (como "Branding", "Web App", etc.), mantener el valor actual
  }, [language, t, selected]);

  // Puedes cambiar las imágenes por reales, o usar placeholders temporales
  const works = [
    {
      titleKey: "works.dida.title",
      descKey: "works.dida.desc",
      type: "Web App",
      tags: ["Full Stack", "Frontend", "Backend", "Angular", ".NET Core", "Oracle", "Bootstrap", "Empresa"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/Dida%20Logo-EFtNhHmOa5h1OKQto60erQskPFiOhL.png",
    },
    {
      titleKey: "works.asfales.title",
      descKey: "works.asfales.desc",
      type: "Web App",
      tags: ["Frontend", "Prototipado", "UX/UI"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-asfales-HxyNAE8SvnfyLlrF42WaBW4ShGEXIJ.png",
    },
    {
      titleKey: "works.coritos.title",
      descKey: "works.coritos.desc",
      type: "Branding",
      tags: ["Logo", "Branding"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-coritosviajando-46OFM05bqT2HmaZmCan2Ng3AgzMda3.png",
    },
    {
      titleKey: "works.genesis.title",
      descKey: "works.genesis.desc",
      type: "Branding",
      tags: ["Logo", "Branding"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-genesismarcapersonal-yRS3PJWhx1KUzEtPbuYpyYhx0dVt8a.png",
    },
    {
      titleKey: "works.beiconic.title",
      descKey: "works.beiconic.desc",
      type: "Branding",
      tags: ["Logo", "Tienda", "Branding"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-beiconic-hWmDJ1odIfqqhK1boDiFOzNiO41fWh.png",
    },
    {
      titleKey: "works.pacatrack.title",
      descKey: "works.pacatrack.desc",
      type: "Web App",
      tags: ["Frontend", "Prototipado"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-pacatrack-fVDTbexuUk7aiyoFt1QpbhxkcuL2u6.png",
    },
    {
      titleKey: "works.cre8arch.title",
      descKey: "works.cre8arch.desc",
      type: "Branding",
      tags: ["Logo", "Identidad", "Tecnología"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-cre8arch-SonWngfqXFxLydusQilIFN923lBPGf.png",
    },
    {
      titleKey: "works.zerohunger.title",
      descKey: "works.zerohunger.desc",
      type: "Web App",
      tags: ["Frontend", "Prototipado"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-zerohunger-uDBUo2Txebixek1gCfAW0wy6cs7zMc.png",
    },
    {
      titleKey: "works.heydi.title",
      descKey: "works.heydi.desc",
      type: "Branding",
      tags: ["Logo", "Branding"],
      img: "https://5dtcgximnyumpv2u.public.blob.vercel-storage.com/logo-heydimarca-mdqK7Fncef0ZJnTkczCZ876OhmfdcW.png",
    },
  ];

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
    : works.filter(work => {
        // Para filtros traducibles, verificar ambas versiones (español e inglés)
        if (selected === t('works.filter.prototyping')) {
          return work.tags.includes('Prototipado') || work.tags.includes('Prototyping');
        }
        if (selected === t('works.filter.identity')) {
          return work.tags.includes('Identidad') || work.tags.includes('Identity');
        }
        // Para filtros no traducibles, usar la lógica normal
        return work.tags.includes(selected) || work.type === selected;
      });

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
                alt={t(work.titleKey)}
                className="object-contain h-full dark:brightness-90 dark:contrast-110"
                onError={e => (e.currentTarget.src = "https://placehold.co/400x220?text=Sin+imagen")}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              {work.tags.map(tag => translateTag(tag)).join(" · ")}
            </div>
            <div className="font-bold text-lg text-gray-800 dark:text-gray-100">{t(work.titleKey)}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">{t(work.descKey)}</div>
          </div>
        ))}
      </div>
    </div>
  );

}
