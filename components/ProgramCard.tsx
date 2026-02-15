import type { Programa } from "@/data/tipos";
import type { Formato } from "@/data/tipos";
import ProductDetail from "./ProductDetail";

const formatoLabels: Record<Formato, string> = {
  presencial: "Presencial",
  connect_online: "Connect Online",
  asincronico: "Asincrónico",
};

interface ProgramCardProps {
  programa: Programa;
}

export default function ProgramCard({ programa }: ProgramCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="font-display text-lg font-semibold tracking-wide text-brand">
        {programa.nombre}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        {programa.nivel} · {programa.formatos.map((f) => formatoLabels[f]).join(", ")}
      </p>
      <p className="mt-2 text-sm text-gray-600">{programa.duracion}</p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-700">
        {programa.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <ProductDetail programa={programa} triggerLabel="Ver ficha completa" />
    </article>
  );
}
