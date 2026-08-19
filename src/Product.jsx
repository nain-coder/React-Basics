import './Product.css';

export default function Product({ title, price = 1 }) {

let isDiscount = price > 30000;
  return (
    <div
      className="Product"
      style={{ backgroundColor: isDiscount ? "wheat" : null }}
    >
      <h2>{title}</h2>
      <p>Price : {price}</p>
      {isDiscount && <p>Discount of 5%</p>}
    </div>
  );
}