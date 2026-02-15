"use client";

import type { Programa } from "@/data/tipos";
import type { Formato } from "@/data/tipos";
import { useState } from "react";

const formatoLabels: Record<Formato, string> = {
  presencial: "Presencial",
  connect_online: "Connect Online",
  asincronico: "Asincrónico",
};

interface ProductDetailProps {
  programa: Programa;
  triggerLabel?: string;
}

export default function ProductDetail({
  programa,
  triggerLabel = "Ver detalle",
}: ProductDetailProps) {
  const [open, setOpen] = useState(false);
  const m = programa.mapasFitIpbi;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 inline-flex items-center text-sm font-medium text-brand hover:underline"
      >
        {triggerLabel} →
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-detail-title"
        >
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-gray-200 bg-white p-6 shadow-xl">
            <h2
              id="product-detail-title"
              className="font-display text-xl font-bold tracking-wide text-brand"
            >
              {programa.nombre}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {programa.familiaId} · {programa.nivel}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Segmento: {programa.segmentoPrincipal} · Formatos:{" "}
              {programa.formatos.map((f) => formatoLabels[f]).join(", ")}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Duración: {programa.duracion}
              {programa.periodicidad && ` · ${programa.periodicidad}`}
            </p>

            {programa.certificadosMAPS && programa.certificadosMAPS.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Certificados MAPS asociados
                </h3>
                <ul className="list-inside list-disc text-sm text-gray-600">
                  {programa.certificadosMAPS.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
            {programa.certificaciones && programa.certificaciones.length > 0 && (
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  Certificaciones externas
                </h3>
                <p className="text-sm text-gray-600">
                  {programa.certificaciones.join(", ")}
                </p>
              </div>
            )}
            {programa.insignias !== undefined && (
              <p className="mt-2 text-sm text-gray-600">
                Insignias digitales: {programa.insignias ? "Sí" : "No"}
              </p>
            )}

            {(programa.competenciasTecnicas?.length ||
              programa.competenciasHumanas?.length ||
              programa.competenciasTrascendentes?.length) && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">Competencias</h3>
                <ul className="list-inside list-disc text-sm text-gray-600">
                  {programa.competenciasTecnicas?.map((c, i) => (
                    <li key={`t-${i}`}>{c}</li>
                  ))}
                  {programa.competenciasHumanas?.map((c, i) => (
                    <li key={`h-${i}`}>{c}</li>
                  ))}
                  {programa.competenciasTrascendentes?.map((c, i) => (
                    <li key={`tr-${i}`}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
            {programa.resultadosEsperados && programa.resultadosEsperados.length > 0 && (
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  Resultados esperados
                </h3>
                <ul className="list-inside list-disc text-sm text-gray-600">
                  {programa.resultadosEsperados.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
            {programa.esquemaPrecio && (
              <p className="mt-3 text-sm text-gray-600">
                Esquema de precio: {programa.esquemaPrecio}
              </p>
            )}

            <div className="mt-4 rounded bg-gray-50 p-3">
              <h3 className="text-sm font-semibold text-gray-800">
                Conexión con el modelo Tecmilenio
              </h3>
              <ul className="mt-1 list-none text-sm text-gray-600">
                {m.usaMAPS && <li>· MAPS (certificados apilables)</li>}
                {m.usaFIT && <li>· FIT (experiencias integradas al trabajo)</li>}
                {m.usaIPBI && <li>· IPBI / Factor Wellbeing</li>}
                {m.usaMiProposito && <li>· Mi Propósito</li>}
                {m.usaAcompanamiento && <li>· Acompañamiento (mentores/coaches)</li>}
              </ul>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand/90"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
