// Home.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, RefreshCw, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useNavigate, Link } from "react-router-dom";
import NewsletterSubscription from "./NewsLetterSubscription";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Sedia CH23",
      description: "Sedia da pranzo in rovere con seduta intrecciata in corda naturale, perfetta per ambienti eleganti e sostenibili.",
      image: "https://res.cloudinary.com/dfwzl0ito/image/fetch/c_scale,w_1920,f_auto/https%3A%2F%2Fadmincms.carlhansen.com%2Fglobalassets%2Fproducts%2Fchairs%2Fch23%2Fch23_oak_oil_natural_papercord_detail.jpg"
    },
    {
      id: 2,
      name: "Poltrona Lounge CH07",
      description: "Elegante chaise longue in legno curvato e pelle, icona del design danese moderno e sostenibile.",
      image: "https://res.cloudinary.com/dfwzl0ito/image/fetch/c_scale,w_1920,f_auto/https%3A%2F%2Fadmincms.carlhansen.com%2Fglobalassets%2Fproducts%2Floungechairs%2Fch07%2Fch07_lifestyle_new_4.5_.jpg"
    },
    {
      id: 3,
      name: "Tavolo da pranzo CH006",
      description: "Tavolo allungabile in rovere massello con finitura a olio naturale, ideale per spazi flessibili e funzionali.",
      image: "https://res.cloudinary.com/dfwzl0ito/image/fetch/c_scale,w_1920,f_auto/https%3A%2F%2Fadmincms.carlhansen.com%2Fglobalassets%2Fproducts%2Fdining-tables%2Fch006%2Fch36_ch53_oak_oil_papercord_natural_ch006_oak_oil_ek61_o240.jpg"
    },
    {
      id: 4,
      name: "Tavolino CH008",
      description: "Tavolino rotondo in legno di teak e rovere, raffinato e resistente, adatto sia a spazi moderni che tradizionali.",
      image: "https://res.cloudinary.com/dfwzl0ito/image/fetch/c_scale,w_1920,f_auto/https%3A%2F%2Fadmincms.carlhansen.com%2Fglobalassets%2Fproducts%2Fcoffee-tables%2Fch008%2Fch22_teak_oak_oil_papercord_natural_ch008_teak_oak_oil_o78_detail.jpg"
    },
    {
      id: 5,
      name: "Panca BM0489",
      description: "Panca intrecciata con struttura in rovere e seduta in corda naturale, perfetta per ingressi e zone relax.",
      image: "https://res.cloudinary.com/dfwzl0ito/image/fetch/c_scale,w_1200,f_auto/https%3A%2F%2Fadmincms.carlhansen.com%2Fglobalassets%2Fproducts%2Fcoffee-tables%2Fbm0489%2Fbm0489l_oak_oil_papercord_natural_bm0555_160_oak_oil_detail.jpg"
    },
    {
      id: 6,
      name: "Sedia Outdoor AH604",
      description: "Sedia da esterni in teak non trattato, pensata per durare nel tempo senza rinunciare a estetica e sostenibilità.",
      image: "https://res.cloudinary.com/dfwzl0ito/image/fetch/c_scale,w_640,f_auto/https%3A%2F%2Fadmincms.carlhansen.com%2Fglobalassets%2Fproducts%2Foutdoor-furniture%2Fah604%2Fah604_teak_untreated_v3.jpg"
    },
    {
      id: 7,
      name: "Divano Lounge Outdoor EOOS",
      description: "Divano modulare da esterno in teak con cuscini idrorepellenti, ideale per ambienti outdoor raffinati e sostenibili.",
      image: "https://res.cloudinary.com/dfwzl0ito/image/fetch/c_scale,w_640,f_auto/https%3A%2F%2Fadmincms.carlhansen.com%2Fglobalassets%2Fproducts%2Foutdoor-furniture%2Feoos-3-seater-with-lounge%2Fe541_e511_e023_teak_untreated_panamaalga_lifeoat_cu_ritmolaguna_lisoduna.jpg"
    },
    {
      id: 8,
      name: "Sedia Cross Chair - interno moderno",
      description: "Sedia in legno naturale in un contesto abitativo contemporaneo con luce calda.",
      image: "https://taktcph.com/wp-content/uploads/2022/11/lifestylecrosschair221114.jpg.webp"
    },
    {
      id: 9,
      name: "Divano modulare Takt - composizione angolare",
      description: "Divano componibile modulare in tessuto grigio, dallo stile nordico e sostenibile.",
      image: "https://taktcph.com/wp-content/uploads/2022/09/splitmodule-0003-2022-06-01-takt-y2126341.jpg.webp"
    },
    {
      id: 10,
      name: "Divano modulare Takt - composizione con chaise longue",
      description: "Versione allungata del divano modulare Takt, ideale per spazi rilassanti.",
      image: "https://taktcph.com/wp-content/uploads/2022/09/splitmodule-0007-2022-06-01-takt-y2126488.png.webp"
    },
    {
      id: 11,
      name: "Sedia Crossbar con divano modulare",
      description: "Combinazione tra sedia in legno e divano, per un salotto elegante e funzionale.",
      image: "https://taktcph.com/wp-content/uploads/2022/01/splitmodule-0014-2021-11-10-takt-veranda1860-1crossbarchair.jpg"
    },
    {
      id: 12,
      name: "Abitazione in stile scandinavo con arredi Takt",
      description: "Interni caldi con pavimenti in legno chiaro e mobili minimalisti.",
      image: "https://taktcph.com/wp-content/uploads/2019/10/t05-lifestylehouse02.webp"
    },
    {
      id: 13,
      name: "Divano Spoke Gallery - ambientazione neutra",
      description: "Divano dalle linee leggere, in uno spazio calmo e luminoso.",
      image: "https://taktcph.com/wp-content/uploads/2023/08/galleryspokesofa230831-0001-2023-08-22-takt157132.jpg.webp"
    },
    {
      id: 14,
      name: "Divano Spoke modulare - vista prospettica",
      description: "Vista laterale del divano Spoke modulare in ambiente scandinavo.",
      image: "https://taktcph.com/wp-content/uploads/2023/05/splitmodulespokesofa230519-0001s-0012-m-2.png.webp"
    },
    {
      id: 15,
      name: "Piastrella Eik - texture naturale",
      description: "Pavimento effetto legno chiaro della serie Eik, elegante e moderno.",
      image: "https://www.refin-ceramic-tiles.com/wp-content/uploads/2024/09/Slider-Eik-2-1920x1012.jpg"
    },
    {
      id: 16,
      name: "Piastrella Etherea - design soft",
      description: "Texture delicata e luminosa della collezione Etherea, ideale per spazi minimal.",
      image: "https://www.refin-ceramic-tiles.com/wp-content/uploads/2024/09/Slider-Etherea-1920x1012.jpg"
    },
    {
      id: 17,
      name: "Pavimento Refin Beat in ambiente living",
      description: "Rivestimento moderno effetto cemento in soggiorno elegante e luminoso.",
      image: "https://www.refin-ceramic-tiles.com/wp-content/uploads/2024/04/beat-in-home-1920x1012.jpg"
    },
    {
      id: 18,
      name: "Piastrella Blended Natural - interni raffinati",
      description: "Ambiente sofisticato con superfici in gres effetto pietra naturale.",
      image: "https://www.refin-ceramic-tiles.com/file/1680x0/ambientazioni/_HEADER/Blended_Natural_60x120_Amb_02_Header.jpg"
    },
    {
      id: 19,
      name: "Piastrella Block Mist - tonalità morbide",
      description: "Gres porcellanato con finitura soft nei toni del grigio nebbia.",
      image: "https://www.refin-ceramic-tiles.com/file/1680x0/ambientazioni/_HEADER/Block-Mist-Soft-75x150.jpg"
    },
    {
      id: 20,
      name: "Sedia Palissade Cord - vista posteriore",
      description: "Design minimale e struttura robusta per esterni moderni.",
      image: "https://img.edilportale.com/product-thumbs/2b_Hay_PALISSADE-CORD_Go5IQXiGDY.jpeg"
    },
    {
      id: 21,
      name: "Tavolo pieghevole Traverse - struttura",
      description: "Vista dettagliata del tavolo pieghevole Traverse, elegante e funzionale.",
      image: "https://img.edilportale.com/product-thumbs/2b_Hay_TRAVERSE_aJuEqtOb3U.jpeg"
    },
    {
      id: 22,
      name: "Sedia Vitra Softshell - ambiente luminoso",
      description: "Sedia ergonomica con rivestimento chiaro in spazio moderno e minimal.",
      image: "https://static.vitra.com/media/asset/9338720/storage/v_fullbleed_1440x/87010140.jpg"
    },
    {
      id: 23,
      name: "Tavolo Vitra - uso professionale",
      description: "Ampio tavolo da lavoro in legno e acciaio in contesto open space.",
      image: "https://static.vitra.com/media/asset/9412465/storage/v_parallax_1920x1080/86862158.jpg"
    },
    {
      id: 24,
      name: "Tavolo Vitra - contesto domestico",
      description: "Tavolo in legno chiaro in una zona giorno luminosa e accogliente.",
      image: "https://static.vitra.com/media-resized/Pd5JWD38RwS1WRdulNmoLN2jHLVAyOAWeITbiJSY8ZI/fill/1440/810/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzk0NzA4Mjkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC84NzExMzcyMi5qcGc.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-sm sm:text-base">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
  {/* Overlay con sfumatura */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#1c2841]/75 to-transparent z-10"></div>

  {/* Immagine di sfondo */}
  <motion.div
    initial={{ scale: 1.1, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className="absolute inset-0 w-full h-full z-0"
  >
    <img
      src="https://taktcph.com/wp-content/uploads/2023/08/galleryspokesofa230831-0001-2023-08-22-takt157132.jpg.webp"
      alt="Sfondo design sostenibile"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* Contenuto del testo */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 z-20">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants}
      className="max-w-2xl"
    >
      <motion.h1
        variants={fadeInUpVariants}
        className="text-3xl sm:text-5xl font-light mb-6 text-[#FAF3E0]"
      >
        Design che <span className="font-semibold">rigenera</span> il nostro
        mondo
      </motion.h1>
      <motion.p
        variants={fadeInUpVariants}
        className="text-base sm:text-lg text-[#F5F5DC] mb-8"
      >
        Dalla nostra trasformazione etica nel 2025, abbiamo pionierizzato
        soluzioni di design sostenibile che restituiscono più di quanto
        prendono.
      </motion.p>
    </motion.div>
  

    <motion.div variants={fadeInUpVariants} className="flex flex-col sm:flex-row gap-4">
      <Button className="bg-[#8BAF9C] hover:bg-[#7A9A89] text-white px-6 py-3 text-center text-sm sm:text-base">
        <Link to="/products" className="flex items-center justify-center">
          Esplora i nostri prodotti <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button
        variant="outline"
        className="border-[#D9C5B2] text-[#555555] hover:bg-[#D9C5B2]/10 px-6 py-3 text-sm sm:text-base"
      >
        <Link to="/our-story" className="flex items-center justify-center">
          La nostra storia
        </Link>
      </Button>
    </motion.div>
  </div>
</section>

      {/* Mission Statement */}
      <section className="bg-[#F5F3F0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {[{
              icon: <Leaf className="h-8 w-8 text-[#8BAF9C]" />, bg: "bg-[#8BAF9C]/20",
              title: "Materiali rigenerativi", 
              desc: "Utilizziamo solo materiali che rigenerano gli ecosistemi o sono infinitamente riciclabili nel nostro sistema a circuito chiuso."
            }, {
              icon: <RefreshCw className="h-8 w-8 text-[#D9C5B2]" />, bg: "bg-[#D9C5B2]/20",
              title: "Economia circolare", 
              desc: "Ogni prodotto è progettato per essere smontato, riparato e infine trasformato in nuovi oggetti."
            }, {
              icon: <Globe className="h-8 w-8 text-[#A9A9A9]" />, bg: "bg-[#A9A9A9]/20",
              title: "Impatto positivo netto", 
              desc: "Le nostre operazioni sequestrano più carbonio di quanto emettano e ripristinano attivamente la biodiversità."
            }].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-[#333333]">{item.title}</h3>
                <p className="text-[#555555] text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-10 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#333333] mb-2">
                Design <span className="font-medium">in evidenza</span>
              </h2>
              <p className="text-[#555555] max-w-2xl text-sm sm:text-base">
                Scopri le nostre ultime innovazioni in vivibilità sostenibile, dove bellezza incontra responsabilità.
              </p>
            </div>
            <div className="mt-2 sm:mt-0 sm:ml-4 sm:text-right sm:self-end">
              <Button asChild variant="link" className="text-[#8BAF9C] hover:text-[#7A9A89] text-sm">
                <Link to="/products">Vedi tutti i prodotti <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map(product => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white text-sm">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="bg-[#8BAF9C] text-white text-xs px-2 py-1 rounded-full">Rigenerativo</span>
                          <span className="bg-[#D9C5B2] text-white text-xs px-2 py-1 rounded-full">Biodegradabile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-base font-medium text-[#333333] mb-1">{product.name}</h3>
                    <p className="text-sm text-[#555555]">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <NewsletterSubscription />
        </div>
      </section>
    </div>
  );
};

export default Home;