import Texto from "./Texto";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="colaborar">
        <Texto text="Tienes un proyecto interesante? Vamos a trabajar juntos!" customStyle="margen-grande" />
      </div>
      <hr className="hr" />
      <div className="info">
        <div id="Redes" className="redes">
          <Texto text="Sigueme!" customStyle="texto-secundario" />
          <Texto text="LinkedIn | GitHub | Twitter" customStyle="margen-negativo-top" />
        </div>
        <div id="Contacto" className="contacto">
          <Texto text="Contáctame!" customStyle="texto-secundario" />
          <Texto text="iventurasegui@gmail.com" customStyle="margen-negativo-top" />
        </div>

      </div>
    </footer>
  );
}
