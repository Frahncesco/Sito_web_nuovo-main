import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, RefreshCw, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const featuredProducts = [
    {
      id: 1,
      name: "EcoChair 3.0",
      description: "Self-adapting furniture made from reclaimed ocean plastics",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    },
    {
      id: 2,
      name: "Bioluminescent Lamp",
      description:
        "Energy-free lighting using engineered sustainable organisms",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    },
    {
      id: 3,
      name: "AirPurify Plant Stand",
      description: "Living wall panels that purify air and regulate humidity",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    },
    {
      id: 4,
      name: "NomadDesk",
      description: "Portable workspace solution made from sustainable materials",
      image:
        "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    },
    {
      id: 5,
      name: "SonicSpeaker",
      description:
        "Energy-efficient speaker with carbon-negative manufacturing.",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFBF8]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8BAF9C]/20 to-transparent"></div>
          <motion.div
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80"
              alt="Sustainable design background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeInUpVariants}
              className="text-4xl md:text-6xl font-light mb-6 text-[#FAF3E0]"
            >
              Design that <span className="font-semibold">regenerates</span> our world
            </motion.h1>

            <motion.p
              variants={fadeInUpVariants}
              className="text-lg md:text-xl text-[#F5F5DC] mb-8"
            >
              Since our ethical transformation in 2025, we've pioneered sustainable design
              solutions that give back more than they take. Welcome to the future of
              circular creation.
            </motion.p>
          </motion.div>

                
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#8BAF9C] hover:bg-[#7A9A89] text-white px-8 py-6">
              <Link to="/products" className="flex items-center">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#D9C5B2] text-[#555555] hover:bg-[#D9C5B2]/10 px-8 py-6">
              <Link to="/our-story" className="flex items-center">
                Our Transformation Story
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>



      {/* Mission Statement */}
      <section className="bg-[#F5F3F0] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#8BAF9C]/20 flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-[#8BAF9C]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#333333]">
                Regenerative Materials
              </h3>
              <p className="text-[#555555]">
                We use only materials that replenish ecosystems or are
                infinitely recyclable in our closed-loop system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#D9C5B2]/20 flex items-center justify-center mb-4">
                <RefreshCw className="h-8 w-8 text-[#D9C5B2]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#333333]">
                Circular Economy
              </h3>
              <p className="text-[#555555]">
                Every product is designed for disassembly, repair, and eventual
                transformation into new items.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#A9A9A9]/20 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-[#A9A9A9]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-[#333333]">
                Net Positive Impact
              </h3>
              <p className="text-[#555555]">
                Our operations sequester more carbon than they emit and actively
                restore biodiversity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section id="products" className="py-20 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light text-[#333333] mb-3">
                Featured <span className="font-medium">Designs</span>
              </h2>
              <p className="text-[#555555] max-w-2xl">
                Explore our latest innovations in sustainable living, where
                beauty meets responsibility.
              </p>
            </div>
            <Button
              asChild
              variant="link"
              className="text-[#8BAF9C] hover:text-[#7A9A89]"
            >
              <Link to="/products">
                View All Products <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-[#8BAF9C] text-white text-xs px-2 py-1 rounded-full">
                            Regenerative
                          </span>
                          <span className="bg-[#D9C5B2] text-white text-xs px-2 py-1 rounded-full">
                            Biodegradable
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-[#333333] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#555555]">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Story Preview */}
      <section className="py-20 bg-[#8BAF9C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-[#333333] mb-4">
              Our <span className="font-medium">Transformation</span> Story
            </h2>
            <p className="text-[#555555] mb-6">In 2025, we began a bold transformation to redefine our company’s mission and its impact on the world. Guided by visionary leadership and a passionate team of innovators, we shifted from a traditional design firm to a regenerative force dedicated to creating a sustainable, harmonious future.</p>

            <p className="text-[#555555] mb-6">We embraced circular design, going beyond sustainability to create products that not only last but also regenerate and positively impact the environment. Every stage of our process is driven by the belief that design should not only serve human needs but also restore and nurture the planet.</p>

            <p className="text-[#555555] mb-6">Ten years later, we’re proud to be leaders in the regenerative design movement. Our products are designed to be part of a continuous cycle, where materials are reused, recycled, and regenerated, leaving no waste behind. It’s about more than just functionality; it’s about responsibility and care for the earth.</p>

            <p className="text-[#555555] mb-6">Our journey is a testament to resilience, innovation, and a vision for a greener future. With circular design at our core, we’re shaping a world that is just, sustainable, and regenerative for generations to come.</p>

            <Button
                className="bg-[#D9C5B2] hover:bg-[#C8B4A1] text-white"
                onClick={() => navigate("/our-story")}
              >
                Read Our Full Story
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-xl">
                <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80"
                alt="Natural Environment with Wooden Furniture"
                className="w-full h-full object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=blondegirl&hair=long&hairColor=FFD700&mouth=smile" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div className="text-white">
                        <div className="font-medium">The New Atelier 35</div>
                      <div className="text-xs opacity-70">
                        The future of circular creation.
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Old logo transformed (ARG element) */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg p-2 flex items-center justify-center">
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
};


export default Home;
