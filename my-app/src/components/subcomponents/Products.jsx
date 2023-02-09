import "../styles/products.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDataContext } from "../../layout/DataContext";

export default function Products() {
  const { products, setProducts } = useDataContext();
  useEffect(() => {
    axios.get("http://localhost:2020/products").then((res) => {
      console.log("server data:", res.data);
      setProducts(res.data);
    });
  }, []);
  console.log("baraa:", products);
  return (
    <div className="products">
      <div>Popular products</div>
      <div>
        <ul>
          {products.map((product) => {
            console.log(product.category);
            <li>{product.category}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
