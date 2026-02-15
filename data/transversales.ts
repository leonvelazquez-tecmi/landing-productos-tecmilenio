import type { BloqueTransversal, MetricaHero } from "./tipos";

export const metricasHero: MetricaHero[] = [
  {
    id: "empleo",
    valor: "9 de cada 10",
    descripcion: "personas que estudian en Tecmilenio se gradúan con empleo.",
  },
  {
    id: "fit",
    valor: "100%",
    descripcion: "egresan con experiencias integradas al trabajo (FIT).",
  },
  {
    id: "redhat",
    valor: "90%",
    descripcion:
      "de aprobación en Red Hat al primer intento (vs ~60% promedio mundial). Universidad #1 en México en estudiantes certificados Red Hat.",
  },
];

export const bloquesTransversales: BloqueTransversal[] = [
  {
    id: "maps",
    titulo: "MAPS",
    contenido: [
      "El estudiante cursa certificados, no materias sueltas. Cada certificado agrupa competencias y tiene valor en el mundo laboral.",
      "Decenas de miles de certificados MAPS emitidos, cada uno con su insignia digital verificable.",
      "Apilabilidad: aproximadamente 20 certificados equivalen a título y cédula de Profesional Asociado en unos 2 años. Luego puede seguir apilando hacia la licenciatura completa, revalidando certificados (no se pierde nada).",
      "Cada certificado genera insignias digitales (blockchain/Credly) compartibles en LinkedIn con metadata verificable.",
      "Certificados co-creados con empresas. Claim: 90% de quienes presentan la certificación Red Hat la aprueban al primer intento (vs ~60% promedio mundial); Tecmilenio se posiciona como la universidad #1 en México en estudiantes con esta certificación.",
    ],
  },
  {
    id: "fit",
    titulo: "FIT",
    contenido: [
      "FIT exige experiencias integradas al trabajo: semestre empresarial, prácticas, retos, emprendimiento social.",
      "100% de egresados con experiencia laboral; 9 de cada 10 con empleo.",
      "Relación directa con productos bandera: carreras profesionales, ejecutivas, posgrados.",
    ],
  },
  {
    id: "ipbi",
    titulo: "IPBI / Factor Wellbeing",
    contenido: [
      "El Instituto de Bienestar e Inteligencia Positiva (IPBI) diseña y opera programas de bienestar con base en psicología positiva (PERMA) y evidencia aplicada.",
      "Para personas: materias obligatorias de bienestar, certificaciones en psicología positiva, programa Vivir a Consciencia, liderazgo interior.",
      "Para organizaciones: Organizaciones Positivas, liderazgo positivo, diagnósticos de bienestar, universidades corporativas con bienestar integrado.",
    ],
  },
  {
    id: "mi-proposito",
    titulo: "Mi Propósito: tu brújula",
    contenido: [
      "Herramienta digital abierta y gratuita, asistida por IA: descubres y declaras tu propósito de vida en 20–30 minutos.",
      "Punto de entrada al ecosistema Tecmilenio: puedes usarla aunque aún no seas estudiante; después se te sugiere una ruta de certificados y programas alineada a tu propósito.",
      "Alineada a la meta de impactar a 1 millón de personas en 2030.",
    ],
  },
  {
    id: "acompanamiento",
    titulo: "Mentores y coaches: no navegas solo",
    contenido: [
      "Mentores: curan certificados y rutas MAPS según tu propósito y contexto.",
      "Coaches: acompañan trayectorias más intensivas (Profesional Asociado, pilotos IA) en competencias y uso profundo de contenidos.",
      "Enfoque apreciativo y alineación propósito–ruta académica–empleabilidad.",
    ],
  },
];

export const sintesisDiferenciadores = {
  maps: "MAPS = lo que sabes hacer.",
  fit: "FIT = lo que ya hiciste.",
  ipbi: "IPBI / Factor Wellbeing + Mi Propósito + Acompañamiento = quién eres, por qué haces lo que haces y cómo te sostenemos en el camino.",
};

export const textoContextoTEC =
  "Tecmilenio forma parte del grupo educativo del Tecnológico de Monterrey. No somos el Tec de Monterrey ni aspiramos a serlo: somos su modelo complementario, enfocado en empleabilidad, bienestar y movilidad social para las personas y organizaciones que sostienen el motor económico de las comunidades.";

export const narrativaOrganizaciones =
  "Como parte del grupo educativo del Tecnológico de Monterrey, Tecmilenio se especializa en programas para el grueso de tu fuerza laboral: mandos medios, operativos, talento emergente. No solo para la élite directiva. Los programas de bienestar y cultura son diseñados y operados por el IPBI, con base en psicología positiva (PERMA) y evidencia aplicada.";
