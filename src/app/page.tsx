
'use client';
import Titulo from "../components/Titulo";
import Subtitulo from "../components/Subtitulo";
import Image from "next/image";
import Texto from "@/components/Texto";
import { useTranslation } from "react-i18next";
import '../i18n';
import CustomButton from "@/components/CustomButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {

  const { t } = useTranslation('translation');

  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Ivan_Ventura_CV.pdf';
    link.download = 'CV_Ivan_Ventura.pdf';
    link.click();
  };

  useScrollAnimation();

  return (
    <main className="flex flex-col w-full">

      {/* Sección Presentación (About) */}
      <section id="about">
        <div className="animate-element">
          <div className="hero-section">
            <div>
              <Image
                src="/assets/CV.jpg"
                alt="Imagen de presentación"
                width={300}
                height={300}
                className="profile-image"
              />
            </div>
            <div className="margen-left-grande">
              <Titulo text={t('about.bienvenido')} />
            </div>
          </div>
        </div>
        <div className="animate-element">
          <div
            className="aboutme-border margen-x-xxl margen-bottom-xxl"
            style={{ color: "var(--color-blanco)" }}
          >
            <Subtitulo
              text={t('about.about')}
              customStyle={"margen-grande"}
            />
            <Texto
              text={t('about.descripcion')}
              customStyle={"margen-grande texto-formato"}
            />
          </div>
        </div>
        <div className="animate-element">
          <div className="boton-about">
            <CustomButton
              text={t('about.descargarCV')}
              type="button"
              onClick={descargarCV}
            />
          </div>
        </div>
      </section>
      <div className="whitespace"></div>
    </main>
  );
}
