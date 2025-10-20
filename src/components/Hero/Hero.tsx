import React from 'react';

const Hero: React.FC = () => {
  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-navy-primary to-navy-medium relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("http://static.photos/finance/1200x630/1")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col justify-center h-full relative z-10">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <p className="text-gold uppercase tracking-widest text-sm mb-4">
             <img 
              src="https://files.catbox.moe/oilzqt.png" 
              alt="Excelencia en Gestión Financiera" 
              className="inline-block mx-auto w-auto h-52 object-contain" 
            />
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Servicios Profesionales de <span className="gradient-text">Finanzas</span></h1>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto my-8"></div>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">Tu socio confiable para soluciones financieras integrales en Puerto Rico. Más de 15 años de experiencia ayudando a empresas y particulares.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigateToSection('booking')} className="bg-gradient-to-r from-gold to-gold-dark text-navy-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">Programar Consulta</button>
            <button onClick={() => navigateToSection('services')} className="border-2 border-gold text-gold font-semibold px-8 py-3 rounded-full hover:bg-gold hover:text-navy-primary transition-all duration-300">Saber Más</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto">
          <div className="glass-card rounded-xl p-6 transition-all hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-4">
              <i data-feather="dollar-sign" className="text-navy-primary"></i>
            </div>
            <h3 className="font-heading text-xl mb-2">Contabilidad Corporativa</h3>
            <p className="text-gray-300">Gestión financiera integral para empresas de todos los tamaños.</p>
          </div>
          <div className="glass-card rounded-xl p-6 transition-all hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-4">
              <i data-feather="file-text" className="text-navy-primary"></i>
            </div>
            <h3 className="font-heading text-xl mb-2">Preparación de Impuestos</h3>
            <p className="text-gray-300">Servicio completo de planillas para individuos y negocios.</p>
          </div>
          <div className="glass-card rounded-xl p-6 transition-all hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-4">
              <i data-feather="trending-up" className="text-navy-primary"></i>
            </div>
            <h3 className="font-heading text-xl mb-2">Planificación Financiera</h3>
            <p className="text-gray-300">Estrategias personalizadas para maximizar tu patrimonio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
