import React from "react";
import Titulo from "../../components/Titulo";
import Texto from "../../components/Texto";

function AboutPage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-10 p-8 bg-[var(--color-bg-light)] rounded-xl shadow-lg">
      <img
        src="/mi-foto.jpg"
        alt="Foto de Iván Ventura"
        className="w-40 h-40 rounded-full object-cover border-4 border-[var(--color-primary)] shadow-md mb-6 md:mb-0"
      />
      <div className="flex-1 flex flex-col items-center md:items-start">
        <Titulo text="Mi CV" />
        <Texto text="Soy Iván Ventura, desarrollador web y móvil apasionado por crear experiencias digitales modernas y funcionales. Me especializo en React, Next.js y React Native. Me encanta aprender nuevas tecnologías y trabajar en proyectos creativos." />
      </div>
    </section>
  );
}

export default AboutPage;
