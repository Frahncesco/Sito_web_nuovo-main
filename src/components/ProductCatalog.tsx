import React, { useState, useEffect } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { defaultProducts } from "./ProductsData";
import { Product } from "./ProductsData";

interface ProductCatalogProps {
  products?: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const displayProducts = products.length > 0 ? products : defaultProducts;

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(displayProducts.map((product) => product.category))
    );
    setCategories(uniqueCategories);
  }, [displayProducts]);

  useEffect(() => {
    let filtered = displayProducts;

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategories, displayProducts]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };

  const productsToDisplay =
    filteredProducts.length > 0 ? filteredProducts : displayProducts;

  return (
    <div className="bg-background min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-foreground">
          Prodotti Sostenibili
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl text-sm sm:text-base">
          Scopri la nostra collezione di prodotti a design rigenerativo, realizzati con
          principi di economia circolare e materiali sostenibili innovativi.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {categories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {(searchQuery || selectedCategories.length > 0) && (
              <Button variant="ghost" onClick={clearFilters}>
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsToDisplay.map((product) => (
            <div className="h-full" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* No results */}
        {productsToDisplay.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products found matching your criteria.
            </p>
            <Button variant="link" onClick={clearFilters} className="mt-2">
              Clear filters
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProductCatalog;