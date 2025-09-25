'use client';
import Texto from "./Texto";
import CustomLink from "./CustomLink";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Footer() {

  const { t } = useTranslation("translation");
  const pathname = usePathname();
  
  // Resetear animaciones cuando cambia la página
  useEffect(() => {
    const footerElements = document.querySelectorAll('.footer .animate-element');
    footerElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.visibility = 'hidden';
      htmlElement.style.opacity = '0';
      htmlElement.style.animationName = '';
    });
  }, [pathname]);

  useScrollAnimation();


  return (
    <footer className="footer">
      <div className="animate-element">
        <div className="colaborar">
          <Texto text={t("footer.trabajar-juntos")} />
        </div>
      </div>
      <div className="animate-element">
        <hr className="hr" />
      </div>
      <div className="animate-element">
        <div className="info margen-negativo-top">
          <div id="Redes" className="redes">
            <Texto text={t("footer.sigueme")} customStyle="texto-secundario" />
            <div className="links ">
              <CustomLink href="https://www.linkedin.com/in/ivanventurasegui">
                <Texto text="LinkedIn" customStyle="margen-negativo-top" />
              </CustomLink>
              <span style={{ marginLeft: '1rem' }}></span>
              <CustomLink href="https://github.com/IvanVent">
                <Texto text="GitHub" customStyle="margen-negativo-top" />
              </CustomLink>
            </div>
          </div>
          <div id="Contacto" className="contacto">
            <Texto text={t("footer.contactame")} customStyle="texto-secundario" />
            <Texto text="iventurasegui@gmail.com" customStyle="margen-negativo-top" />
          </div>
        </div>
      </div>
    </footer>
  );
}
