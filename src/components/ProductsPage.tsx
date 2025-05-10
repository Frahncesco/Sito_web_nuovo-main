import ProductCatalog from "../components/ProductCatalog";

function ProductsPage() {
  return (
    <div className="bg-[#FCFBF8] p-4 sm:p-2 lg:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#8BAF9C] mb-12 text-center">
        Our Products
      </h1>
      <ProductCatalog />
    </div>
  );
}

export default ProductsPage;