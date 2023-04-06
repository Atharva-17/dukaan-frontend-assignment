import "./ProductCard.css";

const ProductCard = ({ image, title, details }) => {
  return (
    <div className="product_card">
      <img src={image} alt="privacy generator" />
      <h4 className="heading1">{title}</h4>
      <p className="desc">{details}</p>
    </div>
  );
};

export default ProductCard;
