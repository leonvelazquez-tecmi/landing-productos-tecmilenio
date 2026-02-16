import { CheckCircle } from "lucide-react";
import { solucionesOrganizaciones, casosUso } from "@/data/organizaciones";
import { narrativaOrganizaciones } from "@/data/transversales";

export default function OrganizacionesSection() {
  return (
    <section
      id="organizaciones"
      className="border-b border-gray-100 bg-slate-900 px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="font-display text-2xl font-bold tracking-wide text-white md:text-3xl"
          style={{ letterSpacing: "0.05em" }}
        >
          Soluciones de Talento con ROI Medible
        </h2>
        <p className="mt-4 text-lg text-slate-300 md:text-xl">
          No capacitamos, transformamos indicadores de negocio.
        </p>
        <p className="mt-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-sm text-slate-300 md:text-base">
          {narrativaOrganizaciones}
        </p>

        {/* Casos de Uso Destacados */}
        {casosUso.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Casos de éxito
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {casosUso.map((caso) => (
                <article
                  key={caso.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-lg"
                >
                  <h4 className="font-display text-lg font-semibold text-brand mb-2">
                    {caso.titulo}
                  </h4>
                  {caso.empresa && (
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                      {caso.empresa}
                      {caso.industria && ` • ${caso.industria}`}
                    </p>
                  )}
                  <p className="text-sm text-gray-700 mb-4">{caso.descripcion}</p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                    <CheckCircle size={20} aria-hidden="true" />
                    <span>{caso.resultado}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Soluciones Disponibles */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-white mb-6">
            Nuestras soluciones
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {solucionesOrganizaciones.map((s) => (
              <article
                key={s.id}
                className="rounded-lg border border-slate-700 bg-slate-800/50 p-5"
              >
                <h3 className="font-display text-lg font-semibold text-white">
                  {s.nombre}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  <span className="font-medium text-slate-200">
                    Problema que resuelve:
                  </span>{" "}
                  {s.problemaQueResuelve}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  <span className="font-medium text-slate-200">
                    Tipo de organización:
                  </span>{" "}
                  {s.tipoOrganizacion}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  <span className="font-medium text-slate-200">Formato:</span>{" "}
                  {s.formato}
                </p>
                {s.resultadosIndicadores &&
                  s.resultadosIndicadores.length > 0 && (
                    <ul className="mt-2 list-inside list-disc text-sm text-slate-300">
                      {s.resultadosIndicadores.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
