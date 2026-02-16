import type { SolucionOrganizacion, CasoUso } from "./tipos";

export const solucionesOrganizaciones: SolucionOrganizacion[] = [
  {
    id: "skilling-empresarial",
    nombre: "Membresía Empresarial Skilling / Skilling Empresarial",
    problemaQueResuelve:
      "Actualizas el talento de tu organización sin desvincularlo del trabajo; cierras brechas de skills con rutas y certificaciones.",
    tipoOrganizacion: "Empresas de cualquier tamaño: mandos medios, operativos, talento emergente.",
    formato: "Online, rutas asincrónicas y/o sesiones en vivo",
    resultadosIndicadores: ["Avance por colaborador", "Cumplimiento de rutas"],
  },
  {
    id: "skilling-in-a-box",
    nombre: "Skilling in a Box",
    problemaQueResuelve:
      "Paquetes listos para desplegar: formación en un tema concreto sin diseñar desde cero.",
    tipoOrganizacion: "Organizaciones que buscan implementación rápida.",
    formato: "Online o híbrido",
  },
  {
    id: "prepa-go",
    nombre: "Prepa Go",
    problemaQueResuelve:
      "Tus colaboradores obtienen bachillerato sin dejar de trabajar; cierras rezago educativo en la plantilla.",
    tipoOrganizacion: "Organizaciones con compromiso de desarrollo de talento y movilidad social.",
    formato: "Connect Online, asincrónico",
    resultadosIndicadores: ["Titulación de colaboradores", "Retención y compromiso"],
  },
  {
    id: "certificados-medida",
    nombre: "Certificados co-creados / a la medida",
    problemaQueResuelve:
      "Competencias específicas alineadas a tu operación; contenido a la medida con Tecmilenio.",
    tipoOrganizacion: "Organizaciones que requieren formación custom.",
    formato: "Online, híbrido o in-company según convenio",
  },
  {
    id: "organizaciones-positivas",
    nombre: "Programas de Organizaciones Positivas (IPBI)",
    problemaQueResuelve:
      "Mejoras clima, retención y desempeño con cultura de bienestar y liderazgo positivo basada en evidencia.",
    tipoOrganizacion: "Empresas e instituciones que quieren cultura sostenible.",
    formato: "Online, híbrido, in-company",
    resultadosIndicadores: ["Diagnósticos de bienestar", "Indicadores PERMA", "Mejora de clima"],
  },
  {
    id: "liderazgo-bienestar-ipbi",
    nombre: "Programas de Liderazgo Positivo y Gestión del Bienestar (IPBI)",
    problemaQueResuelve:
      "Líderes que gestionan el bienestar de sus equipos; Factor Wellbeing y liderazgo positivo medibles.",
    tipoOrganizacion: "Directivos, mandos medios y áreas de personas.",
    formato: "Connect Online, in-company",
    resultadosIndicadores: ["Factor Wellbeing", "Liderazgo positivo medible"],
  },
];

export const casosUso: CasoUso[] = [
  {
    id: "semillero-talento-tech",
    titulo: "Semillero de Talento Tech",
    descripcion:
      "Empresa manufacturera necesitaba técnicos especializados en automatización industrial y programación de PLCs para modernizar sus líneas de producción.",
    resultado: "40 contrataciones en 3 meses",
    empresa: "Empresa manufacturera",
    industria: "Manufactura",
  },
  {
    id: "upskilling-liderazgo",
    titulo: "Upskilling de Liderazgo",
    descripcion:
      "Organización de servicios con alta rotación en mandos medios implementó programa de liderazgo positivo y gestión del bienestar para mejorar retención.",
    resultado: "-15% rotación de personal",
    industria: "Servicios",
  },
  {
    id: "certificaciones-digitales",
    titulo: "Certificaciones Digitales para Equipos",
    descripcion:
      "Empresa de tecnología necesitaba actualizar habilidades de su equipo en herramientas cloud y DevOps mediante certificaciones FIT apilables.",
    resultado: "85% de completación de rutas en 6 meses",
    industria: "Tecnología",
  },
];
