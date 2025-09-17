import Link from "next/link";
import '@/app/globals.css';


export default function Navbar() {
  return (
    <nav className="navbar-fija">
      <div className="flex flex-row items-center justify-between margen-left-med">
        {/* Nombre a la izquierda */}
        <div id="nombre">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Iván Ventura
          </Link>
        </div>
        {/* Secciones alineadas a la derecha */}
        <div id="secciones">
          <ul className="flex flex-row">
            <li className="margen-right-med"><Link href="/">Home</Link></li>
            <li className="margen-right-med"><Link href="/about">About</Link></li>
            <li className="margen-right-med"><Link href="/projects">Projects</Link></li>
            <li className="margen-right-med"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}