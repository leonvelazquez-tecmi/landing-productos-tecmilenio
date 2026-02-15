import type { FormatoEstudio, PilotoFormato } from "./tipos";

export const formatosEstudio: FormatoEstudio[] = [
  {
    id: "presencial",
    nombre: "Presencial",
    descripcion:
      "Vida de campus, laboratorios y actividades en sitio. Pensado para Prepa y Carreras Profesionales semestrales, con vivencia diaria y acompañamiento cercano.",
    paraQuienIdeal: "Jóvenes que pueden asistir con regularidad al campus.",
    familiaIds: ["preparatoria", "carreras_profesionales"],
  },
  {
    id: "connect_online",
    nombre: "Connect Online",
    descripcion:
      "Clases en vivo virtuales (y grabadas cuando aplique), con acceso a Espacios Connect si aplica. Flexibilidad sin perder interacción con profesores y compañeros.",
    paraQuienIdeal: "Carreras ejecutivas, maestrías, másteres, Profesional Asociado y personas que trabajan; ideal cuando quieres clases en vivo y estructura.",
    familiaIds: [
      "preparatoria",
      "carreras_profesionales",
      "carreras_ejecutivas",
      "posgrados",
      "masters",
      "skilling",
      "soluciones_organizaciones",
    ],
  },
  {
    id: "asincronico",
    nombre: "Asincrónico",
    descripcion:
      "Cursos y rutas a tu ritmo (Skilling, educación continua, algunas especialidades). Contenido disponible cuando puedas.",
    paraQuienIdeal: "Actualización específica y personas que quieren avanzar entre otros compromisos.",
    familiaIds: ["posgrados", "masters", "skilling", "soluciones_organizaciones"],
  },
];

export const pilotosFormatos: PilotoFormato[] = [
  {
    id: "connect_grupos",
    nombre: "Connect Grupos (Piloto)",
    descripcion:
      "Piloto: un profesor en vivo atiende varios campus a la vez; en cada campus un teaching assistant (estudiante avanzado) facilita la actividad presencial. Nos permite abrir más carreras en campus medianos y pequeños sin sacrificar calidad docente.",
    esPiloto: true,
  },
];
