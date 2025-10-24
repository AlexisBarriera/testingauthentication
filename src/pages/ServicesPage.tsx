import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../config/servicesData';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getFeatherIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      'book-open': 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
      'file-text': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
      'trending-up': 'M23 6l-9.5 9.5-5-5L1 18 M23 6h-7 M23 6v7',
      'users': 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
      'search': 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.35-4.35',
      'briefcase': 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2'
    };
    return icons[iconName] || icons['briefcase'];
  };

  return (
    <div className="services-page">
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
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Nosotros</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Equipo</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Reservas</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <section className="services-section" id="servicios">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">
              Nuestros Servicios Profesionales
            </h2>
            <p className="services-subtitle">
              Soluciones financieras completas diseñadas para el éxito de su negocio
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card fade-in">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <svg
                      className="service-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={getFeatherIcon(service.icon)} />
                    </svg>
                  </div>
                  <span className="service-number">
                    {String(service.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-details">
                  {service.details.map((detail, index) => (
                    <li key={index} className="service-detail-item">
                      <svg
                        className="detail-check-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-button"
                >
                  Solicitar Servicio
                  <svg
                    className="button-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Nosotros</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Proceso</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Contacto</a></li>
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
    </div>
  );
};

export default ServicesPage;
