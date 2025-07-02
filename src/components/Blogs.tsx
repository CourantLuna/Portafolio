import { useState } from "react";
import BlogModal from "./BlogModal";
import { useLanguage } from "../hooks/useLanguage";

const blogs = [
	{
		date: "15 Julio",
		tag: "Tecnología",
		img: "/assets/blog-frontend.png",
		title: "¿Por qué elegí el Frontend como mi puerta al mundo tech?",
		content: (
			<>
				<p>
					Desde la universidad descubrí que crear interfaces era el espacio
					perfecto para unir creatividad y lógica. El frontend me permitió trabajar
					en proyectos reales, desde aplicaciones empresariales hasta plataformas
					sociales, y encontrar mi voz como mujer en tecnología en República
					Dominicana.
				</p>
				<p>
					Hoy disfruto inspirar a otras jóvenes a explorar el mundo del desarrollo
					web y mostrar que sí se puede tener impacto desde el Caribe.
				</p>
			</>
		),
	},
	{
		date: "4 Mayo",
		tag: "Educación STEAM",
		img: "/assets/blog-robotica.png",
		title: "5 Claves para inspirar a niñas dominicanas en Robótica y Programación",
		content: (
			<>
				<p>
					Compartir mi experiencia como facilitadora de robótica en LAM School y
					talleres en MINERD me hizo ver lo importante que es el ejemplo. La
					robótica es divertida, pero sobre todo, es una vía para que más chicas
					desarrollen confianza en sus habilidades.
				</p>
				<ul className="list-disc ml-4">
					<li>Demuestra resultados prácticos con proyectos reales</li>
					<li>Cuenta historias de mujeres en tech locales</li>
					<li>Haz del error parte del aprendizaje</li>
					<li>Usa plataformas como Arduino, LEGO, Scratch y Python</li>
					<li>Mantén siempre una mentalidad de curiosidad</li>
				</ul>
			</>
		),
	},
	{
		date: "12 Marzo",
		tag: "Proyectos",
		img: "/assets/blog-asfales.png",
		title: "Detrás de Asfales: cómo creé una app turística de cero a producto",
		content: (
			<>
				<p>
					Asfales nació como proyecto final, pero terminó siendo una app real de
					turismo y gestión de viajes. Aprendí a combinar Next.js, prototipado en
					Figma y trabajo en equipo para entregar una solución útil y profesional,
					conectando necesidades reales del sector turismo en RD.
				</p>
			</>
		),
	},
	{
		date: "22 Abril",
		tag: "Branding",
		img: "/assets/blog-branding.png",
		title: "Mi experiencia diseñando identidades para startups en RD",
		content: (
			<>
				<p>
					Diseñar marcas para empresas como Coritos Viajando, Be Iconic o Genesis
					García me permitió entender la importancia de una identidad coherente y
					memorable. Uso Figma, Canva y mucha observación de tendencias para
					crear logos y sistemas visuales que conectan con el público dominicano.
				</p>
			</>
		),
	},
	{
		date: "3 Febrero",
		tag: "Productividad",
		img: "/assets/blog-tipsdev.png",
		title: "6 trucos para ser developer, estudiante y voluntaria… ¡sin perder la cabeza!",
		content: (
			<>
				<ul className="list-disc ml-4">
					<li>Planifica tu semana, pero deja espacio para imprevistos</li>
					<li>Usa apps como Notion, Google Calendar y Pomodoro</li>
					<li>Apóyate en comunidades (Discord, WhatsApp, WomenTechmakers)</li>
					<li>Dale prioridad al sueño y al autocuidado</li>
					<li>Elige tus batallas: aprende a decir que no</li>
					<li>Recuerda por qué empezaste: tu propósito es tu motor</li>
				</ul>
			</>
		),
	},
	{
		date: "8 Enero",
		tag: "Social Impact",
		img: "/assets/blog-zerohunger.png",
		title: "ZeroHunger: tecnología dominicana para combatir el desperdicio de alimentos",
		content: (
			<>
				<p>
					ZeroHunger fue un reto increíble: crear una app para gestionar donaciones
					de alimentos y conectar a quienes quieren ayudar. Aprendí de bases de
					datos, APIs, diseño de experiencia de usuario y sobre todo del impacto
					social que puede tener la tecnología en nuestra isla.
				</p>
			</>
		),
	},
];

export default function Blogs() {
	const { t } = useLanguage();
	const [selected, setSelected] = useState<typeof blogs[0] | null>(null);

	return (
		<>
			<div className="w-full flex flex-col gap-8 dark:text-gray-100">
				{/* Header */}
				<section>
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-4">
						{t("blogs.title")}
						<span className="w-[200px] border-t-3 border-pink-400 dark:border-pink-300" />
					</h2>
				</section>
				{/* Grid de blogs */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{blogs.map((blog, i) => (
						<button
							key={i}
							className="rounded-xl bg-pink-50/50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20 shadow p-4 flex flex-col hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 text-left backdrop-blur-sm"
							onClick={() => setSelected(blog)}
						>
							<div className="w-full aspect-video bg-gray-100 dark:bg-gray-800/50 dark:border dark:border-pink-500/20 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
								<img
									src={blog.img}
									alt={blog.title}
									className="object-contain h-full dark:brightness-90 dark:contrast-110"
									onError={(e) =>
										(e.currentTarget.src =
											"https://placehold.co/400x220?text=Blog")
									}
								/>
							</div>
							<div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
								{blog.date} • {blog.tag}
							</div>
							<div className="font-semibold text-lg text-gray-800 dark:text-gray-100">
								{blog.title}
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Modal fuera del contenedor principal para que ocupe toda la pantalla */}
			<BlogModal
				open={!!selected}
				blog={selected}
				onClose={() => setSelected(null)}
			/>
		</>
	);
}
