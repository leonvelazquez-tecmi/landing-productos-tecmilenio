import type { Familia } from "@/data/tipos";
import type { Formato } from "@/data/tipos";

const formatoLabels: Record<Formato, string> = {
  presencial: "Presencial",
  connect_online: "Connect Online",
  asincronico: "Asincrónico",
};

interface FamilyCardProps {
  familia: Familia;
}

export default function FamilyCard({ familia }: FamilyCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-brand/30 hover:shadow-md">
      <h3 className="font-display text-lg font-semibold tracking-wide text-brand">
        {familia.nombre}
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        <span className="font-medium text-gray-800">Para quién:</span> {familia.paraQuien}
      </p>
      <p className="mt-1 text-sm text-gray-600">
        <span className="font-medium text-gray-800">Qué busca lograr:</span>{" "}
        {familia.queBuscaLograr}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {familia.formatos.map((f) => (
          <span
            key={f}
            className="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-700"
          >
            {formatoLabels[f]}
          </span>
        ))}
      </div>
      <a
        href="#catalogo"
        className="mt-4 inline-flex w-fit items-center text-sm font-medium text-brand hover:underline"
      >
        Ver programas de esta familia →
      </a>
    </article>
  );
}
