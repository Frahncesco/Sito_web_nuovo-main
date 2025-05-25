import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function OurStory() {
  return (
    <div>
      <section className="py-20 bg-[#8BAF9C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Testo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-[535px] flex flex-col"
            >
              <h2 className="text-3xl font-light text-[#333333] mb-4">
              Il racconto della nostra <span className="font-medium">rinascita</span>
              </h2>

              <div className="flex-1 overflow-y-auto pr-4 space-y-6 text-[#555555]">
              <p> Fondata a Torino nel 2028, <strong>Atelier 35</strong> è un’azienda di design industriale specializzata nella creazione di oggetti d’arredo e complementi per la casa, riconoscibili per uno stile formale definito e coerente. Ogni progetto nasce da una visione estetica chiara e da un impegno verso la qualità e la responsabilità. </p> 
              <p> Nel 2035, l’azienda ha intrapreso un percorso di trasformazione che ha ridefinito il proprio ruolo: non più solo produttrice di oggetti, ma promotrice di un design rigenerativo, inclusivo e consapevole. Questa evoluzione ha portato a un modello che integra sostenibilità ambientale e impatto sociale positivo. </p> 
              <p> I principi del design circolare guidano l’intero processo: dalla scelta di materiali riciclabili e durevoli alla progettazione di prodotti pensati per essere riparati, riutilizzati e reintrodotti nei cicli naturali. L’adozione di tecnologie a basso impatto e pratiche produttive trasparenti rafforza questo impegno. </p> 
              <p> Atelier 35 promuove l’inclusione sociale coinvolgendo una rete di collaboratori e studi di design che condividono valori comuni, con l’obiettivo di generare valore non solo estetico, ma anche culturale e ambientale. </p> 
              <p> Oggi, l’azienda è riconosciuta a livello internazionale per la capacità di coniugare chiarezza formale e responsabilità. Le sue collezioni raccontano una visione del design come strumento di relazione, cura e rigenerazione. </p> 
              <p> Lo sguardo al futuro è guidato da una missione precisa: contribuire a un sistema abitativo più equo, sostenibile e vitale, in cui l’industria del design sia al servizio della vita, della diversità e del pianeta. </p>
              </div>
              </motion.div>

            {/* Immagine */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[535px] flex"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80"
                  alt="Natural Environment with Wooden Furniture"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5 sm:p-6 md:p-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=blondegirl&hair=long&hairColor=FFD700&mouth=smile" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div className="text-white">
                        <div className="font-medium text-sm sm:text-base">The New Atelier 35</div>
                        <div className="text-xs sm:text-sm opacity-70">
                          Il domani della sostenibilità circolare
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Triangolo sempre visibile ma responsive */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg p-2 flex items-center justify-center">
                <div className="relative">
                  <div className="opacity-20">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 5L55 45H5L30 5Z"
                        stroke="#333333"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="15"
                        stroke="#8BAF9C"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 15C15 12.2386 17.2386 10 20 10C22.7614 10 25 12.2386 25 15C25 17.7614 22.7614 20 20 20"
                        stroke="#D9C5B2"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 25C15 22.2386 17.2386 20 20 20C22.7614 20 25 22.2386 25 25C25 27.7614 22.7614 30 20 30"
                        stroke="#8BAF9C"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;
