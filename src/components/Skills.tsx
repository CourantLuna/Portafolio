const skills = [
  {
    title: "Full Stack Development",
    icon: <i className="fa-solid fa-laptop-code fa-2x text-yellow-400"></i>,
    desc: "Desarrollo de aplicaciones web robustas usando React, Next.js, Node.js, C#, .NET.",
  },
  {
    title: "Automatización & 3D",
    icon: <i className="fa-solid fa-robot fa-2x text-pink-400"></i>,
    desc: "Automatización industrial, diseño 3D e integración de microcontroladores y robótica.",
  },
  {
    title: "Docencia STEAM",
    icon: <i className="fa-solid fa-chalkboard-user fa-2x text-blue-400"></i>,
    desc: "Experiencia capacitando docentes y estudiantes en robótica, tecnología y pensamiento computacional.",
  },
  {
    title: "UI/UX Design",
    icon: <i className="fa-solid fa-palette fa-2x text-violet-400"></i>,
    desc: "Diseño de interfaces modernas, usabilidad y prototipado con Figma y heurísticas de accesibilidad.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#181926] rounded-2xl p-8 shadow-xl text-gray-200">
      <h2 className="text-2xl font-bold mb-6">¿Qué hago?</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map(skill => (
          <div key={skill.title} className="flex items-start gap-4 bg-[#232338] rounded-xl p-5 shadow-md">
            <span>{skill.icon}</span>
            <div>
              <h3 className="font-bold text-lg mb-1">{skill.title}</h3>
              <p className="text-sm">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
