import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cart from "../../icons/Cart";

export default function ProductCard({ product }) {
  return (
    <Card border="primary" style={{ width: "200px", height: " 300px" }}>
      <Card.Img
        variant="top"
        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}$</Card.Text>
        <Button variant="primary">цааш үзэх</Button>
        <Cart />
      </Card.Body>
    </Card>
  );
}
