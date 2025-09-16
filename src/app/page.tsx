import Titulo from "../components/Titulo";
import Subtitulo from "../components/Subtitulo";
import Texto from "../components/Texto";
export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Sección Presentación (About) */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen py-20 bg-gradient-to-b from-blue-100 to-white" id="about">
        <Titulo text="Hola, soy Iván Ventura" />
        <Subtitulo text="Desarrollador web y móvil con React, Next.js y React Native" />
        <Texto text="Bienvenido a mi portfolio. Aquí podrás conocer mis proyectos, habilidades y cómo contactarme." />
      </section>

      {/* Sección Proyectos */}
      <section className="flex flex-col items-center py-20 bg-white min-h-screen" id="proyectos">
        <Subtitulo text="Proyectos" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Ejemplo de proyecto */}
          <div className="bg-gray-100 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
            <p className="mb-2">Descripción breve del proyecto 1.</p>
            <a href="#" className="text-blue-600 hover:underline">Ver más</a>
          </div>
          <div className="bg-gray-100 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Proyecto 2</h3>
            <p className="mb-2">Descripción breve del proyecto 2.</p>
            <a href="#" className="text-blue-600 hover:underline">Ver más</a>
          </div>
        </div>
      </section>

      {/* Sección Habilidades */}
      <section className="flex flex-col items-center py-20 bg-blue-50 min-h-screen" id="habilidades">
        <Subtitulo text="Habilidades" />
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="bg-white px-4 py-2 rounded shadow">React</li>
          <li className="bg-white px-4 py-2 rounded shadow">Next.js</li>
          <li className="bg-white px-4 py-2 rounded shadow">React Native</li>
          <li className="bg-white px-4 py-2 rounded shadow">TypeScript</li>
          <li className="bg-white px-4 py-2 rounded shadow">Node.js</li>
        </ul>
      </section>

      {/* Sección Contacto */}
      <section className="flex flex-col items-center py-20 bg-white min-h-[60vh]" id="contacto">
        <Subtitulo text="Contacto" />
        <Texto text="¿Quieres ponerte en contacto conmigo?" />
        <a href="mailto:ivan@email.com" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">Envíame un email</a>
      </section>
    </main>
  );
}
