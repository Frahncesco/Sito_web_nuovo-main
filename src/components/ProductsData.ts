export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  sustainabilityScore: number;
  materials: string[];
  recyclable: boolean;
  lifespan: string;
}

export const defaultProducts: Product[] = [
  {
    id: "1",
    name: "EcoChair 3.0",
    description: "Ergonomic chair made from reclaimed ocean plastic and bamboo.",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    category: "Furniture",
    sustainabilityScore: 95,
    materials: ["Ocean plastic", "Bamboo", "Organic cotton"],
    recyclable: true,
    lifespan: "25 years",
  },
  {
    id: "2",
    name: "LuminaLamp",
    description: "Solar-powered ambient lamp with biodegradable casing.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    category: "Lighting",
    sustainabilityScore: 98,
    materials: ["Mycelium composite", "Recycled glass", "Solar cells"],
    recyclable: true,
    lifespan: "15 years",
  },
  {
    id: "3",
    name: "TerraCup",
    description: "Self-cleaning water vessel made from regenerative materials.",
    image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=800&q=80",
    category: "Kitchenware",
    sustainabilityScore: 92,
    materials: ["Algae bioplastic", "Cork", "Nano-purification layer"],
    recyclable: true,
    lifespan: "10 years",
  },
  {
    id: "4",
    name: "AirPurify Plant Stand",
    description: "Smart plant stand that enhances air purification capabilities of plants.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    category: "Home",
    sustainabilityScore: 90,
    materials: ["Reclaimed wood", "Recycled aluminum", "Moss filter"],
    recyclable: true,
    lifespan: "20 years",
  },
  {
    id: "5",
    name: "NomadDesk",
    description: "Collapsible workspace solution made from sustainable materials.",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    category: "Furniture",
    sustainabilityScore: 88,
    materials: ["Bamboo", "Hemp composite", "Recycled steel"],
    recyclable: true,
    lifespan: "15 years",
  },
  {
    id: "6",
    name: "SonicSpeaker",
    description: "Energy-efficient speaker with carbon-negative manufacturing.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    category: "Electronics",
    sustainabilityScore: 85,
    materials: ["Mushroom leather", "Recycled electronics", "Hemp fiber"],
    recyclable: true,
    lifespan: "12 years",
  },
];