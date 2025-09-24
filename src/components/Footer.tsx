'use client';
import Texto from "./Texto";
import CustomLink from "./CustomLink";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation("translation");


  return (
    <footer className="footer">
      <div className="colaborar">
        <Texto text={t("footer.trabajar-juntos")} />
      </div>
      <hr className="hr" />
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
    </footer>
  );
}
