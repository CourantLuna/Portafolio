import { useState } from "react";
import BlogModal from "./BlogModal";
import { useLanguage } from "../hooks/useLanguage";

export default function Blogs() {
	const { t } = useLanguage();
	const [selected, setSelected] = useState<string | null>(null);

	// Definir los blogs usando las keys de traducción
	const blogKeys = [
		{
			id: 'frontend',
			img: "/assets/blog-frontend.png",
		},
		{
			id: 'robotics',
			img: "/assets/blog-robotica.png",
		},
		{
			id: 'asfales',
			img: "/assets/blog-asfales.png",
		},
		{
			id: 'branding',
			img: "/assets/blog-branding.png",
		},
		{
			id: 'productivity',
			img: "/assets/blog-tipsdev.png",
		},
		{
			id: 'zerohunger',
			img: "/assets/blog-zerohunger.png",
		},
	];

	// Función para obtener el contenido de un blog
	const getBlogContent = (blogId: string) => {
		switch (blogId) {
			case 'frontend':
				return (
					<>
						<p>{t(`blogs.${blogId}.content.p1`)}</p>
						<p>{t(`blogs.${blogId}.content.p2`)}</p>
					</>
				);
			case 'robotics':
				return (
					<>
						<p>{t(`blogs.${blogId}.content.p1`)}</p>
						<ul className="list-disc ml-4">
							<li>{t(`blogs.${blogId}.content.li1`)}</li>
							<li>{t(`blogs.${blogId}.content.li2`)}</li>
							<li>{t(`blogs.${blogId}.content.li3`)}</li>
							<li>{t(`blogs.${blogId}.content.li4`)}</li>
							<li>{t(`blogs.${blogId}.content.li5`)}</li>
						</ul>
					</>
				);
			case 'asfales':
			case 'branding':
			case 'zerohunger':
				return <p>{t(`blogs.${blogId}.content.p1`)}</p>;
			case 'productivity':
				return (
					<ul className="list-disc ml-4">
						<li>{t(`blogs.${blogId}.content.li1`)}</li>
						<li>{t(`blogs.${blogId}.content.li2`)}</li>
						<li>{t(`blogs.${blogId}.content.li3`)}</li>
						<li>{t(`blogs.${blogId}.content.li4`)}</li>
						<li>{t(`blogs.${blogId}.content.li5`)}</li>
						<li>{t(`blogs.${blogId}.content.li6`)}</li>
					</ul>
				);
			default:
				return <p>Content not found</p>;
		}
	};

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
					{blogKeys.map((blog, i) => (
						<button
							key={i}
							className="rounded-xl bg-pink-50/50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20 shadow p-4 flex flex-col hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 text-left backdrop-blur-sm"
							onClick={() => setSelected(blog.id)}
						>
							<div className="w-full aspect-video bg-gray-100 dark:bg-gray-800/50 dark:border dark:border-pink-500/20 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
								<img
									src={blog.img}
									alt={t(`blogs.${blog.id}.title`)}
									className="object-contain h-full dark:brightness-90 dark:contrast-110"
									onError={(e) =>
										(e.currentTarget.src =
											"https://placehold.co/400x220?text=Blog")
									}
								/>
							</div>
							<div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
								{t(`blogs.${blog.id}.date`)} • {t(`blogs.${blog.id}.tag`)}
							</div>
							<div className="font-semibold text-lg text-gray-800 dark:text-gray-100">
								{t(`blogs.${blog.id}.title`)}
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Modal fuera del contenedor principal para que ocupe toda la pantalla */}
			<BlogModal
				open={!!selected}
				blogId={selected}
				onClose={() => setSelected(null)}
				getBlogContent={getBlogContent}
			/>
		</>
	);
}
