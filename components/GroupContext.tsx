export default function GroupContext() {
  return (
    <section
      className="border-b border-gray-100 bg-white px-4 py-6 md:py-8"
      aria-label="Contexto institucional del Grupo Educativo TEC"
    >
      <div className="mx-auto max-w-3xl text-left">
        <h2
          className="font-display text-lg font-semibold tracking-wide text-brand md:text-xl"
          style={{ letterSpacing: "0.05em" }}
        >
          Somos parte del Grupo Educativo Tecnológico de Monterrey
        </h2>
        <p className="mt-3 leading-relaxed text-gray-800 md:text-base">
          Somos parte del Grupo Educativo Tecnológico de Monterrey. Desde ese
          ecosistema, Tecmilenio se enfoca en programas accesibles y flexibles que
          impulsan la empleabilidad, el autoempleo y el bienestar de la clase media
          que mantiene en marcha la economía local, en México y en el mundo de habla
          hispana.
        </p>
      </div>
    </section>
  );
}
