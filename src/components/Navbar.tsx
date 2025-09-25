'use client';
import Link from "next/link";
import '@/app/globals.css';
import { useNavbarAnimation } from "../hooks/useScrollAnimation";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation("translation");
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
        <div id="secciones" className="flex flex-row items-center">
          <ul className="flex flex-row">
            <li className="margen-right-grande navbar-item">
              <Link href="/projects">{t("navbar.projects")}</Link>
            </li>
            <li className="margen-right-grande navbar-item">
              <Link href="/contact">{t("navbar.contact")}</Link>
            </li>
          </ul>
          <div className="margen-right-grande">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}