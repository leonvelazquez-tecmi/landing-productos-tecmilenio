import { familias } from "@/data/familias";
import FamilyCard from "./FamilyCard";

export default function FamiliasSection() {
  return (
    <section
      id="familias"
      className="border-b border-gray-100 bg-gray-50/50 px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="font-display text-2xl font-bold tracking-wide text-brand md:text-3xl"
          style={{ letterSpacing: "0.05em" }}
        >
          Qué tipo de programas puedes estudiar en Tecmilenio
        </h2>
        <p className="mt-2 text-gray-600">
          Desde preparatoria hasta soluciones para organizaciones, organizados por
          objetivo.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {familias.map((f) => (
            <FamilyCard key={f.id} familia={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
