import Link from "next/link";
import '@/app/globals.css';


export default function Navbar() {
  return (
    <nav className="navbar-fija">
      <div className="flex flex-row items-center justify-between margen-left-grande">
        {/* Nombre a la izquierda */}
        <div id="nombre">
          <Link href="/">
            Iván Ventura
          </Link>
        </div>
        {/* Secciones alineadas a la derecha */}
        <div id="secciones">
          <ul className="flex flex-row">
            <li className="margen-right-grande">
              <Link href="/projects">Proyectos</Link>
            </li>
            <li className="margen-right-grande">
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}