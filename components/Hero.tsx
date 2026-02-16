"use client";

import { useState, useEffect } from "react";
import type { MetricaHero } from "@/data/tipos";
import { metricasHero } from "@/data/transversales";

const titulo =
  "Tu título universitario, acelerado por tu experiencia real.";

const subtitulo =
  "El único ecosistema donde cada certificación industrial cuenta como créditos para tu maestría.";

const audienceTabs = [
  { id: "crecimiento", label: "Para Mí (Crecimiento)", target: "#ecosistema" },
  { id: "empresa", label: "Para Mi Empresa", target: "#organizaciones" },
  { id: "estudiante", label: "Soy Estudiante", target: "#catalogo-preparatoria" },
];

const ctas = [
  { href: "#catalogo-preparatoria", label: "Ver preparatoria" },
  { href: "#catalogo-primer-titulo", label: "Ver carreras de tiempo completo (presencial o en vivo)" },
  { href: "#catalogo-ya-trabajan", label: "Ver programas para quienes ya trabajan" },
  { href: "#catalogo-organizaciones", label: "Ver soluciones para organizaciones" },
];

function Metrica({ valor, descripcion }: MetricaHero) {
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-bold tracking-wide text-brand md:text-4xl">
        {valor}
      </p>
      <p className="mt-1 max-w-[220px] text-sm text-gray-600">{descripcion}</p>
    </div>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const ecosistema = document.getElementById("ecosistema");
      const organizaciones = document.getElementById("organizaciones");
      const catalogo = document.getElementById("catalogo-preparatoria");

      const scrollPosition = window.scrollY + 100;

      if (organizaciones && scrollPosition >= organizaciones.offsetTop) {
        setActiveTab("empresa");
      } else if (ecosistema && scrollPosition >= ecosistema.offsetTop) {
        setActiveTab("crecimiento");
      } else if (catalogo && scrollPosition >= catalogo.offsetTop) {
        setActiveTab("estudiante");
      } else {
        setActiveTab(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="border-b border-gray-100 bg-white px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h1
          className="font-display text-3xl font-bold leading-tight tracking-wide text-brand md:text-4xl lg:text-5xl"
          style={{ letterSpacing: "0.05em" }}
        >
          {titulo}
        </h1>
        <p className="mt-6 text-lg text-gray-700 md:text-xl">{subtitulo}</p>
        
        {/* Audience Navigation Tabs */}
        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Navegación por audiencia">
          {audienceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.target)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={tab.target.slice(1)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand/50 ${
                activeTab === tab.id
                  ? "bg-brand text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {ctas.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/50"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 border-t border-gray-100 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {metricasHero.map((m) => (
          <Metrica key={m.id} {...m} />
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-600">
        Antes de elegir programa, usamos Mi Propósito y un modelo de mentores y
        coaches para ayudarte a alinear tu ruta de certificados y experiencias con
        el proyecto de vida que quieres construir.
      </p>
    </section>
  );
}
