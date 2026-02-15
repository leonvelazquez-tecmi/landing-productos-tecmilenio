import { solucionesOrganizaciones } from "@/data/organizaciones";
import { narrativaOrganizaciones } from "@/data/transversales";

export default function OrganizacionesSection() {
  return (
    <section
      id="organizaciones"
      className="border-b border-gray-100 bg-white px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="font-display text-2xl font-bold tracking-wide text-brand md:text-3xl"
          style={{ letterSpacing: "0.05em" }}
        >
          Soluciones para organizaciones
        </h2>
        <p className="mt-4 rounded-lg border border-gray-200 bg-gray-50/80 p-4 text-sm text-gray-700 md:text-base">
          {narrativaOrganizaciones}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {solucionesOrganizaciones.map((s) => (
            <article
              key={s.id}
              className="rounded-lg border border-gray-200 bg-gray-50/50 p-5"
            >
              <h3 className="font-display text-lg font-semibold text-brand">
                {s.nombre}
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Problema que resuelve:</span>{" "}
                {s.problemaQueResuelve}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                <span className="font-medium">Tipo de organización:</span>{" "}
                {s.tipoOrganizacion}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                <span className="font-medium">Formato:</span> {s.formato}
              </p>
              {s.resultadosIndicadores && s.resultadosIndicadores.length > 0 && (
                <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
                  {s.resultadosIndicadores.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
