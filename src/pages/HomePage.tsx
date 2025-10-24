import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingCalendar from '../components/BookingCalendar/BookingCalendar';
import Contact from '../components/Contact/Contact';
import AIChatAssistant from '../components/AIChatAssistant';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }, []);

  const handleServicesClick = () => {
    navigate('/servicios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <img src="https://files.catbox.moe/o6we45.png" alt="Tree Professional Emporium Logo" className="logo-img" />
              <span className="logo-text">Tree Professional Emporium</span>
            </div>
            <button className="mobile-menu-toggle" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="nav-menu">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); handleServicesClick(); }}>Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#equipo">Equipo</a></li>
              <li><a href="#reservas">Reservas</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Servicios Profesionales</span>
              <br />para el Éxito de su Empresa
            </h1>
            <p className="hero-subtitle">Soluciones integrales en contabilidad, finanzas, gerencia, recursos humanos y planificación financiera. Su socio estratégico en Ponce, Puerto Rico.</p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn btn-primary">Consulta Gratuita</a>
              <button onClick={handleServicesClick} className="btn btn-secondary">Nuestros Servicios</button>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Services Section Preview */}
      <section id="servicios" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Servicios Profesionales</h2>
            <p className="section-subtitle">Soluciones completas para el crecimiento y estabilidad de su negocio</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>Contabilidad</h3>
              <p>Servicios contables completos, preparación de estados financieros, conciliaciones bancarias, y manejo de cuentas por pagar y cobrar.</p>
              <ul className="service-list">
                <li>Estados Financieros</li>
                <li>Contabilidad General</li>
                <li>Análisis de Costos</li>
                <li>Auditorías Internas</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Finanzas</h3>
              <p>Asesoría financiera estratégica, análisis de inversiones, proyecciones financieras y optimización de recursos económicos.</p>
              <ul className="service-list">
                <li>Análisis Financiero</li>
                <li>Proyecciones y Presupuestos</li>
                <li>Asesoría en Inversiones</li>
                <li>Control de Flujo de Caja</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Gerencia</h3>
              <p>Consultoría gerencial, desarrollo de estrategias empresariales, mejora de procesos y optimización organizacional.</p>
              <ul className="service-list">
                <li>Planificación Estratégica</li>
                <li>Gestión de Proyectos</li>
                <li>Mejora de Procesos</li>
                <li>Consultoría Empresarial</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Recursos Humanos</h3>
              <p>Administración de personal, reclutamiento, nómina, beneficios, cumplimiento laboral y desarrollo organizacional.</p>
              <ul className="service-list">
                <li>Administración de Nómina</li>
                <li>Reclutamiento y Selección</li>
                <li>Manejo de Beneficios</li>
                <li>Cumplimiento Laboral</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <h3>Planificación Financiera</h3>
              <p>Desarrollo de planes financieros personalizados, estrategias de ahorro, planificación de retiro y protección patrimonial.</p>
              <ul className="service-list">
                <li>Planes Financieros Personalizados</li>
                <li>Estrategias de Inversión</li>
                <li>Planificación de Retiro</li>
                <li>Protección de Activos</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <h3>Servicios Adicionales</h3>
              <p>Preparación de impuestos, representación ante agencias gubernamentales, y otros servicios profesionales especializados.</p>
              <ul className="service-list">
                <li>Planificación Tributaria</li>
                <li>Consultoría Legal-Financiera</li>
                <li>Análisis de Negocios</li>
                <li>Asesoría Personalizada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-wrapper">
                <img src="https://files.catbox.moe/o6we45.png" alt="Tree Professional Emporium" className="about-logo" />
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-title">El Concepto Emporium</h2>
              <p><strong>Tree Professional Emporium</strong> es una organización dedicada a brindar multiplicidad de servicios profesionales a sus clientes mediante la integración de un equipo de trabajo altamente calificado.</p>
              <p>Nuestro modelo de negocio "Emporium" nos permite ofrecer una amplia gama de servicios especializados bajo un mismo techo, proporcionando soluciones integrales que se adaptan a las necesidades específicas de cada cliente.</p>
              <p>Con sede en Ponce, Puerto Rico, servimos a empresas y profesionales que buscan excelencia, confiabilidad y resultados medibles en sus operaciones financieras y administrativas.</p>
              <div className="about-features">
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Equipo Multidisciplinario</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Servicios Integrados</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Atención Personalizada</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Resultados Medibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Equipo de Expertos</h2>
            <p className="section-subtitle">Profesionales dedicados a su éxito empresarial</p>
          </div>

          <div className="team-member left">
            <div className="team-image">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop" alt="Director Financiero" />
            </div>
            <div className="team-content">
              <span className="team-label">DIRECTOR FINANCIERO</span>
              <h3>Experto en Finanzas Corporativas</h3>
              <p>Con más de 15 años de experiencia en análisis financiero y planificación estratégica, nuestro equipo de finanzas ofrece soluciones innovadoras para el crecimiento sostenible de su empresa. Especializados en proyecciones financieras, optimización de recursos y estrategias de inversión.</p>
              <div className="team-signature">
                <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,40 Q30,20 50,40 T90,40" stroke="currentColor" fill="none" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="team-member right">
            <div className="team-content">
              <span className="team-label">DIRECTORA DE CONTABILIDAD</span>
              <h3>Especialista en Contabilidad y Auditoría</h3>
              <p>Liderando nuestro departamento de contabilidad con precisión y dedicación. Experta en estados financieros, cumplimiento fiscal, y auditorías internas. Nuestro compromiso es mantener sus finanzas en orden perfecto, permitiéndole enfocarse en hacer crecer su negocio con total tranquilidad.</p>
              <div className="team-signature">
                <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,40 Q30,60 50,40 T90,40" stroke="currentColor" fill="none" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="team-image">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" alt="Directora de Contabilidad" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
            <p className="section-subtitle">Un enfoque estructurado para garantizar su éxito</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Consulta Inicial</h3>
              <p>Analizamos sus necesidades y objetivos para entender a fondo su situación actual y metas futuras.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Propuesta Personalizada</h3>
              <p>Desarrollamos un plan de acción específico con servicios adaptados a sus requerimientos únicos.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Implementación</h3>
              <p>Ejecutamos el plan con profesionalismo y eficiencia, manteniéndolo informado en cada paso.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Seguimiento Continuo</h3>
              <p>Monitoreamos resultados, ajustamos estrategias y brindamos soporte constante para su éxito sostenido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">¿Por Qué Elegirnos?</h2>
            <p className="section-subtitle">Ventajas de trabajar con Tree Professional Emporium</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-award"></i>
              <h3>Experiencia Comprobada</h3>
              <p>Años de experiencia sirviendo a empresas y profesionales en Puerto Rico.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-handshake"></i>
              <h3>Confianza y Transparencia</h3>
              <p>Relaciones basadas en la honestidad, confidencialidad y comunicación clara.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-cogs"></i>
              <h3>Soluciones Integrales</h3>
              <p>Todos los servicios que necesita en un solo lugar, ahorrando tiempo y recursos.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-headset"></i>
              <h3>Soporte Dedicado</h3>
              <p>Atención personalizada y respuesta rápida a sus consultas y necesidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Calendar - React Component */}
      <div id="reservas">
        <BookingCalendar />
      </div>

      {/* Contact Section - React Component */}
      <div id="contacto">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img src="https://files.catbox.moe/o6we45.png" alt="TPE Logo" className="footer-logo" />
              <h3>Tree Professional Emporium</h3>
              <p>Su socio estratégico en servicios profesionales. Soluciones integrales para el éxito de su empresa.</p>
              <div className="social-links">
                <a href="https://instagram.com/treeprofessionalemporiumllc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/17879305755" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:tpemporium@gmail.com" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#servicios">Contabilidad</a></li>
                <li><a href="#servicios">Finanzas</a></li>
                <li><a href="#servicios">Gerencia</a></li>
                <li><a href="#servicios">Recursos Humanos</a></li>
                <li><a href="#servicios">Planificación Financiera</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios" onClick={(e) => { e.preventDefault(); handleServicesClick(); }}>Servicios</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#proceso">Proceso</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contacto</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> 29 Calle Cristina, Ponce, PR 00730</li>
                <li><i className="fas fa-phone"></i> <a href="tel:+17879305755">(787) 930-5755</a></li>
                <li><i className="fas fa-envelope"></i> <a href="mailto:tpemporium@gmail.com">tpemporium@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Tree Professional Emporium LLC. Todos los derechos reservados. | Ponce, Puerto Rico</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default HomePage;
