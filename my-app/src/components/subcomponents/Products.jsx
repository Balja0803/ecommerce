import "../styles/products.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../layout/ProductContext";
import ProductCard from "./ProductCard";
// import Paginations from "./Paginations";

export default function Products() {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const nPages = Math.ceil(products.length / productsPerPage);
  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((res) => {
        console.log("server data:", res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Loading failed");
      });
  }, []);

  return (
    <div className="products">
      <div className="product-upper">
        <div>Popular products</div>
        <div>
          <ul className="product-categories">
            <li>Cameras</li>
            <li>Laptops</li>
            <li>Tablets</li>
            <li>Mouse</li>
            <li>Sale</li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      {/* <Paginations
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  );
}
