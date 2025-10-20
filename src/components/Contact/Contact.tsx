import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);

    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    try {
      // Send contact form to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      if (data.success) {
        alert('¡Tu mensaje ha sido enviado exitosamente! Te responderemos pronto.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.error || 'Error al enviar mensaje');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Hubo un error al enviar tu mensaje. Por favor inténtalo de nuevo o contacta al +1 (939) 608-3732.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contáctenos Hoy</h2>
          <p className="section-subtitle">Estamos listos para ayudarle a alcanzar sus objetivos</p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Dirección</h4>
                <p>29 Calle Cristina<br />Ponce, Puerto Rico 00730</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Teléfono</h4>
                <p><a href="tel:+17879305755">(787) 930-5755</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/17879305755" target="_blank">+1 (787) 930-5755</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p><a href="mailto:tpemporium@gmail.com">tpemporium@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="contact-details">
                <h4>Instagram</h4>
                <p><a href="https://instagram.com/treeprofessionalemporiumllc" target="_blank">@treeprofessionalemporiumllc</a></p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Solicite una Consulta</h3>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Nombre Completo *" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Correo Electrónico *" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Teléfono *" required />
              </div>
              <div className="form-group">
                <select name="service" required>
                  <option value="">Seleccione un Servicio *</option>
                  <option value="contabilidad">Contabilidad</option>
                  <option value="finanzas">Finanzas</option>
                  <option value="gerencia">Gerencia</option>
                  <option value="rrhh">Recursos Humanos</option>
                  <option value="planificacion">Planificación Financiera</option>
                  <option value="otro">Otro Servicio</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" rows={4} placeholder="Cuéntenos sobre su necesidad..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

