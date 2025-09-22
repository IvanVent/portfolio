import Texto from "./Texto";

export default function Footer() {
  return (
    <footer>
      <div className="colaborar">
        <Texto text="Tienes un proyecto interesante? Vamos a trabajar juntos!" customStyle="margen-grande" />
      </div>
      <div className="hr row">
      </div>
      <div className="info">
        <div id="Redes" className="redes">
          <Texto text="Sigueme!" customStyle="margen-grande" />
          <Texto text="LinkedIn | GitHub | Twitter" customStyle="margen-grande" />

        </div>
        <div id="Contacto" className="contacto">
          <Texto text="Contáctame!" customStyle="margen-grande" />
          <Texto text="Email: contacto@ejemplo.com" customStyle="margen-grande" />

        </div>

      </div>
    </footer>
  );
}
