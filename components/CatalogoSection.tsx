"use client";

import { programas } from "@/data/programas";
import type { Programa } from "@/data/tipos";
import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard";

export type TabCatalogoId =
  | "preparatoria"
  | "primer_titulo"
  | "adulto_trabajando"
  | "organizacion";

const segmentos: { id: TabCatalogoId; label: string; anchor: string }[] = [
  { id: "preparatoria", label: "Preparatoria", anchor: "catalogo-preparatoria" },
  {
    id: "primer_titulo",
    label: "Personas que buscan su primer título profesional",
    anchor: "catalogo-primer-titulo",
  },
  {
    id: "adulto_trabajando",
    label: "Personas que ya trabajan",
    anchor: "catalogo-ya-trabajan",
  },
  {
    id: "organizacion",
    label: "Organizaciones",
    anchor: "catalogo-organizaciones",
  },
];

function filterProgramasByTab(programas: Programa[], tabId: TabCatalogoId): Programa[] {
  if (tabId === "preparatoria") {
    return programas.filter((p) => p.familiaId === "preparatoria");
  }
  if (tabId === "primer_titulo") {
    return programas.filter(
      (p) => p.segmentoPrincipal === "primer_titulo" && p.familiaId !== "preparatoria"
    );
  }
  if (tabId === "adulto_trabajando") {
    return programas.filter((p) => p.segmentoPrincipal === "adulto_trabajando");
  }
  return programas.filter((p) => p.segmentoPrincipal === "organizacion");
}

export default function CatalogoSection() {
  const [active, setActive] = useState<TabCatalogoId>("preparatoria");

  useEffect(() => {
    const sync = () => {
      const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
      const seg = segmentos.find((s) => s.anchor === hash);
      if (seg) setActive(seg.id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section
      id="catalogo"
      className="border-b border-gray-100 bg-white px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="font-display text-2xl font-bold tracking-wide text-brand md:text-3xl"
          style={{ letterSpacing: "0.05em" }}
        >
          Programas recomendados según tu momento de vida
        </h2>
        <p className="mt-2 text-gray-600">
          Empieza donde estás: aquí están los programas que mejor encajan con tu
          contexto.
        </p>

        <div
          className="mt-8 flex flex-wrap gap-0 border-b-2 border-gray-200"
          role="tablist"
        >
          {segmentos.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active === s.id}
              id={`tab-${s.anchor}`}
              aria-controls={`panel-${s.anchor}`}
              onClick={() => setActive(s.id)}
              className={`rounded-t px-4 py-3 text-sm font-medium transition ${
                active === s.id
                  ? "border-b-2 border-brand bg-gray-50 text-brand -mb-0.5"
                  : "text-gray-600 hover:bg-gray-50/50 hover:text-brand"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {segmentos.map((s) => (
          <div
            key={s.id}
            id={s.anchor}
            role="tabpanel"
            aria-labelledby={`tab-${s.anchor}`}
            hidden={active !== s.id}
            className="mt-6"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filterProgramasByTab(programas, s.id).map((p) => (
                <ProgramCard key={p.id} programa={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
