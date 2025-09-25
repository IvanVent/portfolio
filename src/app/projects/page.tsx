'use client';
import React from "react";
import Texto from "../../components/Texto";
import Subtitulo from "../../components/Subtitulo";
import { useTranslation } from "react-i18next";
import Titulo from "@/components/Titulo";
import Image from "next/image";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function ProjectsPage() {
    const { t } = useTranslation("translation");
    useScrollAnimation();

    return (
        <section id="projects">
            <div className="animate-element">
                <div id="intro-projects" className="section-intro">
                    <Subtitulo text={t("projects.titulo")} />
                    <Texto text={t("projects.intro")} customStyle="texto-formato" />
                </div>
            </div>
            <div className="whitespace"></div>
            <div className="animate-element">
                <div id="project-image-1" className="image-project-1">
                    <Titulo text="Yggdra" />
                    <Image
                        src="/assets/yggdra-captura.jpg"
                        alt="Yggdra"
                        width={720}
                        height={405}
                    />
                </div>
            </div>
            <div className="whitespace"></div>
            <div className="animate-element">
                <div id="project-image-2" className="image-project-2">
                    <Image
                        src="/assets/sokoban-captura.png"
                        alt="Sokoban"
                        width={675}
                        height={469}
                    />
                    <Titulo text="Sokoban" />
                </div>
            </div>
            <div className="whitespace"></div>
            <div className="animate-element">
                <div id="project-image-3" className="image-project-1">
                    <Titulo text="MovieVerse" />
                    <div className="movieverse-images">
                        <Image
                            src="/assets/movieVerse_1.png"
                            alt="MovieVerse"
                            width={150}
                            height={342}
                        />
                        <Image
                            src="/assets/movieVerse_2.png"
                            alt="MovieVerse"
                            width={150}
                            height={342}
                        />
                        <Image
                            src="/assets/movieVerse_3.png"
                            alt="MovieVerse"
                            width={150}
                            height={342}
                        />
                    </div>
                </div>
            </div>
            <div className="whitespace"></div>
        </section>
    );
}
