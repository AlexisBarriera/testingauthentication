import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-navy-medium relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm mb-3">Sobre Nosotros</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Dedicados a Tu <span className="gradient-text">Excelencia Financiera</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="font-heading text-2xl mb-6">Tu Profesional de Contabilidad de Confianza</h3>
            <p className="text-gray-300 mb-6">En Shaddai Enterprises LLC, nos enorgullece ofrecer servicios de contabilidad de alto nivel con un enfoque personalizado. Nuestro equipo de expertos está comprometido con brindar soluciones financieras que impulsen el crecimiento de tu negocio o patrimonio personal.</p>
            <p className="text-gray-300 mb-8">Con sede en Ponce, Puerto Rico, hemos estado sirviendo a la comunidad local por más de 15 años, construyendo relaciones basadas en la confianza y resultados excepcionales.</p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-navy-primary/10 to-navy-medium/10 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <i data-feather="check" className="text-navy-primary text-sm"></i>
                  </div>
                  <h4 className="font-semibold">Certificados CPA</h4>
                </div>
                <p className="text-gray-300 mt-2 ml-11">Profesionales certificados con licencias activas en PR y EEUU.</p>
              </div>
              <div className="bg-gradient-to-r from-navy-primary/10 to-navy-medium/10 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <i data-feather="check" className="text-navy-primary text-sm"></i>
                  </div>
                  <h4 className="font-semibold">15+ Años de Experiencia</h4>
                </div>
                <p className="text-gray-300 mt-2 ml-11">Amplia trayectoria ayudando a clientes con sus necesidades financieras.</p>
              </div>
              <div className="bg-gradient-to-r from-navy-primary/10 to-navy-medium/10 p-4 rounded-lg border-l-4 border-gold transition-all hover:translate-x-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <i data-feather="check" className="text-navy-primary text-sm"></i>
                  </div>
                  <h4 className="font-semibold">Software de Vanguardia</h4>
                </div>
                <p className="text-gray-300 mt-2 ml-11">Utilizamos las últimas tecnologías para garantizar precisión y eficiencia.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="font-heading text-2xl mb-6 text-center lg:text-left">Nuestros Valores Fundamentales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6 border-t-4 border-gold">
                <h4 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <i data-feather="shield" className="text-gold"></i> Integridad
                </h4>
                <p className="text-gray-300">Mantenemos los más altos estándares éticos en todas nuestras prácticas contables y financieras.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-t-4 border-gold">
                <h4 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <i data-feather="award" className="text-gold"></i> Excelencia
                </h4>
                <p className="text-gray-300">Nos comprometemos a ofrecer servicios de la más alta calidad con atención meticulosa a los detalles.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-t-4 border-gold">
                <h4 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <i data-feather="heart" className="text-gold"></i> Confianza
                </h4>
                <p className="text-gray-300">Cultivamos relaciones duraderas basadas en la transparencia y la confidencialidad.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-t-4 border-gold">
                <h4 className="font-heading text-xl mb-3 flex items-center gap-2">
                  <i data-feather="zap" className="text-gold"></i> Innovación
                </h4>
                <p className="text-gray-300">Adoptamos tecnologías emergentes para brindar soluciones financieras modernas y eficientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
