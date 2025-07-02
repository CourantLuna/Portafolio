import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full flex flex-col gap-8 dark:text-gray-100">
      {/* Header */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-4">
          Contacto
          <span className="flex-1 border-t border-pink-400 dark:border-pink-300 ml-3" />
        </h2>
      </section>
      {/* Cards de contacto */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Teléfono */}
        <div className="flex items-center gap-3 bg-pink-50 dark:bg-pink-900/20 dark:border dark:border-pink-500/30 dark:shadow-lg dark:shadow-pink-500/20 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:hover:shadow-2xl">
          <div className="bg-pink-200 dark:bg-pink-900/40 dark:border dark:border-pink-500/40 p-3 rounded-lg flex items-center justify-center">
            <FaPhoneAlt className="text-pink-600 dark:text-pink-300 text-2xl" />
          </div>
          <div>
            <div className="font-bold text-gray-700 dark:text-gray-100 text-base">Teléfono</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              +1 829 512 4461<br />
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 dark:border dark:border-blue-500/30 dark:shadow-lg dark:shadow-blue-500/20 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:hover:shadow-2xl">
          <div className="bg-blue-200 dark:bg-blue-900/40 dark:border dark:border-blue-500/40 p-3 rounded-lg flex items-center justify-center">
            <FaEnvelope className="text-blue-700 dark:text-blue-300 text-2xl" />
          </div>
          <div>
            <div className="font-bold text-gray-700 dark:text-gray-100 text-base">Correo</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm break-all">
              <a
                href="mailto:heydi0811@gmail.com"
                className="underline hover:text-pink-500 dark:hover:text-pink-400 transition"
              >
                heydi0811@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Formulario */}
      <section className="bg-gray-50 dark:bg-gray-800/50 dark:border dark:border-pink-500/20 dark:shadow-lg dark:shadow-pink-500/10 rounded-2xl p-8 mb-4 backdrop-blur-sm">
        <div className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          ¡Estoy abierta a nuevas oportunidades y colaboraciones!
          <span className="block font-bold text-gray-900 dark:text-gray-100">Hablemos sobre proyectos de desarrollo, tecnología o branding.</span>
        </div>
        <form
          action="mailto:heydi0811@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Nombre *</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-pink-500/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-pink-400 dark:focus:border-pink-300 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Email *</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-pink-500/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-pink-400 dark:focus:border-pink-300 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">Mensaje *</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-pink-500/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-pink-400 dark:focus:border-pink-300 resize-none transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-400 dark:from-pink-600 dark:to-pink-500 text-white rounded-xl text-center font-semibold shadow-md dark:shadow-pink-500/30 hover:from-pink-600 hover:to-pink-500 dark:hover:from-pink-700 dark:hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
      {/* Footer */}
      <footer className="text-center text-gray-400 dark:text-gray-500 text-xs pt-8">
        © {new Date().getFullYear()} Heydi García | Portafolio Personal
      </footer>
    </div>
  );
}
