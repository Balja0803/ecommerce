import Products from "./subcomponents/Products";
import Slider from "./subcomponents/Slider";
import { data } from "./util/data";

export default function Main() {
  return (
    <div>
      <Slider />
      {data.map((contents) => (
        <Products
          key={contents.id}
          image={contents.image}
          name={contents.name}
          price={contents.price}
        />
      ))}
    </div>
  );
}
