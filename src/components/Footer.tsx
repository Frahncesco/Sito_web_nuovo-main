const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer id="footer" className="bg-[#1c2841] text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div className="text-center md:text-left space-y-3">
              <h3 className="font-medium text-base md:text-lg">Circulus Design</h3>
              <p className="text-xs md:text-sm text-gray-300">
                Soluzioni di design rigenerativo all’avanguardia sin dalla nostra trasformazione nel 2025.
              </p>
            </div>

            {/* Right Side */}
            <div className="text-center md:text-left text-xs md:text-sm space-y-1">
              <h2 className="text-sm md:text-base font-semibold mb-1">Contattaci</h2>
              <p>Email: atelier35official@gmail.com</p>
              <p>Indirizzo Sede: Via Gioberti, 64</p>
              <p>Indirizzo filiale: Via Cigna, 152</p>
              <p>Orari: Lun-Ven 9:00-18:00</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400">
            <p className="mb-2 md:mb-0 text-center">
              © 2035 Circulus Design. All rights reserved. Committed to regenerative futures.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;