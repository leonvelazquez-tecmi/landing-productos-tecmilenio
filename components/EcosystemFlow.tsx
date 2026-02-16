"use client";

import { ArrowRight, Zap, Layers, Heart, Calculator } from "lucide-react";

export default function EcosystemFlow() {
  return (
    <section
      id="ecosistema"
      className="border-b border-gray-100 bg-slate-50 px-4 py-16 md:px-6 md:py-20"
      aria-label="Cómo funciona el ecosistema de productos Tecmilenio"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold tracking-wide text-brand md:text-3xl">
            Un sistema que premia tu avance
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Cada hora invertida en FIT se convierte en progreso para MAPS.
          </p>
        </div>

        {/* Diagrama Visual (Accessible) */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10"
          role="list"
          aria-label="Flujo del ecosistema: de certificaciones FIT a maestría MAPS"
        >
          {/* Step 1: FIT */}
          <div
            className="w-full md:w-1/3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative z-10"
            role="listitem"
            aria-label="Paso 1: Certifícate con FIT"
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="p-2 bg-blue-100 rounded text-blue-700"
                aria-hidden="true"
              >
                <Zap size={24} />
              </div>
              <h3 className="font-bold text-lg">1. Certifícate (FIT)</h3>
            </div>
            <p className="text-sm text-gray-600">
              Toma el certificado "Data Analytics" (40 horas).
            </p>
          </div>

          {/* Connector */}
          <div
            className="hidden md:flex flex-col items-center text-slate-400"
            aria-hidden="true"
          >
            <span className="text-[10px] uppercase font-bold tracking-wider mb-1">
              Revalidación
            </span>
            <ArrowRight size={24} />
          </div>
          <div
            className="md:hidden text-slate-400 my-2"
            aria-hidden="true"
          >
            <ArrowRight className="rotate-90" size={24} />
          </div>

          {/* Step 2: MAPS */}
          <div
            className="w-full md:w-1/3 bg-slate-900 text-white p-6 rounded-xl shadow-lg relative z-10"
            role="listitem"
            aria-label="Paso 2: Acelera tu Maestría con MAPS"
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="p-2 bg-slate-700 rounded text-emerald-400"
                aria-hidden="true"
              >
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-lg">2. Maestría (MAPS)</h3>
            </div>
            <p className="text-sm text-slate-300">
              Acreditas automáticamente la materia "Inteligencia de Negocios".
            </p>
          </div>
        </div>

        {/* The Math (Concrete Example) */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-start gap-4 max-w-2xl mx-auto">
          <div className="mt-1 text-blue-600 flex-shrink-0" aria-hidden="true">
            <Calculator size={24} />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide">
              La Matemática del Ahorro
            </h4>
            <p className="text-blue-800 text-sm mt-1">
              Al cursar <strong>3 Certificados FIT</strong>, ahorras{" "}
              <strong>$15,000 MXN</strong> y <strong>4 meses</strong> de tu
              Maestría MAPS.
            </p>
            <p className="text-xs text-blue-600 mt-2 italic">
              Basado en casos reales de estudiantes de Maestría en Administración
              de Negocios.
            </p>
          </div>
        </div>

        {/* Foundation: IPBI */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
            <Heart size={16} aria-hidden="true" />
            <span>Todo el proceso acompañado por mentores de IPBI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
