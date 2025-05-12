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
  {
    id: "8",
    name: "T02 Soft Chair",
    description: "Soft and versatile dining chair with a clean design and customizable finishes.",
    image: "https://content.cylindo.com/api/v2/5145/products/T02%20SOFT%20CHAIR/frames/1/T02%20SOFT%20CHAIR.JPG?background=FFFFFF&feature=COMBINATION:1002-006",
    category: "Furniture",
    sustainabilityScore: 91,
    materials: ["FSC-certified wood", "Foam", "Recycled fabric"],
    recyclable: true,
    lifespan: "15 years",
  },
  {
    id: "9",
    name: "Palissade Cord Chair",
    description: "Outdoor chair with a sleek steel frame and weather-resistant finish, designed for durability and style.",
    image: "https://img.edilportale.com/product-thumbs/b_Hay_PALISSADE-CORD_pNg3kfVR66.jpeg",
    category: "Furniture",
    sustainabilityScore: 89,
    materials: ["Powder-coated steel", "Outdoor-grade polyester cord"],
    recyclable: false,
    lifespan: "15 years",
  },
  {
    id: "10",
    name: "Cera Fumo Tile 120x120",
    description: "High-quality ceramic tile with a smoky finish, ideal for sustainable interior surfaces.",
    image: "https://www.refin-ceramic-tiles.com/wp-content/uploads/2024/02/Cera_Fumo_120x120_-1536x1024.jpg",
    category: "Surfaces",
    sustainabilityScore: 87,
    materials: ["Ceramic", "Natural pigments"],
    recyclable: true,
    lifespan: "30 years",
  }
];