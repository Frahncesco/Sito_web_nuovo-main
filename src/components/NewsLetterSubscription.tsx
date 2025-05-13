import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react"; // Importa l'icona Mail

const NewsletterSubscription = () => {
  const [isVisible, setIsVisible] = useState(false); // Stato per gestire la visibilità della card
  const [email, setEmail] = useState("");
  const [receiveMagazine, setReceiveMagazine] = useState(false);
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  // Controlla se l'utente ha già visto la card
  useEffect(() => {
    const hasSeenNewsletter = localStorage.getItem("hasSeenNewsletter");
    if (!hasSeenNewsletter) {
      setIsVisible(true); // Mostra la card solo la prima volta
      localStorage.setItem("hasSeenNewsletter", "true"); // Salva lo stato
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail("");
      setAddress("");
      setReceiveMagazine(false); // Resetta la spunta dopo l'invio
    }
  };

  return (
    <>
      {/* Overlay sfocato */}
      {isVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
      )}

      {/* Card della newsletter */}
      {isVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 sm:p-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-md z-50">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
          <h2 className="text-2xl font-semibold text-[#333333] mb-4">
            Iscriviti alla nostra Newsletter
          </h2>
          <p className="text-sm text-[#555555] mb-6">
            Rimani aggiornato con le ultime novità, prodotti ed offerte
            esclusive.
          </p>
          {success ? (
            <p className="text-green-600 font-medium">
              {receiveMagazine
                ? "Grazie per esserti iscritto alla nostra newsletter e per aver richiesto la rivista! Ti sarà consegnata a casa."
                : "Grazie per esserti iscritto alla nostra newsletter!"}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="📧 La tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BAF9C]"
                required
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="receiveMagazine"
                  checked={receiveMagazine}
                  onChange={(e) => setReceiveMagazine(e.target.checked)}
                  className="w-5 h-5 accent-blue-900 border-gray-300 rounded focus:ring-2 focus:ring-blue-900"
                />
                <label
                  htmlFor="receiveMagazine"
                  className="text-sm text-gray-700"
                >
                  Voglio ricevere la rivista a casa
                </label>
              </div>
              {receiveMagazine && (
                <input
                  type="text"
                  placeholder="🏡 Il tuo indirizzo"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BAF9C]"
                  required
                />
              )}
              <button
                type="submit"
                className="bg-[#8BAF9C] text-white font-medium py-3 rounded-lg hover:bg-[#7AA58B] transition-colors"
              >
                Iscriviti
              </button>
            </form>
          )}
        </div>
      )}

      {/* Pulsante per riaprire la card */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-10 right-10 bg-[#8BAF9C] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#7AA58B] transition-colors z-50 flex items-center gap-2"
        >
          <Mail className="h-5 w-5" /> {/* Icona della lettera */}
          Newsletter
        </button>
      )}
    </>
  );
};

export default NewsletterSubscription;