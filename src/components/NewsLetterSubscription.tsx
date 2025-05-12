import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [receiveMagazine, setReceiveMagazine] = useState(false);
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);
  const [submittedWithMagazine, setSubmittedWithMagazine] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      email: email,
      address: receiveMagazine ? address : "Non richiesto",
      pdf_url: "https://www.matematika.it/public/allegati/35/06_14_Geometria_analitica_sintesi_2_7.pdf",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmittedWithMagazine(receiveMagazine);
        setSuccess(true);
        setEmail("");
        setAddress("");
        setReceiveMagazine(false);
      })
      .catch((error) => {
        console.error("Errore invio EmailJS:", error);
        alert("Errore durante l'invio. Riprova più tardi.");
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-[#2E3A59] mb-3 text-center">
        📨 Iscriviti alla Newsletter
      </h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Ricevi aggiornamenti, novità e offerte esclusive direttamente nella tua casella email.
      </p>

      {success ? (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md text-center font-medium">
          {submittedWithMagazine
            ? "Grazie per esserti iscritto e per aver richiesto la rivista! La riceverai a casa."
            : "Grazie per esserti iscritto alla nostra newsletter!"}
        </div>
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
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="receiveMagazine"
              checked={receiveMagazine}
              onChange={(e) => setReceiveMagazine(e.target.checked)}
              className="w-5 h-5 accent-blue-900 border-gray-300 rounded focus:ring-2 focus:ring-blue-900"
            />
            <label htmlFor="receiveMagazine" className="text-sm text-gray-700">
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
  );
};

export default NewsletterSubscription;