'use client';
import React from "react";
import Texto from "../../components/Texto";
import Subtitulo from "../../components/Subtitulo";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
    const { t } = useTranslation("translation");

    return (
        <section id="projects" className="">
            <div id ="intro-proyectos" className="proyects-desc">
                <Subtitulo text={t("projects.titulo")} />
                <Texto text={t("projects.intro")} />
            </div>
        </section>
    );
}
