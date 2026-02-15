import { formatosEstudio, pilotosFormatos } from "@/data/formatos";
import { familias } from "@/data/familias";

export default function FormasEstudiarSection() {
  return (
    <section
      id="formas-estudiar"
      className="border-b border-gray-100 bg-gray-50/50 px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="font-display text-2xl font-bold tracking-wide text-brand md:text-3xl"
          style={{ letterSpacing: "0.05em" }}
        >
          Formas de estudiar en Tecmilenio
        </h2>
        <p className="mt-2 text-gray-600">
          Elige cómo quieres estudiar: presencial en campus, en vivo en línea o a tu
          ritmo.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {formatosEstudio.map((f) => {
            const familiasQueUsan = familias.filter((fam) =>
              f.familiaIds.includes(fam.id)
            );
            return (
              <div
                key={f.id}
                className="rounded-lg border border-gray-200 bg-white p-5"
              >
                <h3 className="font-display text-lg font-semibold tracking-wide text-brand">
                  {f.nombre}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{f.descripcion}</p>
                <p className="mt-2 text-sm text-gray-700">
                  <span className="font-medium">Ideal para:</span> {f.paraQuienIdeal}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-800">Se usa en:</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {familiasQueUsan.map((fam) => (
                    <span
                      key={fam.id}
                      className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                    >
                      {fam.nombre}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-skilling/30 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-gray-800">
            Pilotos / Próximos lanzamientos
          </h3>
          {pilotosFormatos.map((p) => (
            <div key={p.id} className="mt-4">
              <p className="font-medium text-brand">{p.nombre}</p>
              <p className="mt-1 text-sm text-gray-600">{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
