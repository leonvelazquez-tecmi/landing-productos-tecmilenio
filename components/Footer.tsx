export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-12 md:px-6">
        <div className="md:col-span-6">
          <p
            className="font-display text-2xl font-bold tracking-wide text-brand"
            style={{ letterSpacing: "0.05em" }}
          >
            Está en ti
          </p>
          <p className="mt-1 text-sm text-gray-600">TECMILENIO.COM</p>
        </div>
        <div className="md:col-span-6 md:text-right">
          <p className="text-sm text-gray-600">
            Portal de Productos y Servicios Tecmilenio – Versión 1.0
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Última actualización: [placeholder de fecha]
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Responsable: Dirección de Planeación y Transformación
          </p>
        </div>
      </div>
    </footer>
  );
}
