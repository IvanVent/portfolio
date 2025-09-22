import Texto from "./Texto";
import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="colaborar">
        <Texto text="Tienes un proyecto interesante? Vamos a trabajar juntos!" />
      </div>
      <hr className="hr" />
      <div className="info">
        <div id="Redes" className="redes">
          <Texto text="Sigueme!" customStyle="texto-secundario" />
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
          <Texto text="Contáctame!" customStyle="texto-secundario" />
          <Texto text="iventurasegui@gmail.com" customStyle="margen-negativo-top" />
        </div>

      </div>
    </footer>
  );
}
