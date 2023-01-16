export default function Products(props) {
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img src={props.image} alt="product-img" className="productImage"></img>
        <p>Shopping card svg</p>

        <div className="productCard-content">
          <h3 className="productName">{props.name}</h3>
          <div className="displayStack_1">
            <div className="productPrice"> ${props.price}</div>
            <div className="productSales"> {props.sales} unit sold </div>
          </div>
        </div>
      </div>
    </div>
  );
}
