export default function Contact() {
  return (
    <section className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-3">Contacto</h2>
      <p className="mb-4">¿Interesado/a en colaborar? Escríbeme o conecta en mis redes:</p>
      <div className="flex flex-col gap-3 items-center">
        <a href="mailto:heydi0811@gmail.com" className="text-blue-600 underline">heydi0811@gmail.com</a>
        <a href="https://www.linkedin.com/in/heydi-garcia-sanchez-b06783144" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/CourantLuna" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}
