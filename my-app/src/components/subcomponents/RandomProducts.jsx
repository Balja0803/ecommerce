import "../styles/randomproducts.css";
export default function RandomProducts(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className="randomProducts">
      <div className="firstProduct">
        <img src={data[0].image} alt="product"></img>
        <h3>{data[0].name}</h3>
        <p> $ {data[0].price} </p>
      </div>
      <div>
        <div className="secondProduct">
          <img src={data[1].image} alt="product"></img>
          <h3>{data[1].name}</h3>
          <p> $ {data[1].price} </p>
        </div>
        <div className="thirdProduct">
          <img src={data[2].image} alt="product"></img>
          <h3>{data[2].name}</h3>
          <p> $ {data[2].price} </p>
        </div>
      </div>
    </div>
  );
}
