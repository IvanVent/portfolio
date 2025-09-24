'use client';
import React, { useState } from "react";
import Texto from "../../components/Texto";
import Subtitulo from "../../components/Subtitulo";
import { useTranslation } from "react-i18next";


export default function ContactPage() {
    // Cambia este endpoint tras crear tu formulario en https://formspree.io/f/ (te dan uno personalizado)
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvnegly";
    const [state, setState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const { t } = useTranslation("translation");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("");
        const res = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: JSON.stringify({
                name: state.name,
                email: state.email,
                message: state.message,
            }),
        });
        if (res.ok) {
            setStatus("¡Mensaje enviado! Gracias por contactarme.");
            setState({ name: "", email: "", message: "" });
        } else {
            setStatus("Error al enviar. Intenta de nuevo más tarde.");
        }
    };

    return (
        <section id="contact">
            <div id="intro-contact" className="section-intro">
                <Subtitulo text={t("contact.titulo") + " 👋"} />
                <Texto text={t("contact.intro")} customStyle="texto-formato" />
            </div>
            <form onSubmit={handleSubmit} className="form-style" id="form">
                <input
                    type="text"
                    name="name"
                    placeholder={t("contact.nombre")}
                    value={state.name}
                    onChange={handleChange}
                    required
                    className="texto input-linea"
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t("contact.correo")}
                    value={state.email}
                    onChange={handleChange}
                    required
                    className="texto input-linea"
                />
                <textarea
                    name="message"
                    placeholder={t("contact.mensaje")}
                    value={state.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="texto input-linea"
                />
                <button type="submit" className="boton-enviar">
                    {t("contact.enviar")}
                </button>
                {status && <div style={{ marginTop: 8 }}>{status}</div>}
            </form>
            <div className="whitespace"></div>
        </section>
    );
}
