import type { MetricaHero } from "@/data/tipos";
import { metricasHero } from "@/data/transversales";

const titulo =
  "Programas diseñados para que tu título, tu trabajo y tu bienestar estén integrados desde el día uno.";

const subtitulo = [
  "Programas MAPS: modulares, apilables, con certificados e insignias digitales.",
  "Experiencias FIT: integradas al trabajo; 9 de cada 10 se gradúan con empleo.",
  "IPBI / Factor Wellbeing: propósito de vida y bienestar integral medibles, no solo palabras.",
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
        <ul className="mt-6 list-none space-y-2 text-gray-700">
          {subtitulo.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
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
