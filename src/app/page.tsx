import Titulo from "../components/Titulo";
import Subtitulo from "../components/Subtitulo";
import Image from "next/image";
import Texto from "@/components/Texto";

export default function Home() {
  return (
    <main className="flex flex-col w-full">

      {/* Sección Presentación (About) */}
      <section id="about">
        <div className="flex flex-row md:flex-row items-center justify-center min-h-screen py-20 bg-gradient-to-b from-blue-100 to-white gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/assets/CV.jpg"
              alt="Imagen de presentación"
              width={300}
              height={300}
              className="rounded-full border-4 border-blue-200 shadow-lg"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left margen-left-grande">
            <Titulo text="¡Bienvenido a mi portfolio!" />
          </div>
        </div>
        <div
          className="mt-8 bg-white bg-opacity-80 border-2 border-white rounded-lg p-8 shadow-lg max-w-xl"
          style={{ color: "var(--color-blanco)" }}
        >
          <Subtitulo text="Sobre mi" />  
          <Texto text="Hola, soy Iván Ventura, un desarrollador web y móvil apasionado por crear experiencias digitales modernas y funcionales. Me especializo en React, Next.js y React Native. Me encanta aprender nuevas tecnologías y trabajar en proyectos creativos que marquen la diferencia." />      
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

    </main>
  );
}
