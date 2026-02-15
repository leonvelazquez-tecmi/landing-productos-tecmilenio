"use client";

const anchors = [
  { href: "#hero", label: "Inicio" },
  { href: "#familias", label: "Familias de producto" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#formas-estudiar", label: "Formas de estudiar" },
  { href: "#organizaciones", label: "Organizaciones" },
  { href: "#diferenciadores", label: "Diferenciadores" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6"
        aria-label="Principal"
      >
        <a
          href="#hero"
          className="font-display text-lg font-semibold tracking-wide text-brand"
        >
          Tecmilenio
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-4 md:gap-6">
          {anchors.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-gray-700 transition hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
