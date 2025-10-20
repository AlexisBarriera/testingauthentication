import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-primary border-t border-gold/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-heading text-2xl mb-2">Shaddai Enterprises LLC</h3>
            <p className="text-gray-400 text-sm">Servicios de contabilidad y asesoría financiera en Puerto Rico.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <i data-feather="facebook" className="w-5 h-5"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <i data-feather="linkedin" className="w-5 h-5"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <i data-feather="instagram" className="w-5 h-5"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gold/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 Shaddai Enterprises LLC. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Términos de servicio</a>
            <a href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
