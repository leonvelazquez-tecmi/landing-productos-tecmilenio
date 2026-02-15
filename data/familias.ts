import type { Familia } from "./tipos";

export const familias: Familia[] = [
  {
    id: "preparatoria",
    nombre: "Preparatoria",
    paraQuien: "Jóvenes que buscan concluir el bachillerato con una formación integral.",
    queBuscaLograr: "Título de bachillerato con certificaciones y preparación para la universidad o el trabajo.",
    formatos: ["presencial", "connect_online"],
  },
  {
    id: "carreras_profesionales",
    nombre: "Carreras Profesionales",
    paraQuien: "Personas que buscan su primer título profesional con experiencia laboral integrada.",
    queBuscaLograr: "Licenciatura o ingeniería con certificados apilables (MAPS) y experiencias FIT.",
    formatos: ["presencial", "connect_online"],
  },
  {
    id: "carreras_ejecutivas",
    nombre: "Carreras Ejecutivas",
    paraQuien: "Personas que ya trabajan y quieren un título universitario con flexibilidad.",
    queBuscaLograr: "Licenciatura reconocida sin dejar de trabajar, con formato compatible con la vida laboral.",
    formatos: ["connect_online"],
  },
  {
    id: "posgrados",
    nombre: "Posgrados (Maestrías y Especialidades)",
    paraQuien: "Profesionales que buscan especialización o liderazgo con bienestar.",
    queBuscaLograr: "Maestría o especialidad con enfoque en empleabilidad y desarrollo integral.",
    formatos: ["connect_online", "asincronico"],
  },
  {
    id: "masters",
    nombre: "Másteres",
    paraQuien: "Profesionales que buscan profundizar en áreas tecnológicas o de negocio.",
    queBuscaLograr: "Título de Máster con enfoque práctico y alineado a demanda laboral.",
    formatos: ["connect_online", "asincronico"],
  },
  {
    id: "skilling",
    nombre: "Skilling / Educación Continua",
    paraQuien: "Personas que necesitan actualizar competencias o obtener certificaciones sin un grado completo.",
    queBuscaLograr: "Certificados, rutas de aprendizaje y microcredenciales a tu ritmo.",
    formatos: ["asincronico", "connect_online"],
  },
  {
    id: "soluciones_organizaciones",
    nombre: "Soluciones para Organizaciones",
    paraQuien: "Empresas e instituciones que quieren desarrollar talento y bienestar.",
    queBuscaLograr: "Programas a la medida: Skilling empresarial, Prepa Go, Organizaciones Positivas, liderazgo.",
    formatos: ["connect_online", "asincronico"],
  },
];
