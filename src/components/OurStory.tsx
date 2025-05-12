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
                <p>
                Nel 2025, abbiamo intrapreso un viaggio profondo e senza compromessi - un percorso che ha ridefinito non solo la missione della nostra azienda, ma anche la natura stessa del nostro rapporto con il pianeta. Ciò che iniziò come un cambiamento strategico si trasformò presto in una trasformazione olistica, guidata da una visione audace e dalla ferma convinzione che il design debba servire sia le persone che il pianeta. Con il supporto di un team appassionato e multidisciplinare di innovatori, abbiamo smantellato le convenzioni delle pratiche di design tradizionali e gettato le basi per qualcosa di radicalmente diverso: un'impresa rigenerativa dedicata alla guarigione del pianeta e al cambiamento sistemico.
                </p>

                <p>
                La nostra trasformazione non è stata graduale, ma fondamentale. Abbiamo abbracciato completamente i principi del design circolare e rigenerativo, andando oltre la sostenibilità come obiettivo e adottandola come base. Nel nostro nuovo paradigma, i prodotti sono concepiti come elementi viventi all'interno di un più ampio sistema ecologico e sociale - progettati non solo per durare, ma per evolversi continuamente, rigenerarsi e contribuire positivamente alla biosfera. Vediamo ogni prodotto come un potenziale agente di rigenerazione: uno strumento per ricostruire il suolo, purificare l'aria, sequestrare carbonio e nutrire la biodiversità. Il design, per noi, non è più un processo di creazione di oggetti - è una responsabilità, un dialogo e una promessa alle generazioni future.
                </p>

                <p>
                In ogni fase della creazione - dall'approvvigionamento dei materiali alla produzione, dal ciclo di vita del prodotto alla sua reintegrazione nell'ecosistema - ci poniamo una domanda fondamentale: Questo dà più di quanto prenda? La nostra etica del design è radicata nella convinzione che estetica ed etica non siano in contrasto, ma intrinsecamente connesse. La bellezza non è solo come un prodotto appare, ma come si comporta nel mondo che abita - come nutre, ripristina ed eleva.
                </p>

                <p>
                Ora, dieci anni dopo quel cambiamento catalizzatore, ci ergiamo come orgogliosi pionieri del movimento del design rigenerativo. I nostri prodotti e progetti sono testimonianze viventi di ciò che è possibile quando l'innovazione è guidata dall'integrità e dall'interdipendenza. Dai mobili biodegradabili realizzati con micelio ai sistemi di illuminazione autosufficienti alimentati da organismi bioluminescenti, ogni creazione nasce da un impegno verso la circolarità, la resilienza e l'intelligenza ecologica.
                </p>

                <p>
                Ma la nostra storia non riguarda solo l'innovazione - riguarda la cura. Riguarda il riconoscimento dell'urgente necessità di un cambiamento sistemico e la scelta di guidare con l'esempio. Riguarda il progettare con empatia - per le comunità, per gli ecosistemi e per i futuri invisibili che stiamo plasmando con ogni decisione. Non ci accontentiamo più di minimizzare i danni; siamo qui per creare un impatto netto positivo, per riparare ciò che è stato danneggiato e per immaginare - e costruire - un futuro in cui tutta la vita possa prosperare.
                </p>

                <p>
                Guardando avanti, la nostra missione rimane chiara e incrollabile: spingere i confini di ciò che il design può ottenere, favorire culture rigenerative e co-creare un mondo in cui il design non sia solo bello e funzionale, ma anche profondamente giusto, vitale e curativo.
                </p>
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
