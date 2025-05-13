import React, { useEffect, useState } from 'react';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (choice: 'all' | 'essential' | 'none') => {
    localStorage.setItem('cookie-consent', choice);
    setVisible(false);
    console.log(`Utente ha selezionato: ${choice}`);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-6 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        
        {/* Testo compatto a sinistra */}
        <p className="text-sm sm:w-2/3 leading-relaxed">
          Questo sito utilizza cookie per garantire il funzionamento tecnico della piattaforma, analizzare dati di utilizzo 
          e migliorare l’esperienza utente. Alcuni cookie possono essere usati per fini pubblicitari e condivisi con partner 
          selezionati. Continuando, accetti le condizioni indicate riguardo l’uso dei cookie.
        </p>

        {/* Pulsanti a destra */}
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <button
            onClick={() => handleConsent('all')}
            className="bg-[#7A9A89] hover:bg-[#6c897a] text-white px-5 py-2 rounded text-sm text-left"
          >
            Accetto tutti i cookie
          </button>
          <button
            onClick={() => handleConsent('essential')}
            className="bg-[#7A9A89] hover:bg-[#6c897a] text-white px-5 py-2 rounded text-sm text-left"
          >
            Accetto solo i cookie essenziali
          </button>
          <button
            onClick={() => handleConsent('none')}
            className="bg-[#7A9A89] hover:bg-[#6c897a] text-white px-5 py-2 rounded text-sm text-left"
          >
            Rifiuto tutti i cookie
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;