export interface Service {
  id: number;
  name: string;
  description: string;
  details: string[];
  icon: string;
  formLink: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Contabilidad Corporativa",
    description: "Servicios completos de contabilidad para mantener su negocio organizado y cumplir con todas las regulaciones fiscales.",
    details: [
      "Estados financieros mensuales",
      "Conciliaciones bancarias",
      "Análisis de flujo de efectivo",
      "Reportes personalizados"
    ],
    icon: "book-open",
    formLink: "https://forms.google.com/your-form-contabilidad"
  },
  {
    id: 2,
    name: "Preparación de Impuestos",
    description: "Preparación y presentación de impuestos individuales y corporativos con máxima precisión y eficiencia.",
    details: [
      "Planillas individuales",
      "Declaraciones corporativas (AFC, SURI)",
      "Impuestos federales y estatales",
      "Licencias municipales"
    ],
    icon: "file-text",
    formLink: "https://forms.google.com/your-form-impuestos"
  },
  {
    id: 3,
    name: "Planificación Financiera",
    description: "Estrategias personalizadas para asegurar el crecimiento y estabilidad financiera de su negocio o patrimonio personal.",
    details: [
      "Estrategias de inversión",
      "Planificación de retiro",
      "Gestión de deuda",
      "Protección de activos"
    ],
    icon: "trending-up",
    formLink: "https://forms.google.com/your-form-planificacion"
  },
  {
    id: 4,
    name: "Servicios de Nómina",
    description: "Gestión completa de nómina para asegurar pagos precisos y cumplimiento con las regulaciones laborales.",
    details: [
      "Procesamiento de nómina",
      "Retención y pago de IVU",
      "Reportes al DTOP",
      "Certificados de retención"
    ],
    icon: "users",
    formLink: "https://forms.google.com/your-form-nomina"
  },
  {
    id: 5,
    name: "Auditorías",
    description: "Auditorías profesionales para garantizar la precisión y transparencia de sus registros financieros.",
    details: [
      "Auditorías financieras",
      "Auditorías operacionales",
      "Cumplimiento regulatorio",
      "Due diligence"
    ],
    icon: "search",
    formLink: "https://forms.google.com/your-form-auditorias"
  },
  {
    id: 6,
    name: "Consultoría Empresarial",
    description: "Asesoría estratégica para optimizar operaciones y maximizar la rentabilidad de su empresa.",
    details: [
      "Estructura corporativa",
      "Análisis de costos",
      "Mejora de procesos",
      "Planificación estratégica"
    ],
    icon: "briefcase",
    formLink: "https://forms.google.com/your-form-consultoria"
  }
];
