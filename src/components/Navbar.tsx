'use client';
import Link from "next/link";
import '@/app/globals.css';
import { useNavbarAnimation } from "../hooks/useScrollAnimation";

export default function Navbar() {
  useNavbarAnimation();
  return (
    <nav className="navbar-fija">
      <div className="flex flex-row items-center justify-between margen-left-grande">
        {/* Nombre a la izquierda */}
        <div id="nombre" className="navbar-item">
          <Link href="/">
            Iván Ventura
          </Link>
        </div>
        {/* Secciones alineadas a la derecha */}
        <div id="secciones">
          <ul className="flex flex-row">
            <li className="margen-right-grande navbar-item">
              <Link href="/projects">Proyectos</Link>
            </li>
            <li className="margen-right-grande navbar-item">
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}