// ProductsPage.tsx
import React from "react";
import ProductCatalog from "../components/ProductCatalog";

function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#FCFBF8] p-12">
      <h1 className="text-4xl font-bold text-[#8BAF9C] mb-12 text-center">
        Our Products
      </h1>
      <ProductCatalog />
    </div>
  );
}

export default ProductsPage;