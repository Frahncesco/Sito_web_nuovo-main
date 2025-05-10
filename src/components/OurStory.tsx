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
                Our <span className="font-medium">Transformation</span> Story
              </h2>

              <div className="flex-1 overflow-y-auto pr-4 space-y-6 text-[#555555]">
                <p>
                In 2025, we embarked on a profound and uncompromising journey—one that redefined not only our company’s mission but also the very nature of our relationship with the planet. What began as a strategic pivot soon evolved into a holistic transformation, guided by a bold vision and a deeply held conviction that design must serve both people and the planet. With the support of a passionate, cross-disciplinary team of innovators, we dismantled the conventions of traditional design practices and laid the foundation for something radically different: a regenerative enterprise devoted to planetary healing and systemic change.
                </p>

                <p>
                Our transformation was not incremental—it was foundational. We fully embraced the principles of circular and regenerative design, moving beyond sustainability as a goal and embracing it as a baseline. In our new paradigm, products are conceived as living elements within a larger ecological and social system—designed not only to last, but to continuously evolve, regenerate, and contribute positively to the biosphere. We see every product as a potential agent of restoration: a tool for rebuilding soil, purifying air, sequestering carbon, and nurturing biodiversity. Design, for us, is no longer a process of creating objects—it is a responsibility, a dialogue, and a promise to future generations.
                </p>

                <p>
                At every stage of creation—from material sourcing and manufacturing to product lifecycle and re-integration into the ecosystem—we ask a fundamental question: Does this give more than it takes? Our design ethos is rooted in the belief that aesthetics and ethics are not at odds, but inherently intertwined. Beauty is not merely how a product looks, but how it behaves within the world it inhabits—how it nourishes, restores, and uplifts.
                </p>

                <p>
                Now, ten years after that catalytic shift, we stand as proud pioneers of the regenerative design movement. Our products and projects are living testaments to what is possible when innovation is guided by integrity and interdependence. From biodegradable furniture crafted from mycelium to self-sustaining lighting systems powered by bioluminescent organisms, every creation is born from a commitment to circularity, resilience, and ecological intelligence.
                </p>

                <p>
                But our story is not just about innovation—it is about care. It is about recognizing the urgent need for systemic change and choosing to lead by example. It is about designing with empathy—for communities, for ecosystems, and for the invisible futures we are shaping with every decision. We are no longer content to minimize harm; we are here to create net-positive impact, to repair what has been damaged, and to imagine—and build—a future in which all life can thrive.
                </p>

                <p>
                As we look ahead, our mission remains clear and unwavering: to push the boundaries of what design can achieve, to foster regenerative cultures, and to co-create a world where design is not only beautiful and functional, but also deeply just, life-affirming, and healing.
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
                          The future of circular creation.
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
