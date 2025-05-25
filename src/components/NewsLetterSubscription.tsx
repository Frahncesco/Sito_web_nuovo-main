import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react"; // Importa l'icona Mail
import emailjs from "@emailjs/browser";

const NewsletterSubscription = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const hasSeenNewsletter = localStorage.getItem("hasSeenNewsletter");
    if (!hasSeenNewsletter) {
      setIsVisible(true);
      localStorage.setItem("hasSeenNewsletter", "true");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      email: email,
      pdf_url: "https://library.gv.com/design-principles-FTW.pdf",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        if (email) {
          setSuccess(true);
          setEmail("");
        }
      })
      .catch((error) => {
        console.error("Errore invio EmailJS:", error);
        alert("Errore durante l'invio. Riprova più tardi.");
      });
  };

  return (
      <>
        {isVisible && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
        )}

        {isVisible && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-96 z-50">
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
              Rimani aggiornato con le ultime novità, prodotti ed offerte esclusive.
            </p>
            {success ? (
              <p className="text-green-600 font-medium text-center">
                Grazie per esserti iscritto alla nostra newsletter!
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

        {!isVisible && (
          <button
            onClick={() => setIsVisible(true)}
            className="fixed bottom-10 right-10 bg-[#8BAF9C] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#7AA58B] transition-colors z-50 flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Newsletter
          </button>
        )}
      </>
  );
};

export default NewsletterSubscription;
