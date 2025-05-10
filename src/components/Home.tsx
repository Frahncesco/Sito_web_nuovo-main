// Home.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, RefreshCw, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useNavigate, Link } from "react-router-dom";

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
    { id: 1, name: "EcoChair 3.0", description: "Self-adapting furniture made from reclaimed ocean plastics", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80" },
    { id: 2, name: "Bioluminescent Lamp", description: "Energy-free lighting using engineered sustainable organisms", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80" },
    { id: 3, name: "AirPurify Plant Stand", description: "Living wall panels that purify air and regulate humidity", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80" },
    { id: 4, name: "NomadDesk", description: "Portable workspace solution made from sustainable materials", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80" },
    { id: 5, name: "SonicSpeaker", description: "Energy-efficient speaker with carbon-negative manufacturing.", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-sm sm:text-base">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8BAF9C]/20 to-transparent"></div>
          <motion.div
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80"
              alt="Sustainable design background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainerVariants} className="max-w-2xl">
            <motion.h1 variants={fadeInUpVariants} className="text-3xl sm:text-5xl font-light mb-6 text-[#FAF3E0]">
              Design that <span className="font-semibold">regenerates</span> our world
            </motion.h1>
            <motion.p variants={fadeInUpVariants} className="text-base sm:text-lg text-[#F5F5DC] mb-8">
              Since our ethical transformation in 2025, we've pioneered sustainable design solutions that give back more than they take.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeInUpVariants} className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#8BAF9C] hover:bg-[#7A9A89] text-white px-6 py-3 text-center text-sm sm:text-base">
              <Link to="/products" className="flex items-center justify-center">
                Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-[#D9C5B2] text-[#555555] hover:bg-[#D9C5B2]/10 px-6 py-3 text-sm sm:text-base">
              <Link to="/our-story" className="flex items-center justify-center">
                Our Transformation Story
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
              title: "Regenerative Materials", desc: "We use only materials that replenish ecosystems or are infinitely recyclable in our closed-loop system."
            }, {
              icon: <RefreshCw className="h-8 w-8 text-[#D9C5B2]" />, bg: "bg-[#D9C5B2]/20",
              title: "Circular Economy", desc: "Every product is designed for disassembly, repair, and eventual transformation into new items."
            }, {
              icon: <Globe className="h-8 w-8 text-[#A9A9A9]" />, bg: "bg-[#A9A9A9]/20",
              title: "Net Positive Impact", desc: "Our operations sequester more carbon than they emit and actively restore biodiversity."
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
              Featured <span className="font-medium">Designs</span>
            </h2>
            <p className="text-[#555555] max-w-2xl text-sm sm:text-base">
              Explore our latest innovations in sustainable living, where beauty meets responsibility.
            </p>
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-4 sm:text-right sm:self-end">
            <Button asChild variant="link" className="text-[#8BAF9C] hover:text-[#7A9A89] text-sm">
              <Link to="/products">View All Products <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
                          <span className="bg-[#8BAF9C] text-white text-xs px-2 py-1 rounded-full">Regenerative</span>
                          <span className="bg-[#D9C5B2] text-white text-xs px-2 py-1 rounded-full">Biodegradable</span>
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
    </div>
  );
};

export default Home;