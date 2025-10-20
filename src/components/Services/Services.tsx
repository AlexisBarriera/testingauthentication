import React from 'react';

const Services: React.FC = () => {
  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-navy-primary to-navy-medium relative">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("http://static.photos/office/1200x630/2")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm mb-3">Nuestros Servicios</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Soluciones Financieras <span className="gradient-text">Integrales</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Ofrecemos una gama completa de servicios contables diseñados para satisfacer las necesidades de individuos y empresas en Puerto Rico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">01</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="dollar-sign" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Contabilidad Corporativa</h3>
            <p className="text-gray-300 mb-5">Gestión financiera completa para empresas, incluyendo conciliaciones bancarias, estados financieros y análisis de desempeño.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Estados financieros mensuales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Conciliaciones bancarias</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Análisis de flujo de efectivo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Reportes personalizados</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Llenar Formulario</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">02</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="file-text" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Preparación de Impuestos</h3>
            <p className="text-gray-300 mb-5">Servicio completo de preparación y presentación de planillas para individuos y negocios en PR y EEUU.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Planilla contributiva individual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Planillas corporativas (AFC, SURI)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Impuestos federales y estatales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Patentes municipales</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Llenar Formulario</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">03</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="trending-up" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Planificación Financiera</h3>
            <p className="text-gray-300 mb-5">Estrategias personalizadas para ayudarte a alcanzar tus metas financieras a corto y largo plazo.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Estrategias de inversión</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Planificación para el retiro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Gestión de deudas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Protección de patrimonio</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Llenar Formulario</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">04</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="users" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Servicios de Nómina</h3>
            <p className="text-gray-300 mb-5">Solución completa para la administración de nóminas, cumpliendo con todas las regulaciones locales.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Procesamiento de nómina</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Retención y pago de IVU</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Reportes a DTOP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Certificados de retención</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Llenar Formulario</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">05</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="clipboard" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Auditorías</h3>
            <p className="text-gray-300 mb-5">Servicios de auditoría independiente para garantizar la precisión de tus registros financieros.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Auditorías financieras</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Auditorías operacionales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Cumplimiento regulatorio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Due diligence</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Llenar Formulario</button>
          </div>

          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-bold text-gold/15">06</span>
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-6">
              <i data-feather="briefcase" className="text-navy-primary text-xl"></i>
            </div>
            <h3 className="font-heading text-xl mb-4">Consultoría Empresarial</h3>
            <p className="text-gray-300 mb-5">Asesoramiento estratégico para optimizar las operaciones financieras de tu negocio.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Estructura corporativa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Análisis de costos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Mejora de procesos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">▪</span>
                <span className="text-gray-300">Planificación estratégica</span>
              </li>
            </ul>
            <button onClick={() => navigateToSection('booking')} className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold py-3 rounded-lg text-center hover:shadow-lg transition-all">Llenar Formulario</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
