import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../ProductsCard/ProductsCard";
import ProductsGrid from "../ProductsGrid/ProductsGrid";

function Homepage() {
  return (
    <>
      <Navbar />

      <ProductsGrid />

      <Footer />
    </>
  );
}

export default Homepage;
