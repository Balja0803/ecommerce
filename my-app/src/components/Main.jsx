import Products from "./subcomponents/Products";
import Slider from "./subcomponents/Slider";
import { data } from "./util/data";
import "./styles/main.css";
import SaleUpTo from "./subcomponents/SaleUpTo";
import RandomProducts from "./subcomponents/RandomProducts";
import Brands from "./subcomponents/Brands";

export default function Main() {
  return (
    <div className="main">
      <Slider />
      <div className="products-title">
        <h3>Popular products</h3>
        <ul className="product-filter">
          <li>Cameras</li>
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
        {data.slice(0, 8).map((contents) => (
          <Products
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            sales={contents.sale}
          />
        ))}
      </div>
      <SaleUpTo />
      <RandomProducts data={data.slice(8, 11)} />
      <Brands />
    </div>
  );
}
