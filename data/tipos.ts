export type Segmento =
  | "primer_titulo"
  | "adulto_trabajando"
  | "aprendizaje_continuo"
  | "organizacion";

export type Formato = "presencial" | "connect_online" | "asincronico";

export interface MapasFitIpbi {
  usaMAPS?: boolean;
  usaFIT?: boolean;
  usaIPBI?: boolean;
  usaMiProposito?: boolean;
  usaAcompanamiento?: boolean;
}

export interface Programa {
  id: string;
  nombre: string;
  familiaId: string;
  nivel: string;
  segmentoPrincipal: Segmento;
  formatos: Formato[];
  duracion: string;
  periodicidad?: string;
  descripcionCorta: string;
  bullets: [string, string, string];
  mapasFitIpbi: MapasFitIpbi;
  certificaciones?: string[];
  insignias?: boolean;
  esquemaPrecio?: string;
  competenciasTecnicas?: string[];
  competenciasHumanas?: string[];
  competenciasTrascendentes?: string[];
  resultadosEsperados?: string[];
  certificadosMAPS?: string[];
}

export interface Familia {
  id: string;
  nombre: string;
  paraQuien: string;
  queBuscaLograr: string;
  formatos: Formato[];
}

export interface FormatoEstudio {
  id: Formato;
  nombre: string;
  descripcion: string;
  paraQuienIdeal: string;
  familiaIds: string[];
}

export interface PilotoFormato {
  id: string;
  nombre: string;
  descripcion: string;
  esPiloto: true;
}

export interface SolucionOrganizacion {
  id: string;
  nombre: string;
  problemaQueResuelve: string;
  tipoOrganizacion: string;
  formato: string;
  resultadosIndicadores?: string[];
}

export interface BloqueTransversal {
  id: string;
  titulo: string;
  contenido: string[];
}

export interface MetricaHero {
  id: string;
  valor: string;
  descripcion: string;
}
