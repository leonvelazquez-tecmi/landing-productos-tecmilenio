import {
  bloquesTransversales,
  sintesisDiferenciadores,
} from "@/data/transversales";

export default function DiferenciadoresSection() {
  return (
    <section
      id="diferenciadores"
      className="border-b border-gray-100 bg-gray-50/50 px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          className="font-display text-2xl font-bold tracking-wide text-brand md:text-3xl"
          style={{ letterSpacing: "0.05em" }}
        >
          Lo que hace distintos a nuestros programas: certificados apilables,
          experiencia real y bienestar con propósito.
        </h2>

        <div className="mt-10 space-y-8">
          {bloquesTransversales.map((b) => (
            <div
              key={b.id}
              className="rounded-lg border border-gray-200 bg-white p-5"
            >
              <h3 className="font-display text-lg font-semibold text-brand">
                {b.titulo}
              </h3>
              <ul className="mt-3 list-none space-y-2 text-sm text-gray-700">
                {b.contenido.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border-2 border-brand/20 bg-white p-6">
          <h3 className="font-display text-base font-semibold text-brand">
            Síntesis
          </h3>
          <ul className="mt-3 list-none space-y-1 text-sm text-gray-700">
            <li>{sintesisDiferenciadores.maps}</li>
            <li>{sintesisDiferenciadores.fit}</li>
            <li>{sintesisDiferenciadores.ipbi}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
