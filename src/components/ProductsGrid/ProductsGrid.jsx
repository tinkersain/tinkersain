import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProductsCard from "../ProductsCard/ProductsCard";

function ProductsGrid() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
    >
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
    </SimpleGrid>
  );
}

export default ProductsGrid;
