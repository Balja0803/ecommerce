import Products from "./subcomponents/Products";
import Slider from "./subcomponents/Slider";
import { data } from "./util/data";
import "./styles/main.css";
import SaleUpTo from "./subcomponents/SaleUpTo";
import RandomProducts from "./subcomponents/RandomProducts";
import Brands from "./subcomponents/Brands";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

import { ProductContext } from "../layout/ProductContext";

export default function Main() {
  const { setProducts } = useContext(ProductContext);
  useEffect(() => {
    axios.get("http://localhost:2020/products").then((res) => {
      console.log("serverees data:", res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="main">
      <Slider />
      <Products />
      {/* <div className="products-title">
        <h3>Popular products</h3>
        <ul className="product-filter">
          <li>Appliance</li>
          <li>Laptops</li>
          <li>Tablets</li>
          <li>Mouse</li>
          <li>Sale</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {products &&
          products.map((contents) => (
            <Products
              key={contents.id}
              image={contents.image}
              name={contents.name}
              price={contents.price}
              sales={contents.sale}
            />
          ))}
      </div> */}
      <SaleUpTo />
      <h3>Random Products</h3>
      <RandomProducts data={data.slice(8, 11)} />
      <Brands />
    </div>
  );
}
